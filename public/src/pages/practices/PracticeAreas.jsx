export const PracticeAreas = () =>{
    const areas = [
        {
            title: "Corporate & Business Law",
            icon: "📈",
            description: "We provide strategic legal counsel to entrepreneurs, startups, and corporations. From business formation to mergers, contracts, and compliance — we guide you every step of the way.",
        },{
            title: "Criminal Defense",
            icon: "⚖️",
            description: "Whether you’re facing misdemeanor or felony charges, we defend your rights fiercely. We have extensive experience in courtroom litigation and negotiation.",
        },{
            title: "Family Law",
            icon: "👨‍👩‍👧‍👦",
            description: "Divorce, custody, adoption, support — family law is emotional and complex. We offer compassionate yet firm representation to protect your interests and your children.",
        },{
            title: "Real Estate Law",
            icon: "🏠",
            description: "We represent buyers, sellers, and developers in real estate transactions, disputes, zoning issues, and landlord-tenant cases. Clear, secure contracts every time.",
        },{
            title: "Personal Injury",
            icon: "🚑",
            description: "Injured due to negligence? We pursue compensation for medical bills, pain, lost income, and future costs. No fees unless we win your case.",
        },{
            title: "Estate Planning & Probate",
            icon: "📜",
            description: "We help you plan for the future with wills, trusts, power of attorney, and probate services. Protect your assets and your family’s future with confidence.",
        },
    ];

    const steps = [
        {
            title: "1. Confidential Consultation",
            description: "We listen. You explain your legal issue in confidence. No commitment, no pressure.",
        },{
            title: "2. Strategic Review",
            description: "We assess your situation, review any documents, and identify your best legal options.",
        },{
            title: "3. Legal Representation",
            description: "We get to work — drafting, negotiating, advocating, or litigating on your behalf.",
        },
    ];

    const faqs = [
        {
            question: "Do you offer free consultations?",
            answer: "Yes. We offer a free initial consultation for most practice areas so you can understand your options before committing.",
        },{
            question: "What types of clients do you work with?",
            answer: "We represent individuals, families, and businesses of all sizes. Whether your issue is personal or professional, we’re here to help.",
        },{
            question: "Can you help with urgent legal matters?",
            answer: "Absolutely. We handle emergency filings, restraining orders, criminal defense, and time-sensitive business issues. Call us directly for urgent support.",
        },
    ];

    return(
        <div>
            <main className="container-fluid px-0">
                {/* ── Hero Banner ─────────────────────────────────────── */}
                <section
                    className="text-white text-center py-5 mb-5"
                    style={{
                        background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://www.lemurconservationnetwork.org/wordpress/wp-content/uploads/2024/03/Verreaux_2_9-400x300.jpg') center/cover",
                    }}
                >
                    <div className="container">
                        <h1 className="display-4 fw-bold">Our Practice Areas</h1>
                        <p className="lead text-light">
                            Comprehensive legal services tailored to your needs — delivered with integrity, strategy, and care.
                        </p>
                    </div>
                </section>

                {/* ── Practice Areas ───────────────────────────────────── */}
                <section className="container mb-5">
                    <div className="row g-4">
                        {areas.map(({ title, icon, description }, index) => (
                            <div key={index} className="col-12 col-md-6 col-lg-4">
                                <div className="p-4 border rounded h-100 shadow-sm bg-white">
                                    <div className="fs-1 mb-3 text-primary">{icon}</div>
                                    <h2 className="h5 fw-bold">{title}</h2>
                                    <p className="text-muted">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── How We Work ─────────────────────────────────────── */}
                <section className="bg-light py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4">How We Work With You</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {steps.map((step, i) => (
                            <div key={i} className="col">
                                <div className="h-100 p-4 border rounded shadow-sm bg-white">
                                    <h3 className="h5 fw-semibold">{step.title}</h3>
                                    <p className="text-muted">{step.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── FAQs ────────────────────────────────────────────── */}
                <section className="container py-5">
                    <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
                    <div className="accordion" id="faqAccordion">
                    {faqs.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${index > 0 ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${index}`}
                                    aria-expanded={index === 0}
                                    aria-controls={`collapse${index}`}
                                >{faq.question}</button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body text-muted">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────────── */}
                <section className="bg-light text-center py-5">
                    <div className="container">
                        <h2 className="fw-bold mb-3">Need Legal Help?</h2>
                        <p className="mb-4">
                            Our attorneys are here to assist you with reliable, strategic, and compassionate legal advice.
                        </p>
                        <button onClick={()=>navigate(routes.scheduleConsultation())} className="btn btn-outline-primary btn-lg px-4">
                            Request a Consultation
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}