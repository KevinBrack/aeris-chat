export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-background p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-primary">
                    Terms of Service
                </h1>

                <section className="space-y-6 text-foreground">
                    <p className="text-lg">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-primary">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing and using Aeris Chat (&ldquo;the
                            Service&rdquo;), you agree to be bound by these
                            Terms of Service and all applicable laws and
                            regulations. If you do not agree with any of these
                            terms, you are prohibited from using the Service.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-primary">
                            2. Use License
                        </h2>
                        <p>
                            Permission is granted to temporarily access the
                            Service for personal, non-commercial use. This is
                            the grant of a license, not a transfer of title, and
                            under this license you may not:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modify or copy the materials</li>
                            <li>
                                Use the materials for any commercial purpose
                            </li>
                            <li>
                                Attempt to reverse engineer any software
                                contained in the Service
                            </li>
                            <li>
                                Remove any copyright or other proprietary
                                notations
                            </li>
                            <li>Transfer the materials to another person</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-primary">
                            3. User Accounts
                        </h2>
                        <p>
                            To access certain features of the Service, you must
                            create an account. You are responsible for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Maintaining the confidentiality of your account
                            </li>
                            <li>
                                All activities that occur under your account
                            </li>
                            <li>
                                Notifying us immediately of any unauthorized use
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-primary">
                            4. Acceptable Use
                        </h2>
                        <p>You agree not to use the Service to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Violate any applicable laws or regulations</li>
                            <li>Harass, abuse, or harm others</li>
                            <li>Transmit any harmful code or malware</li>
                            <li>
                                Interfere with the proper functioning of the
                                Service
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-primary">
                            5. Service Modifications
                        </h2>
                        <p>We reserve the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Modify or discontinue the Service at any time
                            </li>
                            <li>Change these terms of service as needed</li>
                            <li>Limit or restrict access to the Service</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-primary">
                            6. Limitation of Liability
                        </h2>
                        <p>
                            The Service is provided &ldquo;as is&rdquo;. We make
                            no warranties, expressed or implied, and hereby
                            disclaim all warranties, including without
                            limitation implied warranties of merchantability and
                            fitness for a particular purpose.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-primary">
                            7. Contact
                        </h2>
                        <p>
                            If you have any questions about these Terms of
                            Service, please contact us at:
                        </p>
                        <p>Email: terms@aeris-chat.com</p>
                    </section>
                </section>
            </div>
        </main>
    );
}
