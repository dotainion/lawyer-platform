import { useState } from "react";

export const Contact = () =>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        matter: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState(null); // null | "success" | "error"

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((fd) => ({ ...fd, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message || !formData.matter) {
            setStatus("error");
            return;
        }

        setTimeout(() => {
            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                matter: "",
                subject: "",
                message: "",
            });
        }, 1000);
    }

    return(
        <div>
            <main className="container py-5" style={{ maxWidth: "900px" }}>
                <h1 className="mb-4 fw-bold">Schedule a Legal Consultation</h1>
                <p className="mb-4 text-muted">
                    Please fill out the form below to tell us about your legal matter. A member of our team will respond as soon as possible.
                </p>

                <div className="row gx-5">
                    {/* Contact Form */}
                    <section className="col-md-7">
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-semibold">
                                    Full Name <span className="text-danger">*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">
                                    Email Address <span className="text-danger">*</span>
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label fw-semibold">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className="form-control"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="matter" className="form-label fw-semibold">
                                    Type of Legal Matter <span className="text-danger">*</span>
                                </label>
                                <select
                                    id="matter"
                                    name="matter"
                                    className="form-select"
                                    value={formData.matter}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" hidden>-- Select an area --</option>
                                    <option value="Business Law">Business Law</option>
                                    <option value="Family Law">Family Law</option>
                                    <option value="Criminal Defense">Criminal Defense</option>
                                    <option value="Real Estate">Real Estate</option>
                                    <option value="Personal Injury">Personal Injury</option>
                                    <option value="Estate Planning">Estate Planning</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="subject" className="form-label fw-semibold">
                                    Subject (optional)
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    className="form-control"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="E.g. Urgent custody matter"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="form-label fw-semibold">
                                    Brief Description <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-control"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your situation so we can understand how to help..."
                                    required
                                ></textarea>
                            </div>

                            {status === "error" && (
                                <div className="alert alert-danger" role="alert">
                                    Please complete all required fields.
                                </div>
                            )}
                            {status === "success" && (
                                <div className="alert alert-success" role="alert">
                                    Message sent. We’ll be in touch shortly.
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary px-4">
                                Submit Inquiry
                            </button>
                        </form>
                    </section>

                    {/* Contact Info Sidebar */}
                    <aside className="col-md-5 mt-5 mt-md-0">
                        <h2 className="h5 fw-semibold mb-3">Office Contact Info</h2>
                        <address className="mb-4 text-muted">
                            <strong>Justice & Co. Law Firm</strong>
                            <br />
                            456 Liberty Lane
                            <br />
                            Capital City, ST 12345
                            <br />
                            <abbr title="Phone">Phone:</abbr> (555) 987-6543
                            <br />
                            <abbr title="Email">Email:</abbr>{" "}
                            <a href="mailto:legal@justiceco.com">legal@justiceco.com</a>
                        </address>

                        <h3 className="h6 fw-semibold">Office Hours</h3>
                        <ul className="list-unstyled text-muted">
                            <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
                            <li>Saturday: By Appointment</li>
                            <li>Sunday: Closed</li>
                        </ul>

                        <h3 className="h6 fw-semibold mt-4">Location Map</h3>
                        <div className="ratio ratio-4x3 rounded shadow-sm">
                            <iframe
                                title="Map"
                                src="https://maps.google.com/maps?q=law%20office&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    )
}