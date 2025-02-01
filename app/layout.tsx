import { ReactNode } from 'react';
import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
    title: "senna.email",
    description: "Encrypted no-log email service.",
    robots: "noindex, nofollow",
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