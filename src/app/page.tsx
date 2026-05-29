import Link from "next/link";

export default function HomePage() {
    return (
        <div className="w-full flex flex-col items-center">

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[90vh] bg-can-dark-green flex flex-col md:flex-row overflow-hidden">
                {/* Background Watermark */}
                <i className="fa-solid fa-globe absolute -bottom-24 -right-12 text-[400px] text-can-bg-light opacity-10 -rotate-12 pointer-events-none z-0"></i>

                {/* Left Content Area */}
                <div className="relative z-10 w-full md:w-1/2 px-8 py-20 md:py-32 md:pl-24 flex flex-col justify-center">
                    <h1 className="text-5xl md:text-7xl font-black text-can-white leading-tight tracking-tight mb-6">
                        CAN Integrated Solutions Ltd
                    </h1>
                    <p className="text-can-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-lg mb-10">
                        Delivering value-added, total quality services through innovative and customized solutions across Nigeria's key sectors.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/about" className="bg-can-lime-green text-can-dark-green text-center font-bold px-8 py-4 rounded-lg shadow-soft hover:bg-white transition-colors">
                            Discover More
                        </Link>
                        <Link href="/services" className="bg-transparent border-2 border-can-lime-green text-can-lime-green text-center font-bold px-8 py-4 rounded-lg hover:bg-can-lime-green hover:text-can-dark-green transition-colors">
                            Our Services
                        </Link>
                    </div>
                </div>

                {/* Right Angled Panel with Image Grid */}
                <div className="relative z-10 w-full md:w-1/2 h-[50vh] md:h-auto bg-can-white md:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%)] flex items-start pt-10 md:pt-16 justify-center p-8 md:pl-[12%]">
                    {/* Shifted the grid significantly upward using negative margin & translate */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-lg aspect-square transform md:-translate-y-12">
                        <img src="/can_agric.jpg" alt="Agriculture" className="w-full h-full object-cover rounded-xl shadow-soft hover:scale-105 transition-transform duration-300" />
                        <img src="/can_realestate.jpg" alt="Real Estate" className="w-full h-full object-cover rounded-xl shadow-soft hover:scale-105 transition-transform duration-300" />
                        <img src="/can_engineer.jpg" alt="Facility Management and Contracts" className="w-full h-full object-cover rounded-xl shadow-soft hover:scale-105 transition-transform duration-300" />
                        <img src="/can_leasing.jpg" alt="Leasing and Equipment" className="w-full h-full object-cover rounded-xl shadow-soft hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>
            </section>

            {/* 2. EXECUTIVE SUMMARY SECTION */}
            <section className="w-full max-w-7xl mx-auto px-8 py-24 flex flex-col lg:flex-row gap-16 relative z-10">

                {/* Left Pane: Text Content */}
                <div className="w-full lg:w-3/5 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-black text-can-dark-green uppercase tracking-tight mb-8 flex items-center gap-4">
                        <span className="block w-2 h-10 bg-can-lime-green rounded-md"></span>
                        Executive Summary
                    </h2>

                    <p className="text-base text-can-text-dark leading-relaxed mb-6 font-medium text-justify">
                        <span className="text-can-med-green font-extrabold">CAN INTEGRATED SOLUTIONS LTD</span> is a diversified Nigerian company
                        established to provide a broad spectrum of services ranging from the design and construction of various
                        structures, modern agricultural innovations, project management, and facility maintenance, to equipment
                        supplies, building materials supplies, and robust materials distribution systems.
                    </p>
                    <p className="text-base text-can-text-dark leading-relaxed mb-8 font-medium text-justify">
                        We are deeply committed to delivering value-added, total quality services to our clients through
                        innovative and customized solutions across various sectors. Renowned for excellence in project
                        management, monitoring and coordination, procurement, and comprehensive pre- and post-contract services,
                        we seamlessly connect communities and businesses with high-quality, sustainable infrastructure and
                        operational support.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                        <div className="flex-1 bg-can-bg-light border-t-4 border-can-lime-green p-6 rounded-xl shadow-soft">
                            <h4 className="text-lg font-extrabold text-can-dark-green flex items-center gap-3 mb-3">
                                <i className="fa-solid fa-eye text-can-lime-green"></i> Our Vision
                            </h4>
                            <p className="text-sm font-medium text-can-text-dark leading-relaxed">
                                To become a leading agriculture, real estate and supply/ facility management integrated solutions company in Nigeria, recognized for excellence, innovation, reliability, and sustainable practices.
                            </p>
                        </div>

                        <div className="flex-1 bg-can-bg-light border-t-4 border-can-lime-green p-6 rounded-xl shadow-soft">
                            <h4 className="text-lg font-extrabold text-can-dark-green flex items-center gap-3 mb-3">
                                <i className="fa-solid fa-bullseye text-can-lime-green"></i> Our Mission
                            </h4>
                            <p className="text-sm font-medium text-can-text-dark leading-relaxed">
                                To provide high-quality integrated services through professionalism, efficiency, and customer-focused service delivery in every sector we operate.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Pane: Easel Graphic */}
                <div className="w-full lg:w-2/5 bg-gradient-can relative rounded-3xl overflow-hidden shadow-strong flex items-center justify-center min-h-[400px]">
                    <i className="fa-solid fa-chart-pie absolute -bottom-12 -right-12 text-[300px] text-white/5 pointer-events-none"></i>

                    <div className="relative z-10 bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 text-center max-w-[80%] transform lg:translate-x-4">
                        <i className="fa-solid fa-chart-pie text-7xl text-can-lime-green drop-shadow-[0_10px_15px_rgba(0,0,0,0.2)] mb-6"></i>
                        <h3 className="text-3xl font-extrabold text-can-white uppercase m-0">Diversified Growth</h3>
                        <p className="text-white/80 text-base font-medium mt-4">
                            Strategic Expansion across<br />Key Nigerian Sectors
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES / WHY CHOOSE US */}
            <section className="w-full bg-can-white py-24">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-can-dark-green uppercase tracking-tight inline-flex items-center justify-center gap-4 border-b-4 border-can-lime-green pb-4">
                            Why Choose Us
                        </h2>
                        <p className="mt-6 text-can-text-dark font-medium max-w-2xl mx-auto">
                            Our core values form the foundation of everything we build, manage, and distribute. We believe in sustainable practices and uncompromising excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-full h-[250px] rounded-2xl overflow-hidden mb-6 shadow-soft relative">
                                <img src="/can_engineers_team.jpg" alt="Professionalism" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-can-dark-green/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <h3 className="text-xl font-extrabold text-can-dark-green mb-3">Professionalism</h3>
                            <p className="text-sm font-medium text-can-text-dark">Expert execution in project management, monitoring, and structural integrity across every unit.</p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-full h-[250px] rounded-2xl overflow-hidden mb-6 shadow-soft relative">
                                <img src="/can_architecture.jpg" alt="Innovation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-can-dark-green/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <h3 className="text-xl font-extrabold text-can-dark-green mb-3">Innovation</h3>
                            <p className="text-sm font-medium text-can-text-dark">Utilizing smart digital tools and modern sustainable practices for infrastructure and facilities.</p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center text-center group">
                            <div className="w-full h-[250px] rounded-2xl overflow-hidden mb-6 shadow-soft relative">
                                <img src="/can_modern_agric.jpg" alt="Excellence" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-can-dark-green/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <h3 className="text-xl font-extrabold text-can-dark-green mb-3">Excellence</h3>
                            <p className="text-sm font-medium text-can-text-dark">Deeply committed to delivering value-added, total quality services for long-term impact.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PRODUCTS & SERVICES SUMMARY */}
            <section className="w-full max-w-7xl mx-auto px-8 py-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-can-dark-green uppercase tracking-tight flex items-center gap-4 mb-2">
                            <span className="block w-2 h-10 bg-can-lime-green rounded-md"></span>
                            Core Services
                        </h2>
                        <p className="text-can-text-dark font-medium m-0 md:ml-6 mt-4 md:mt-0 max-w-xl">
                            From robust real estate developments to modern agricultural supply chains, we provide seamless integrated solutions.
                        </p>
                    </div>
                    <Link href="/services" className="hidden md:inline-flex items-center gap-2 text-can-lime-green font-extrabold hover:text-can-dark-green transition-colors mt-4 md:mt-0">
                        View All Services <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Service Link 1 */}
                    <Link href="/services" className="bg-can-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-strong hover:border-can-lime-green transition-all group flex flex-col items-start">
                        <span className="w-14 h-14 bg-can-bg-light text-can-lime-green rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-can-lime-green group-hover:text-can-dark-green transition-colors">
                            <i className="fa-solid fa-wheat-awn"></i>
                        </span>
                        <h3 className="text-xl font-extrabold text-can-dark-green mb-3">Agriculture & Agro-Allied</h3>
                        <p className="text-sm font-medium text-can-text-dark mb-6">Commercial farming and advanced supply chain solutions.</p>
                        <span className="mt-auto text-can-lime-green font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">Explore <i className="fa-solid fa-chevron-right text-xs"></i></span>
                    </Link>

                    {/* Service Link 2 */}
                    <Link href="/services" className="bg-can-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-strong hover:border-can-lime-green transition-all group flex flex-col items-start">
                        <span className="w-14 h-14 bg-can-bg-light text-can-lime-green rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-can-lime-green group-hover:text-can-dark-green transition-colors">
                            <i className="fa-solid fa-broom"></i>
                        </span>
                        <h3 className="text-xl font-extrabold text-can-dark-green mb-3">Cleaning Services</h3>
                        <p className="text-sm font-medium text-can-text-dark mb-6">Comprehensive commercial, industrial, and post-construction cleaning solutions.</p>
                        <span className="mt-auto text-can-lime-green font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">Explore <i className="fa-solid fa-chevron-right text-xs"></i></span>
                    </Link>

                    {/* Service Link 3 */}
                    <Link href="/services" className="bg-can-white rounded-2xl p-8 border border-gray-100 shadow-soft hover:shadow-strong hover:border-can-lime-green transition-all group flex flex-col items-start">
                        <span className="w-14 h-14 bg-can-bg-light text-can-lime-green rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-can-lime-green group-hover:text-can-dark-green transition-colors">
                            <i className="fa-solid fa-briefcase"></i>
                        </span>
                        <h3 className="text-xl font-extrabold text-can-dark-green mb-3">General Contracts & Mgmt</h3>
                        <p className="text-sm font-medium text-can-text-dark mb-6">Procurement, facility maintenance, and business support.</p>
                        <span className="mt-auto text-can-lime-green font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">Explore <i className="fa-solid fa-chevron-right text-xs"></i></span>
                    </Link>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/services" className="inline-flex items-center gap-2 bg-can-dark-green text-can-white px-6 py-3 rounded-lg font-bold">
                        View All Services <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </section>

        </div>
    );
}