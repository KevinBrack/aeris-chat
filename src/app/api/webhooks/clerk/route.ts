import { WebhookEvent } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const payload: WebhookEvent = await req.json();

    // Handle the webhook
    const eventType = payload.type;

    if (eventType === "user.created") {
        const { id, email_addresses, first_name, last_name, image_url } =
            payload.data;

        const primaryEmail = email_addresses?.[0]?.email_address;

        if (!primaryEmail) {
            return NextResponse.json(
                { error: "No email address found" },
                { status: 400 }
            );
        }

        try {
            const user = await prisma.user.create({
                data: {
                    clerkId: id,
                    email: primaryEmail,
                    firstName: first_name || null,
                    lastName: last_name || null,
                    imageUrl: image_url || null,
                },
            });

            return NextResponse.json(user, { status: 201 });
        } catch (error) {
            console.error("Error creating user:", error);
            return NextResponse.json(
                { error: "Error creating user" },
                { status: 500 }
            );
        }
    }

    return NextResponse.json({ message: "Webhook processed" }, { status: 200 });
}
