"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-can-white shadow-soft py-4 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <img
                            src="/can_logo.jpg"
                            alt="CAN Integrated Solutions LTD Logo"
                            className="h-12 w-auto object-contain cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${isActive
                                        ? "text-can-lime-green border-b-2 border-can-lime-green pb-1"
                                        : "text-can-dark-green hover:text-can-lime-green"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Hamburger */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden flex items-center text-can-dark-green text-2xl cursor-pointer hover:text-can-lime-green transition-colors bg-transparent border-none p-2"
                >
                    <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[80px] z-40 bg-can-white flex flex-col items-center pt-10 px-8 shadow-strong md:hidden">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`w-full text-center py-5 text-xl font-bold uppercase tracking-wide transition-colors duration-200 border-b border-gray-100 ${isActive
                                        ? "text-can-lime-green"
                                        : "text-can-dark-green hover:text-can-lime-green"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </>
    );
}