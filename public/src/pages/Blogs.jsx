import { useNavigate } from "react-router-dom";
import { routes } from "../routes/Routes";

export const Blogs = () =>{
    const navigate = useNavigate();
    
    const posts = [
        {
            id: 1,
            title: "What to Do After a Car Accident",
            summary: "Being involved in an accident is stressful — legally and emotionally. Here's a checklist of what to do immediately to protect your rights.",
            author: "Sarah Johnson, Esq.",
            date: "July 1, 2025",
            image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=900&q=80",
        },{
            id: 2,
            title: "Understanding Child Custody Laws",
            summary: "Learn how custody decisions are made and what factors courts consider when determining the best interests of a child.",
            author: "Emily Davis, Esq.",
            date: "June 25, 2025",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJd1KqflTZe-DhXoCLDUhxHCcpa6X6r5EHw&s",
        },{
            id: 3,
            title: "Common Mistakes in Business Contracts",
            summary: "Even small errors in contracts can lead to major disputes. Discover key clauses and how to avoid common traps.",
            author: "Michael Lee, Esq.",
            date: "June 18, 2025",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
        },
    ];

    return(
        <div>
            <main className="container-fluid px-0">
                {/* ── Hero ───────────────────────────────────────────── */}
                <section
                    className="text-white text-center py-5 mb-5"
                    style={{
                        background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_300,q_75,w_400,x_2227,y_1777/v1/clients/texas/NewYorkTexasZipline_PineyWoods_DF_29_cd369979-443a-40f1-be05-fb1135e4bd18.jpg') center/cover",
                    }}
                >
                    <div className="container">
                        <h1 className="display-4 fw-bold">Legal Insights & Resources</h1>
                        <p className="lead text-light">
                            Stay informed with the latest articles, tips, and legal updates from our attorneys.
                        </p>
                    </div>
                </section>

                {/* ── Blog Grid ─────────────────────────────────────── */}
                <section className="container mb-5">
                    <div className="row g-4">
                        {posts.map((post) => (
                            <div key={post.id} className="col-12 col-md-6 col-lg-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <img
                                        src={post.image}
                                        className="card-img-top"
                                        alt={post.title}
                                        style={{ objectFit: "cover", height: "220px" }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h3 className="card-title h5">{post.title}</h3>
                                        <p className="card-text text-muted small mb-2">
                                            By {post.author} • {post.date}
                                        </p>
                                        <p className="card-text text-muted">{post.summary}</p>
                                        <button onClick={()=>navigate(routes.blogPost())} className="mt-auto btn btn-outline-primary btn-sm">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Pagination (optional placeholder) ─────────────── */}
                <section className="container mb-5 text-center user-select-none">
                    <nav aria-label="Blog page navigation">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <span className="page-link shadow-none">Previous</span>
                            </li>
                            <li className="page-item active">
                                <span className="page-link shadow-none">1</span>
                            </li>
                            <li className="page-item">
                                <button className="page-link shadow-none">2</button>
                            </li>
                            <li className="page-item">
                                <button className="page-link shadow-none">Next</button>
                            </li>
                        </ul>
                    </nav>
                </section>

                {/* ── CTA ───────────────────────────────────────────── */}
                <section className="bg-light text-center py-5">
                    <div className="container">
                        <h2 className="fw-bold mb-3">Have a Legal Question?</h2>
                        <p className="mb-4">
                            Contact our team for personalized legal advice tailored to your situation.
                        </p>
                        <button onClick={()=>navigate(routes.scheduleConsultation())} className="btn btn-outline-primary btn-lg rounded-pill px-4">Speak to an Attorney</button>
                    </div>
                </section>
            </main>
        </div>
    )
}