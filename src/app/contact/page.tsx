export default function ContactPage() {
    return (
        <div className="w-full flex-grow flex items-stretch">
            {/* 
        This page acts as a standalone representation of Slide 8, 
        giving the contact details their own dedicated full-page view.
      */}
            <section className="w-full flex flex-col md:flex-row bg-can-dark-green min-h-[calc(100vh-80px)] overflow-hidden relative">

                {/* Decorative Brand Bars */}
                <div className="absolute top-10 left-10 flex gap-2 z-20">
                    <div className="w-3 h-10 rounded-full bg-can-lime-green"></div>
                    <div className="w-3 h-16 -mt-2 rounded-full bg-can-med-green"></div>
                    <div className="w-3 h-8 mt-1.5 rounded-full bg-can-lime-green"></div>
                </div>

                {/* Left Content Area */}
                <div className="w-full md:w-[55%] flex flex-col justify-center px-10 py-20 md:pl-20 z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-can-white leading-none tracking-tight mb-10">
                        Get In<br />
                        <span className="text-can-lime-green">Touch</span>
                    </h1>

                    <ul className="flex flex-col gap-4 mb-10 list-none p-0">
                        <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 text-[14px] font-semibold break-words text-can-white">
                            <span className="w-10 h-10 min-w-[40px] bg-can-white text-can-lime-green flex items-center justify-center rounded-full text-lg">
                                <i className="fa-solid fa-location-dot"></i>
                            </span>
                            <span>2, West Road 7, Trans-Ekulu,<br />Enugu, Enugu State, Nigeria</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 text-[14px] font-semibold break-words text-can-white">
                            <span className="w-10 h-10 min-w-[40px] bg-can-white text-can-lime-green flex items-center justify-center rounded-full text-lg">
                                <i className="fa-solid fa-phone"></i>
                            </span>
                            <span>+234 705 780 1153</span>
                        </li>
                        <li className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 text-[14px] font-semibold break-words text-can-white">
                            <span className="w-10 h-10 min-w-[40px] bg-can-white text-can-lime-green flex items-center justify-center rounded-full text-lg">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <span>canintegratedsolutions@gmail.com</span>
                        </li>
                    </ul>

                    <div className="bg-black/20 p-6 rounded-xl border-l-[5px] border-can-lime-green text-[13px] text-[#e0e0e0] leading-[1.8] font-medium shadow-soft max-w-xl">
                        <div><strong className="text-can-white w-[170px] inline-block">Company Name:</strong> CAN INTEGRATED SOLUTIONS LTD</div>
                        <div><strong className="text-can-white w-[170px] inline-block">RC Number:</strong> 9221490</div>
                        <div><strong className="text-can-white w-[170px] inline-block">Company Type:</strong> Private Company Limited by Shares</div>
                        <div><strong className="text-can-white w-[170px] inline-block">Date of Registration:</strong> January 16, 2026</div>
                        <div><strong className="text-can-white w-[170px] inline-block">Status:</strong> Active</div>
                    </div>
                </div>

                {/* Right Angled Panel Area */}
                <div className="w-full md:w-[50%] md:absolute md:right-0 md:top-0 md:h-full bg-can-white md:[clip-path:polygon(25%_0,100%_0,100%_100%,0%_100%)] flex items-center justify-center p-12 min-h-[400px] relative z-0">
                    {/* Inner Background Image Overlay */}
                    <div className="absolute inset-0 bg-[url('/can_engineer.jpg')] bg-cover bg-center opacity-15"></div>

                    <div className="relative z-10 bg-can-white p-8 rounded-2xl shadow-strong w-[220px] md:translate-x-10">
                        <img
                            src="/can_logo.jpg"
                            alt="CAN Logo"
                            className="w-full h-auto object-contain block"
                        />
                    </div>
                </div>

            </section>
        </div>
    );
}