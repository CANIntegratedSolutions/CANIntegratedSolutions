export default function Footer() {
    return (
        <footer className="w-full bg-can-dark-green text-can-white relative overflow-hidden mt-auto">
            {/* Decorative Bar Graphic overlay */}
            <div className="absolute top-12 left-12 flex gap-2 z-20 opacity-30">
                <div className="w-3 h-10 rounded-full bg-can-lime-green"></div>
                <div className="w-3 h-16 -mt-2 rounded-full bg-can-med-green"></div>
                <div className="w-3 h-8 mt-1.5 rounded-full bg-can-lime-green"></div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-8 py-20 flex flex-col md:flex-row gap-16 relative z-10">

                {/* Left Section: Contact Info */}
                <div className="flex-1 flex flex-col justify-center">
                    <h2 className="text-6xl md:text-7xl font-black text-can-white leading-none tracking-tight mb-10">
                        Partner<br />
                        <span className="text-can-lime-green">with us</span>
                    </h2>

                    <ul className="flex flex-col gap-4 list-none p-0">
                        <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 text-sm font-semibold break-words">
                            <span className="w-10 h-10 min-w-[40px] bg-can-white text-can-lime-green flex items-center justify-center rounded-full text-lg">
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <span>2, West Road 7, Trans-Ekulu,<br />Enugu, Enugu State, Nigeria</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 text-sm font-semibold break-words">
                            <span className="w-10 h-10 min-w-[40px] bg-can-white text-can-lime-green flex items-center justify-center rounded-full text-lg">
                                <i className="fa-solid fa-phone"></i>
                            </span>
                            <span>0816 294 7898</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 text-sm font-semibold break-words">
                            <span className="w-10 h-10 min-w-[40px] bg-can-white text-can-lime-green flex items-center justify-center rounded-full text-lg">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <span>canintegratedservices@gmail.com</span>
                        </li>
                    </ul>
                </div>

                {/* Right Section: Visual / Logo */}
                <div className="flex-1 relative flex items-center justify-center md:justify-end mt-12 md:mt-0">
                    <div className="absolute inset-0 bg-[url('/can_engineer.jpg')] bg-cover bg-center opacity-10 rounded-3xl md:[clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)]"></div>

                    <div className="relative z-20 bg-can-white p-6 rounded-2xl shadow-strong w-64 md:translate-x-8">
                        <img
                            src="/can_logo.jpg"
                            alt="CAN Logo"
                            className="w-full h-auto object-contain block"
                        />
                    </div>
                </div>

            </div>

            {/* Footer Bottom Bar */}
            <div className="border-t border-white/10 py-6 text-center text-xs font-medium text-white/50 bg-black/10">
                &copy; {new Date().getFullYear()} CAN INTEGRATED SOLUTIONS LTD. All Rights Reserved.
            </div>
        </footer>
    );
}