export default function AboutPage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-8 py-16 flex flex-col">

            {/* Vision & Mission Section */}
            <h2 className="text-3xl md:text-4xl font-black text-can-dark-green uppercase tracking-tight mb-8 flex items-center gap-4">
                <span className="block w-2 h-10 bg-can-lime-green rounded-md"></span>
                Vision & Mission
            </h2>

            <div className="flex flex-col md:flex-row gap-6 mb-16">
                <div className="flex-1 bg-can-white border-t-4 border-can-lime-green p-8 rounded-xl shadow-soft">
                    <h4 className="text-xl font-extrabold text-can-dark-green flex items-center gap-3 mb-4">
                        <i className="fa-solid fa-eye text-can-lime-green text-2xl"></i> Our Vision
                    </h4>
                    <p className="text-[15px] font-medium text-can-text-dark leading-relaxed m-0">
                        To become a leading agriculture, real estate and supply/ facility management integrated solutions company in Nigeria, recognized for excellence, innovation, reliability, and sustainable practices.
                    </p>
                </div>

                <div className="flex-1 bg-can-white border-t-4 border-can-lime-green p-8 rounded-xl shadow-soft">
                    <h4 className="text-xl font-extrabold text-can-dark-green flex items-center gap-3 mb-4">
                        <i className="fa-solid fa-bullseye text-can-lime-green text-2xl"></i> Our Mission
                    </h4>
                    <p className="text-[15px] font-medium text-can-text-dark leading-relaxed m-0">
                        To provide high-quality integrated services through professionalism, efficiency, and customer-focused service delivery in every sector we operate.
                    </p>
                </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-can-dark-green uppercase tracking-tight mb-8 flex items-center gap-4">
                <span className="block w-2 h-10 bg-can-lime-green rounded-md"></span>
                Corporate Structure
            </h2>

            {/* Corporate Commitment Box */}
            <div className="bg-can-dark-green text-can-white p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 shadow-strong relative overflow-hidden mb-10">
                <i className="fa-solid fa-handshake-angle absolute -bottom-10 -right-5 text-[150px] text-white/5 -rotate-12 pointer-events-none z-0"></i>

                <div className="relative z-10 bg-white/10 p-5 rounded-full flex-shrink-0">
                    <i className="fa-solid fa-handshake-angle text-4xl text-can-lime-green"></i>
                </div>

                <div className="relative z-10">
                    <h4 className="text-can-lime-green text-xl font-extrabold uppercase mb-2">Corporate Commitment</h4>
                    <p className="text-sm leading-relaxed font-medium m-0">
                        CAN INTEGRATED SOLUTIONS LTD is committed to delivering innovative and sustainable solutions while
                        building long-term client relationships through professionalism, quality service delivery, and
                        operational excellence.
                    </p>
                </div>
            </div>

            {/* Structure Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-[400px]">

                {/* Leadership & Administration Card */}
                <div className="bg-can-white p-8 rounded-2xl shadow-soft border border-gray-100 relative h-full overflow-y-auto">
                    <h3 className="text-can-dark-green text-xl font-extrabold flex items-center gap-3 pb-4 border-b-2 border-can-bg-light mb-6">
                        <span className="bg-can-bg-light p-3 rounded-xl text-can-lime-green flex items-center justify-center">
                            <i className="fa-solid fa-users-gear text-base"></i>
                        </span>
                        Leadership & Administration
                    </h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0 m-0">
                        <li className="bg-can-bg-light p-3 rounded-xl border-l-4 border-can-med-green">
                            <span className="block text-[11px] text-can-med-green font-extrabold uppercase mb-1">Chief Executive Officer</span>
                            <span className="block text-sm text-can-text-dark font-bold">Chijindu Alvin Nwokedi</span>
                        </li>
                        <li className="bg-can-bg-light p-3 rounded-xl border-l-4 border-can-med-green">
                            <span className="block text-[11px] text-can-med-green font-extrabold uppercase mb-1">Executive Director</span>
                            <span className="block text-sm text-can-text-dark font-bold">Ifunanya Cynthia Nwokedi</span>
                        </li>
                        <li className="bg-can-bg-light p-3 rounded-xl border-l-4 border-can-med-green">
                            <span className="block text-[11px] text-can-med-green font-extrabold uppercase mb-1">Executive Director</span>
                            <span className="block text-sm text-can-text-dark font-bold">Chisobem Carmela Nwokedi</span>
                        </li>
                        <li className="bg-can-bg-light p-3 rounded-xl border-l-4 border-can-med-green">
                            <span className="block text-[11px] text-can-med-green font-extrabold uppercase mb-1">Chief Engineer</span>
                            <span className="block text-sm text-can-text-dark font-bold">Anthony Mgbanwune</span>
                        </li>
                        <li className="bg-can-bg-light p-3 rounded-xl border-l-4 border-can-med-green">
                            <span className="block text-[11px] text-can-med-green font-extrabold uppercase mb-1">Company Secretary</span>
                            <span className="block text-sm text-can-text-dark font-bold">Emmanuel Ezima</span>
                        </li>
                        <li className="bg-can-bg-light p-3 rounded-xl border-l-4 border-can-med-green">
                            <span className="block text-[11px] text-can-med-green font-extrabold uppercase mb-1">Finance Officer</span>
                            <span className="block text-sm text-can-text-dark font-bold">Precious Emordi</span>
                        </li>
                        <li className="bg-can-bg-light p-3 rounded-xl border-l-4 border-can-med-green md:col-span-2">
                            <span className="block text-[11px] text-can-med-green font-extrabold uppercase mb-1">Head of IT Operations</span>
                            <span className="block text-sm text-can-text-dark font-bold">Matthew Tedunjaiye</span>
                        </li>
                    </ul>
                </div>

                {/* Operational Excellence Card */}
                <div className="rounded-2xl shadow-strong overflow-hidden flex flex-col border-none relative h-[300px] lg:h-full">
                    <div className="flex-1 relative">
                        <img src="/can_realestate.jpg" alt="Real Estate" className="w-full h-full object-cover absolute top-0 left-0" />
                    </div>
                    <div className="flex-1 relative">
                        <img src="/can_agric.jpg" alt="Agriculture" className="w-full h-full object-cover absolute top-0 left-0" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,76,27,0.92)] to-[rgba(40,108,11,0.75)] flex flex-col items-center justify-center p-10 text-center">
                        <i className="fa-solid fa-building-circle-check text-[55px] text-can-lime-green mb-4"></i>
                        <h3 className="text-can-white m-0 mb-3 text-3xl font-bold block text-center border-none pb-0">
                            Operational Excellence
                        </h3>
                        <p className="text-can-white m-0 text-sm leading-relaxed font-medium">
                            Building sustainable, innovative, and highly efficient infrastructure for communities and businesses across Nigeria.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}