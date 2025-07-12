export const Services = () =>{
    const services = [
        {
            title: "Corporate & Commercial Law",
            icon: "🏢",
            description: "We assist startups, SMEs, and corporations with legal strategies that protect and empower their businesses.",
            features: [
                "Business formation & structuring",
                "Contract drafting & review",
                "Mergers & acquisitions",
                "Regulatory compliance",
                "Shareholder disputes",
            ],
        },{
            title: "Family Law",
            icon: "👨‍👩‍👧‍👦",
            description: "Sensitive guidance and firm representation for families navigating legal transitions.",
            features: [
                "Divorce & legal separation",
                "Child custody & visitation",
                "Spousal & child support",
                "Prenuptial agreements",
                "Adoption proceedings",
            ],
        },{
            title: "Criminal Defense",
            icon: "🛡️",
            description: "Protecting your rights in high-stakes situations with aggressive, experienced defense.",
            features: [
                "Felony & misdemeanor charges",
                "Drug offenses & DUIs",
                "Juvenile cases",
                "White collar crime",
                "Bail & bond hearings",
            ],
        },{
            title: "Real Estate Law",
            icon: "🏠",
            description: "Reliable legal support for individuals, agents, and developers navigating property law.",
            features: [
                "Residential & commercial closings",
                "Title reviews & insurance",
                "Landlord-tenant disputes",
                "Zoning & land use",
                "Real estate litigation",
            ],
        },{
            title: "Estate Planning & Probate",
            icon: "📜",
            description: "Secure your legacy and provide peace of mind with thoughtful estate planning.",
            features: [
                "Wills & trusts",
                "Power of attorney",
                "Healthcare directives",
                "Probate administration",
                "Asset protection",
            ],
        },{
            title: "Personal Injury Law",
            icon: "🚑",
            description: "We fight for injured clients to recover what they deserve — with no fee unless we win.",
            features: [
                "Car & motorcycle accidents",
                "Slip and fall cases",
                "Medical malpractice",
                "Wrongful death",
                "Insurance negotiations",
            ],
        },
    ];

    const benefits = [
        "Decades of combined legal experience",
        "Client-centered strategy for every case",
        "Clear communication, no legal jargon",
        "Strong negotiation and courtroom presence",
        "Proven results across multiple legal fields",
    ];

    return(
        <div>
            <main className="container-fluid px-0">
                {/* ── Hero ───────────────────────────────────────────── */}
                <section
                    className="text-white text-center py-5 mb-5"
                    style={{
                        background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mH64LlFirzoC0cuU94Uuuqc-dScka8VoOg&s') center/cover",
                    }}
                >
                    <div className="container">
                        <h1 className="display-4 fw-bold">Legal Services</h1>
                        <p className="lead text-light">
                            Full-service legal representation tailored to your needs, your goals, and your rights.
                        </p>
                    </div>
                </section>

                {/* ── Services List ─────────────────────────────────── */}
                <section className="container mb-5">
                    <div className="row g-4">
                        {services.map(({ title, icon, description, features }, i) => (
                            <div className="col-12 col-md-6" key={i}>
                                <div className="p-4 border rounded shadow-sm h-100 bg-white">
                                    <div className="fs-1 text-primary mb-3">{icon}</div>
                                    <h2 className="h5 fw-bold mb-2">{title}</h2>
                                    <p className="text-muted">{description}</p>
                                    <ul className="list-unstyled text-muted small mb-0">
                                        {features.map((item, j) => (
                                            <li key={j} className="mb-1">✅ {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Why Choose Us ─────────────────────────────────── */}
                <section className="bg-light py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4">Why Clients Choose Us</h2>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {benefits.map((point, i) => (
                                <div className="col" key={i}>
                                    <div className="p-4 border rounded h-100 shadow-sm bg-white">
                                        <p className="mb-0 text-muted">{point}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────────── */}
                <section className="bg-light text-center py-5">
                    <div className="container">
                        <h2 className="fw-bold mb-3">Let’s Talk About Your Case</h2>
                        <p className="mb-4">
                            We’re here to answer your questions and offer a strategy that works. The first consultation is free.
                        </p>
                        <button onClick={()=>navigate(routes.scheduleConsultation())} className="btn btn-outline-primary rounded-pill btn-lg px-4">
                            Request a Consultation
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}