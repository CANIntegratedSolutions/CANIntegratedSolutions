import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "CAN Integrated Solutions LTD - Company Profile",
    description: "CAN INTEGRATED SOLUTIONS LTD is a diversified Nigerian company providing design, construction, agricultural innovations, project management, facility maintenance, and robust materials distribution systems.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body className={`${montserrat.className} bg-can-bg-light text-can-text-dark flex flex-col min-h-screen`}>
                <Navigation />
                {/* Wrapping children in a flex-grow container guarantees the footer is pushed down and visible */}
                <main className="pt-[80px] flex-grow flex flex-col w-full relative z-0">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}