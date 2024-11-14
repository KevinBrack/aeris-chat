import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background/50 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 py-6">
                <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
                    <Link
                        href="/privacy"
                        className="hover:text-primary transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms"
                        className="hover:text-primary transition-colors"
                    >
                        Terms of Service
                    </Link>
                </div>
                <div className="mt-2 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Aeris Chat. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
}
