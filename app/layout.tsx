import { ReactNode } from 'react';
import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
    title: {default: "senna.email", template: "%s | senna.email"},
    description: "Encrypted no-log email service.",
    robots: {index: false, follow: false},
    creator: "senna.email",
    metadataBase: new URL("https://senna.email"),

}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}