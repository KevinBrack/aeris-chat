import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function Home() {
    const { userId } = await auth();

    if (userId) {
        redirect("/chat");
    }

    return (
        <main className="min-h-screen bg-background">
            {/* Header with login button */}
            <header className="fixed w-full p-4 z-10">
                <div className="flex justify-end max-w-7xl mx-auto">
                    <SignInButton>
                        <Button
                            variant="outline"
                            size="lg"
                            className="font-medium border-secondary hover:border-secondary hover:bg-secondary/10 text-secondary"
                        >
                            Login with Google
                        </Button>
                    </SignInButton>
                </div>
            </header>

            {/* Hero section */}
            <div className="flex items-center justify-center min-h-screen p-4">
                <Card className="bg-background/50 border-primary/20 backdrop-blur-sm max-w-2xl w-full">
                    <CardHeader>
                        <h1 className="text-6xl font-bold text-center">
                            Meet{" "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                                Aeris
                            </span>
                        </h1>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xl text-muted-foreground text-center">
                            Your brilliantly witty AI companion with a dash of
                            quantum sass
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
