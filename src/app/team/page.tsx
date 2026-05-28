export default function TeamPage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-8 py-16 flex flex-col bg-can-bg-light">

            {/* Management Team Header */}
            <h2 className="text-3xl md:text-4xl font-black text-can-dark-green uppercase tracking-tight mb-10 flex items-center gap-4">
                <span className="block w-2 h-10 bg-can-lime-green rounded-md"></span>
                Company Team
            </h2>

            {/* Grid 3 - Management */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">

                {/* Team Member 1 */}
                <div className="bg-can-white rounded-2xl shadow-soft flex flex-col relative overflow-hidden h-full">
                    {/* Background Gradient Header */}
                    <div className="h-[100px] bg-gradient-can absolute top-0 left-0 w-full z-0"></div>

                    {/* Profile Image */}
                    <div className="relative z-10 pt-[20px] flex justify-center">
                        <img
                            src="/can_ceo1.jpg"
                            alt="Chijindu Alvin Nwokedi"
                            className="w-[160px] h-[160px] object-cover rounded-full border-[6px] border-can-white shadow-soft bg-can-white"
                        />
                    </div>

                    {/* Name & Title */}
                    <div className="relative z-10 px-6 pt-5 pb-5 border-b border-gray-100 text-center bg-can-white">
                        <h3 className="m-0 text-xl text-can-dark-green font-black leading-tight">Chijindu Alvin Nwokedi</h3>
                        <p className="mt-2 mb-0 text-xs text-can-lime-green font-extrabold uppercase tracking-wide">Chief Executive Officer</p>
                    </div>

                    {/* Bio */}
                    <div className="relative z-10 p-8 text-can-text-dark text-sm leading-relaxed flex-grow bg-can-white flex flex-col">
                        <p className="m-0 mb-5 font-bold text-can-dark-green text-[15px] text-center">Dynamic leader driving innovation, operations, and growth.</p>
                        <ul className="m-0 p-0 list-none flex flex-col gap-4">
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> <strong>15+ years experience</strong> in public & corporate ops.</li>
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> Expert in org development & data-driven strategy.</li>
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> Optimizes workforce for long-term performance.</li>
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> Certified in <strong>HR, Data Analysis & PM</strong>.</li>
                        </ul>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div className="bg-can-white rounded-2xl shadow-soft flex flex-col relative overflow-hidden h-full">
                    <div className="h-[100px] bg-gradient-can absolute top-0 left-0 w-full z-0"></div>

                    <div className="relative z-10 pt-[20px] flex justify-center">
                        <img
                            src="/can_ceo.jpg"
                            alt="Ifunanya Nwokedi, Ph.D."
                            className="w-[160px] h-[160px] object-cover rounded-full border-[6px] border-can-white shadow-soft bg-can-white"
                        />
                    </div>

                    <div className="relative z-10 px-6 pt-5 pb-5 border-b border-gray-100 text-center bg-can-white">
                        <h3 className="m-0 text-xl text-can-dark-green font-black leading-tight">Ifunanya Nwokedi, Ph.D.</h3>
                        <p className="mt-2 mb-0 text-xs text-can-lime-green font-extrabold uppercase tracking-wide">Executive Director</p>
                    </div>

                    <div className="relative z-10 p-8 text-can-text-dark text-sm leading-relaxed flex-grow bg-can-white flex flex-col">
                        <p className="m-0 mb-5 font-bold text-can-dark-green text-[15px] text-center">Visionary leader driving cross-sector growth & development.</p>
                        <ul className="m-0 p-0 list-none flex flex-col gap-4">
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> <strong>10+ years intl. experience</strong> in strategic relations.</li>
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> Ex-Head of External Relations at <strong>U.N. WFP (Liberia)</strong>.</li>
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> Mobilized over $29M in global institutional funding.</li>
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> Ph.D. in International Relations (Howard University).</li>
                        </ul>
                    </div>
                </div>

                {/* Team Member 3 */}
                <div className="bg-can-white rounded-2xl shadow-soft flex flex-col relative overflow-hidden h-full">
                    <div className="h-[100px] bg-gradient-can absolute top-0 left-0 w-full z-0"></div>

                    <div className="relative z-10 pt-[20px] flex justify-center">
                        <img
                            src="/can_director.jpg"
                            alt="Chisobem Nwokedi"
                            className="w-[160px] h-[160px] object-cover rounded-full border-[6px] border-can-white shadow-soft bg-can-white"
                        />
                    </div>

                    <div className="relative z-10 px-6 pt-5 pb-5 border-b border-gray-100 text-center bg-can-white">
                        <h3 className="m-0 text-xl text-can-dark-green font-black leading-tight">Chisobem Nwokedi</h3>
                        <p className="mt-2 mb-0 text-xs text-can-lime-green font-extrabold uppercase tracking-wide">Executive Director</p>
                    </div>

                    <div className="relative z-10 p-8 text-can-text-dark text-sm leading-relaxed flex-grow bg-can-white flex flex-col">
                        <p className="m-0 mb-5 font-bold text-can-dark-green text-[15px] text-center">Experienced sustainability manager & operations expert.</p>
                        <ul className="m-0 p-0 list-none flex flex-col gap-4">
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> <strong>B.Eng in Civil Engineering</strong>; PMP & Scrum certified.</li>
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> Spearheaded major civil & property renovation projects.</li>
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> Expert in operations, process consulting & scaling.</li>
                            <li className="relative pl-[24px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[4px] text-can-lime-green"></i> Drives structural integrity across all units.</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Grid 2x2 - Key Professionals Header */}
            <h2 className="text-3xl md:text-4xl font-black text-can-dark-green uppercase tracking-tight mb-10 flex items-center gap-4">
                <span className="block w-2 h-10 bg-can-lime-green rounded-md"></span>
                Key Professionals
            </h2>

            {/* Grid 2x2 - Key Professionals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

                {/* Team Member 4 */}
                <div className="bg-can-white rounded-2xl shadow-soft flex flex-col relative overflow-hidden h-full">
                    <div className="h-[90px] bg-gradient-can absolute top-0 left-0 w-full z-0"></div>

                    <div className="relative z-10 pt-[20px] flex justify-center">
                        <img
                            src="/can_chief_engineer.jpg"
                            alt="Anthony Mgbanwune"
                            className="w-[140px] h-[140px] object-cover rounded-full border-[5px] border-can-white shadow-soft bg-can-white"
                        />
                    </div>

                    <div className="relative z-10 px-6 pt-4 pb-5 border-b border-gray-100 text-center bg-can-white">
                        <h3 className="m-0 text-xl text-can-dark-green font-black leading-tight">Anthony Mgbanwune</h3>
                        <p className="mt-2 mb-0 text-xs text-can-lime-green font-extrabold uppercase tracking-wide">Chief Engineer</p>
                    </div>

                    <div className="relative z-10 p-8 text-can-text-dark text-[15px] leading-relaxed flex-grow bg-can-white">
                        <ul className="m-0 p-0 list-none flex flex-col gap-4">
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Expertise in <strong>geotechnical, structural, and highway engineering</strong>.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Supervises major estate and academic construction projects.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Ensures strict compliance with global environmental and safety standards.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Holds an <strong>M.Sc. in Structural Engineering</strong> (UNN).</li>
                        </ul>
                    </div>
                </div>

                {/* Team Member 5 */}
                <div className="bg-can-white rounded-2xl shadow-soft flex flex-col relative overflow-hidden h-full">
                    <div className="h-[90px] bg-gradient-can absolute top-0 left-0 w-full z-0"></div>

                    <div className="relative z-10 pt-[20px] flex justify-center">
                        <img
                            src="/can_finance_officer.jpg"
                            alt="Precious Emordi"
                            className="w-[140px] h-[140px] object-cover rounded-full border-[5px] border-can-white shadow-soft bg-can-white"
                        />
                    </div>

                    <div className="relative z-10 px-6 pt-4 pb-5 border-b border-gray-100 text-center bg-can-white">
                        <h3 className="m-0 text-xl text-can-dark-green font-black leading-tight">Precious Emordi</h3>
                        <p className="mt-2 mb-0 text-xs text-can-lime-green font-extrabold uppercase tracking-wide">Finance Officer</p>
                    </div>

                    <div className="relative z-10 p-8 text-can-text-dark text-[15px] leading-relaxed flex-grow bg-can-white">
                        <ul className="m-0 p-0 list-none flex flex-col gap-4">
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Deep expertise in <strong>financial reporting and corporate budgeting</strong>.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Ensures transparency and efficiency across all sectors.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Drives resource management for sustainable corporate growth.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Maintains the highest standards of financial governance.</li>
                        </ul>
                    </div>
                </div>

                {/* Team Member 6 */}
                <div className="bg-can-white rounded-2xl shadow-soft flex flex-col relative overflow-hidden h-full">
                    <div className="h-[90px] bg-gradient-can absolute top-0 left-0 w-full z-0"></div>

                    <div className="relative z-10 pt-[20px] flex justify-center">
                        <img
                            src="/can_secretary.jpg"
                            alt="Emmanuel Ezima"
                            className="w-[140px] h-[140px] object-cover rounded-full border-[5px] border-can-white shadow-soft bg-can-white"
                        />
                    </div>

                    <div className="relative z-10 px-6 pt-4 pb-5 border-b border-gray-100 text-center bg-can-white">
                        <h3 className="m-0 text-xl text-can-dark-green font-black leading-tight">Emmanuel Ezima</h3>
                        <p className="mt-2 mb-0 text-xs text-can-lime-green font-extrabold uppercase tracking-wide">Company Secretary</p>
                    </div>

                    <div className="relative z-10 p-8 text-can-text-dark text-[15px] leading-relaxed flex-grow bg-can-white">
                        <ul className="m-0 p-0 list-none flex flex-col gap-4">
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Holds a <strong>B.Sc. in EE Engineering</strong>; certified by NSE and COREN.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Extensive experience in <strong>MEP installations and facility maintenance</strong>.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Proven track record of managing large projects with strict QA.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Leads administrative compliance and technical coordination.</li>
                        </ul>
                    </div>
                </div>

                {/* Team Member 7 */}
                <div className="bg-can-white rounded-2xl shadow-soft flex flex-col relative overflow-hidden h-full">
                    <div className="h-[90px] bg-gradient-can absolute top-0 left-0 w-full z-0"></div>

                    <div className="relative z-10 pt-[20px] flex justify-center">
                        <img
                            src="/can_it.jpg"
                            alt="Matthew Tedunjaiye"
                            className="w-[140px] h-[140px] object-cover rounded-full border-[5px] border-can-white shadow-soft bg-can-white"
                        />
                    </div>

                    <div className="relative z-10 px-6 pt-4 pb-5 border-b border-gray-100 text-center bg-can-white">
                        <h3 className="m-0 text-xl text-can-dark-green font-black leading-tight">Matthew Tedunjaiye</h3>
                        <p className="mt-2 mb-0 text-xs text-can-lime-green font-extrabold uppercase tracking-wide">Head of IT Operations</p>
                    </div>

                    <div className="relative z-10 p-8 text-can-text-dark text-[15px] leading-relaxed flex-grow bg-can-white">
                        <ul className="m-0 p-0 list-none flex flex-col gap-4">
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Manages company IT systems for <strong>seamless business operations</strong>.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Streamlines internal workflows using <strong>smart digital tools</strong>.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Ensures strong <strong>data security and system reliability</strong>.</li>
                            <li className="relative pl-[26px] font-medium"><i className="fa-solid fa-circle-check absolute left-0 top-[5px] text-can-lime-green text-sm"></i> Holds a B.Tech. in Computer Science with cybersecurity training.</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
}