export default function ServicesPage() {
    const services = [
        {
            id: 1,
            title: "Agriculture & Agro-Allied",
            desc: "Driving food security through modern farming and agro-processing solutions.",
            image: "/can_agric.jpg",
            icon: "fa-wheat-awn",
            list: [
                "Commercial farming",
                "Agro-processing",
                "Supply chain solutions",
                "Crop production systems",
            ],
        },
        {
            id: 2,
            title: "Real Estate Development",
            desc: "Developing premium residential and commercial spaces for modern living.",
            image: "/can_realestate.jpg",
            icon: "fa-city",
            list: [
                "Property development",
                "Land acquisition",
                "Residential projects",
                "Commercial projects",
            ],
        },
        {
            id: 3,
            title: "Property & Facility Mgmt",
            desc: "Maximizing asset value through efficient maintenance and operations.",
            image: "/can_engineer.jpg",
            icon: "fa-helmet-safety",
            list: [
                "Facility maintenance",
                "Property administration",
                "Asset management",
                "Security & landscaping",
            ],
        },
        {
            id: 4,
            title: "Leasing Services",
            desc: "Flexible leasing solutions for equipment, properties, and business fleets.",
            image: "/can_leasing.jpg",
            icon: "fa-truck-moving",
            list: [
                "Equipment leasing",
                "Property leasing",
                "Business leasing support",
                "Transport & fleet services",
            ],
        },
        {
            id: 5,
            title: "General Contracts",
            desc: "Executing projects and logistics with precision, quality, and compliance.",
            image: "/can_contracts.jpg",
            icon: "fa-briefcase",
            list: [
                "Procurement services",
                "Project execution",
                "Business support solutions",
                "Supply chain logistics",
            ],
        },
        {
            id: 6,
            title: "Cleaning Services",
            desc: "Comprehensive home cleaning, commercial, industrial, and post-construction cleaning solutions.",
            image: "/can_cleaning.jpg",
            icon: "fa-broom",
            list: [
                "Home cleaning",
                "Post-construction cleaning",
                "Commercial & office cleaning",
                "Industrial waste management",
                "Janitorial & deep cleaning",
            ],
        },
    ];

    return (
        <div className="w-full bg-can-bg-light py-16 px-8 flex-grow">
            <div className="max-w-7xl mx-auto flex flex-col">

                {/* Header Section */}
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-can-dark-green uppercase tracking-tight flex items-center gap-4 mb-2">
                            <span className="block w-2 h-10 bg-can-lime-green rounded-md"></span>
                            Business Areas & Services
                        </h2>
                        <p className="text-can-text-dark font-medium text-[15px] m-0 ml-6">
                            Core Operational Pillars
                        </p>
                    </div>

                    {/* Decorative Brand Bars */}
                    <div className="hidden md:flex gap-1.5 items-end h-10 scale-80 mb-1">
                        <div className="w-2.5 h-[60%] rounded-full bg-can-lime-green"></div>
                        <div className="w-2.5 h-full -mb-1 rounded-full bg-can-med-green"></div>
                        <div className="w-2.5 h-[45%] rounded-full bg-can-lime-green"></div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col bg-can-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-strong hover:border-can-lime-green group"
                        >
                            {/* Image Header with Overlay & Floating Icon */}
                            <div className="h-[200px] relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-overlay pointer-events-none"></div>

                                {/* Floating Icon */}
                                <div className="absolute -bottom-6 left-6 w-14 h-14 bg-can-lime-green text-can-dark-green rounded-xl flex items-center justify-center text-2xl shadow-strong z-10">
                                    <i className={`fa-solid ${service.icon}`}></i>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="flex-grow flex flex-col px-6 pt-10 pb-6 bg-can-white">
                                <h4 className="text-can-dark-green text-lg font-extrabold m-0 mb-3">
                                    {service.title}
                                </h4>
                                <p className="text-[13px] text-can-text-dark leading-relaxed font-medium m-0 mb-4 pb-4 border-b border-dashed border-gray-300">
                                    {service.desc}
                                </p>

                                <ul className="flex flex-col gap-2 list-none p-0 m-0 mt-auto">
                                    {service.list.map((item, index) => (
                                        <li key={index} className="text-[13px] text-can-text-dark font-semibold relative pl-5 leading-tight">
                                            <i className="fa-solid fa-check absolute left-0 top-[1px] text-[11px] text-can-lime-green"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}