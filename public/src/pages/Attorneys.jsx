import { routes } from "../routes/Routes";

export const Attorneys = () =>{
    const attorneys = [
        {
            id: 1,
            name: "Sarah Johnson, Esq.",
            title: "Senior Partner - Corporate Law",
            bio: "With over 15 years of experience, Sarah specializes in corporate mergers and acquisitions, guiding clients through complex business transactions.",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
        },{
            id: 2,
            name: "Michael Lee, Esq.",
            title: "Criminal Defense Attorney",
            bio: "Michael is a dedicated criminal defense lawyer known for his aggressive advocacy and commitment to protecting client rights.",
            photo: "https://randomuser.me/api/portraits/men/75.jpg",
        },{
            id: 3,
            name: "Emily Davis, Esq.",
            title: "Family Law Specialist",
            bio: "Emily provides compassionate and expert counsel on divorce, custody, and adoption matters to help families through difficult times.",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
        },{
            id: 4,
            name: "James Carter, Esq.",
            title: "Real Estate Attorney",
            bio: "James offers extensive knowledge in property law, assisting clients with transactions, zoning, and dispute resolution.",
            photo: "https://randomuser.me/api/portraits/men/46.jpg",
        },
    ];

    const testimonials = [
        {
            name: "Angela P.",
            quote: "The team was professional, responsive, and truly cared about my case. I wouldn’t trust anyone else.",
        },{
            name: "David M.",
            quote: "They helped me through a very difficult time and delivered real results. Absolutely recommended.",
        },{
            name: "Lisa W.",
            quote: "From the first consultation to the final verdict, they stood by me. True professionals.",
        },
    ];

    return(
        <div>
            <main className="container-fluid px-0">
                {/* ── Hero Section ───────────────────────────────────────── */}
                <section
                    className="text-white text-center py-5 mb-5"
                    style={{
                        background: "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1650&q=80') center/cover",
                    }}
                >
                    <div className="container">
                        <h1 className="display-4 fw-bold">Our Attorneys</h1>
                        <p className="lead text-light">
                            Experienced. Respected. Committed to your success.
                        </p>
                    </div>
                </section>

                {/* ── Introduction ─────────────────────────────────────── */}
                <section className="container mb-5">
                    <div className="text-center mb-4">
                        <h2 className="fw-bold">Meet the Legal Minds Behind Our Success</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
                            At our firm, we believe in strong leadership, deep expertise, and unwavering client advocacy.
                            Each attorney brings unique skills, a strong track record, and a passion for justice.
                        </p>
                        <hr className="mt-4 mb-0" style={{ width: "60px", margin: "auto", borderTop: "2px solid #0d6efd" }} />
                    </div>
                </section>

                {/* ── Attorney Cards ───────────────────────────────────── */}
                <section className="container mb-5">
                    <div className="row g-4">
                    {attorneys.map(({ id, name, title, bio, photo }) => (
                        <article
                            key={id}
                            className="col-12 col-md-6 col-lg-3"
                            aria-label={`Attorney profile: ${name}`}
                        >
                            <div className="card h-100 shadow-sm border-0">
                                <img
                                    src={photo}
                                    alt={`Photo of ${name}`}
                                    className="card-img-top rounded-top"
                                    style={{ objectFit: "cover", height: "280px" }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title h5">{name}</h3>
                                    <h4 className="card-subtitle mb-2 text-muted">{title}</h4>
                                    <p className="card-text text-muted small">{bio}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                    </div>
                </section>

                {/* ── Testimonials Section ─────────────────────────────── */}
                <section className="bg-light py-5">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-4">What Clients Say</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {testimonials.map(({ name, quote }, i) => (
                                <div key={i} className="col">
                                    <div className="border rounded p-4 h-100 shadow-sm bg-white">
                                    <p className="fst-italic text-muted">"{quote}"</p>
                                    <p className="fw-semibold mb-0 mt-3 text-primary">{name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA Section ──────────────────────────────────────── */}
                <section className="container text-center py-5">
                    <h2 className="fw-bold mb-3">Need Trusted Legal Guidance?</h2>
                    <p className="text-muted mb-4">
                        Our attorneys are here to listen, support, and represent your case with integrity.
                        Book a confidential consultation today.
                    </p>
                    <button onClick={()=>navigate(routes.scheduleConsultation())} className="btn btn-outline-primary btn-lg rounded-pill px-4">
                        Schedule a Consultation
                    </button>
                </section>
            </main>
        </div>
    )
}