import { useNavigate } from "react-router-dom"
import { routes } from "../routes/Routes"

export const Home = () =>{
    const navigate = useNavigate();

    const practices = [
        { 
            title: "Family Law",
            desc: "Divorce, custody, and support cases.",
            path: routes.familyLaw()
        },{ 
            title: "Business Law",
            desc: "Contracts, compliance, and disputes.",
            path: routes.businessLaw()
        },{ 
            title: "Real Estate Law",
            desc: "Transactions, leases, and disputes.",
            path: routes.realEstateLaw()
        },{ 
            title: "Estate Planning",
            desc: "Wills, trusts, and legacy protection.",
            path: routes.estatePlanning()
        },{ 
            title: "Criminal Defense",
            desc: "Strong defense and fair representation.",
            path: routes.criminalDefense()
        },{ 
            title: "Employment Law",
            desc: "Workplace rights and employer guidance.",
            path: routes.employmentLaw()
        },
    ];

    return(
        <div className="container py-4">
            {/* Hero Section */}
            <section className="text-center py-5">
                <div className="container">
                    <h1 className="display-5 fw-bold">Focused. Strategic. On Your Side.</h1>
                    <p className="lead">Trusted legal counsel committed to results and integrity.</p>
                    <button onClick={()=>navigate(routes.scheduleConsultation())} className="btn btn-outline-primary mt-3">Request a Consultation</button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h2 className="fw-bold">A Law Firm Built on Experience and Integrity</h2>
                            <p>We deliver results-driven legal services across a broad range of practice areas. Our mission is to serve clients with precision, professionalism, and personal attention every step of the way.</p>
                            <button onClick={()=>navigate(routes.services())} className="btn btn-outline-primary mt-2">Explore Our Services</button>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://www.naturepl.com/blog/wp-content/uploads/2024/05/1645329-400x300.jpg" alt="Legal Team" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Practice Areas */}
            <section id="services" className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4">Practice Areas</h2>
                    <div className="row g-4">
                        {practices.map((area) => (
                            <div className="col-md-4" key={area.title}>
                                <div onClick={()=>navigate(area.path)} className="card h-100 border">
                                    <div className="card-body">
                                        <h5 className="card-title">{area.title}</h5>
                                        <p className="card-text">{area.desc}</p>
                                        <button className="btn btn-sm btn-outline-primary">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Attorneys Section */}
            <section id="attorneys" className="py-5 bg-light">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4">Meet Our Attorneys</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card border">
                                <img src="https://www.bas.ac.uk/wp-content/uploads/2015/03/10010588-edited-400x300.jpg" className="card-img-top" alt="Attorney" />
                                <div className="card-body">
                                    <h5 className="card-title">Sherrine Francis</h5>
                                    <p className="card-text">Founding Attorney with over 20 years of litigation experience in civil and criminal matters.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="fw-bold mb-4">What Our Clients Say</h2>
                    <blockquote className="blockquote">
                        <p className="mb-0">“Professional, responsive, and deeply committed. The team supported me through every step of my case.”</p>
                        <div className="blockquote-footer mt-2">A. Thomas</div>
                    </blockquote>
                </div>
            </section>

            {/* Consultation CTA */}
            <section id="consultation" className="bg-light py-5 text-center">
                <div className="container">
                    <h2 className="fw-bold">Ready to Talk?</h2>
                    <p>Schedule a consultation today and take the next step with confidence.</p>
                    <button onClick={()=>navigate(routes.scheduleConsultation())} className="btn btn-outline-primary rounded-pill px-4 py-2">Book Consultation</button>
                </div>
            </section>
        </div>
    )
}