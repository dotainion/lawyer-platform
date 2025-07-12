import { useNavigate } from "react-router-dom";
import { routes } from "../routes/Routes";

export const BlogPost = () =>{
    const navigate = useNavigate();

    const blogPosts = [
        {
            id: 1,
            title: "What to Do After a Car Accident",
            author: "Sarah Johnson, Esq.",
            date: "July 1, 2025",
            image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=900&q=80",
            content: `
                Being in a car accident is stressful — legally and emotionally. Here's what you should do immediately:

                1. Check for injuries.
                2. Call emergency services.
                3. Move to safety if possible.
                4. Exchange insurance info.
                5. Document the scene.
                6. Don't admit fault.
                7. Contact an attorney.
            `,
        },{
            id: 2,
            title: "Understanding Child Custody Laws",
            author: "Emily Davis, Esq.",
            date: "June 25, 2025",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJd1KqflTZe-DhXoCLDUhxHCcpa6X6r5EHw&s",
            content: `
                Child custody laws are based on the child's best interests.

                Courts consider:

                - Parental bond
                - Stability of each home
                - Child's preference (age 12+)
                - Parental history of care

                Legal guidance can help you navigate and protect your rights.
            `,
        },{
            id: 3,
            title: "Common Mistakes in Business Contracts",
            author: "Michael Lee, Esq.",
            date: "June 18, 2025",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
            content: `
                Business owners often overlook:

                - Payment deadlines
                - Confidentiality clauses
                - Termination conditions
                - Governing law for disputes

                Let an attorney review your contracts before signing.
            `,
        },
    ];

    const post = blogPosts[0];

    if (!post) {
        return (
            <div className="container py-5 text-center">
                <h2>Blog post not found</h2>
                <button className="btn btn-primary mt-3" onClick={() => navigate(routes.blogs())}>
                Back to Blog
                </button>
            </div>
        );
    }

    return(
        <div>
            <main className="container py-5">
                <div className="mb-4">
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => navigate(routes.blogs())}>
                    ← Back
                    </button>
                </div>

                <article>
                    <h1 className="fw-bold mb-2">{post.title}</h1>
                    <p className="text-muted mb-3">By {post.author} • {post.date}</p>
                    <img
                        src={post.image}
                        alt={post.title}
                        className="img-fluid rounded mb-4"
                        style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
                    />
                    <div className="text-muted" style={{ whiteSpace: "pre-line" }}>{post.content}</div>
                </article>
            </main>
        </div>
    )
}