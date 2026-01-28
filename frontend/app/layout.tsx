import { FeatureFlagsProvider } from '@/app/context/FeatureFlagContext';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { getFeatureFlags } from '@/app/services/getFeatureFlags';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const featureFlags = await getFeatureFlags();
    return (
        <html lang="en">
            <FeatureFlagsProvider features={featureFlags}>
                <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                    <div className="container mx-auto my-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
                </body>
            </FeatureFlagsProvider>
        </html>
    );
}
