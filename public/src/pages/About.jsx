export const About = () =>{
    const values = [
        {
            title: "Integrity",
            description: "We uphold the highest ethical standards and always act in our clients' best interests.",
        },{
            title: "Expertise",
            description: "Our attorneys are specialists with decades of experience in their respective fields.",
        },{
            title: "Commitment",
            description: "We fight relentlessly for every client — from first contact to final resolution.",
        },{
            title: "Transparency",
            description: "No hidden fees. No surprises. We keep you informed every step of the way.",
        },
    ];

    const highlights = [
        "20+ years serving individuals and businesses",
        "Multi-disciplinary legal team with courtroom and negotiation experience",
        "Hundreds of successful cases and settlements",
        "Trusted by local businesses, families, and professionals",
    ];

    return(
        <div>
            <main className="container-fluid px-0">
                {/* ── Hero Banner ───────────────────────────────────── */}
                <section
                    className="text-white text-center py-5 mb-5"
                    style={{
                        background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://media.nature.com/w400/magazine-assets/d41586-023-00793-9/d41586-023-00793-9_24660970.jpg') center/cover",
                    }}
                >
                    <div className="container">
                        <h1 className="display-4 fw-bold">About Our Firm</h1>
                        <p className="lead text-light">
                            A legacy of legal excellence — built on trust, strategy, and results.
                        </p>
                    </div>
                </section>

                {/* ── History & Mission ────────────────────────────── */}
                <section className="container mb-5">
                    <div className="row align-items-center g-5">
                        <div className="col-md-6">
                            <img
                                src="https://hssib-ovd42x6f-media.s3.amazonaws.com/production-assets/images/Collage_of_enlarged_eyes_seen_thro.afd104d6.fill-400x300.jpg"
                                alt="Our law firm office"
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="fw-bold mb-3">Who We Are</h2>
                            <p className="text-muted">
                            Founded over two decades ago, our firm has grown from a solo practice to a multi-attorney team serving a diverse range of legal needs. We pride ourselves on being both accessible and exceptional — combining small-firm attention with large-firm capabilities.
                            </p>
                            <p className="text-muted">
                            We don’t just handle cases — we build relationships. Our clients come to us for clarity, confidence, and committed legal advocacy when it matters most.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Core Values ─────────────────────────────────── */}
                <section className="bg-light py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4">Our Core Values</h2>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {values.map((val, i) => (
                                <div key={i} className="col">
                                    <div className="p-4 border rounded h-100 shadow-sm bg-white">
                                        <h3 className="h6 fw-bold">{val.title}</h3>
                                        <p className="text-muted small mb-0">{val.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Team Highlight / What Sets Us Apart ─────────── */}
                <section className="container py-5">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6">
                            <h2 className="fw-bold mb-3">What Sets Us Apart</h2>
                            <ul className="list-unstyled text-muted">
                                {highlights.map((item, i) => (
                                    <li key={i} className="mb-2">✅ {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                                alt="Attorneys in discussion"
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                    </div>
                </section>

                {/* ── Optional: Recognition / Trust Signals ────────── */}
                <section className="bg-white py-5 border-top">
                    <div className="container text-center">
                        <h3 className="fw-bold mb-4">Trusted By</h3>
                        <div className="row row-cols-2 row-cols-md-4 g-4 text-muted">
                            <div className="col">🏅 Bar Association Member</div>
                            <div className="col">💼 Business Chamber Partner</div>
                            <div className="col">📊 Rated 5 Stars on LegalRank</div>
                            <div className="col">⚖️ 100+ Courtroom Wins</div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ─────────────────────────────────────────── */}
                <section className="bg-light text-center py-5">
                    <div className="container">
                        <h2 className="fw-bold mb-3">We’re Ready to Represent You</h2>
                        <p className="mb-4">
                            Contact our team today for a confidential consultation — and take the first step toward a resolution.
                        </p>
                        <button onClick={()=>navigate(routes.scheduleConsultation())} className="btn btn-outline-primary btn-lg rounded-pill px-4">
                            Book a Consultation
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}