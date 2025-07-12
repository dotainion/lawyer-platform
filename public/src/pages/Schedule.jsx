import { useState } from "react";

export const Schedule = () =>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        matter: "",
        date: "",
        time: "",
        message: "",
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((fd) => ({ ...fd, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, matter, date, time } = formData;

        if (!name || !email || !matter || !date || !time) {
            setStatus("error");
            return;
        }

        setStatus("success");
        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                matter: "",
                date: "",
                time: "",
                message: "",
            });
            setStatus(null);
        }, 3000);
    }

    return(
        <div>
            <main className="container-fluid px-0">
                {/* ── Hero ───────────────────────────────────────────── */}
                <section
                    className="text-white text-center py-5 mb-5"
                    style={{
                        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQIa5RGK_7Zub_dxOV21An-K44STbykmKFXQ&s') center/cover",
                    }}
                >
                    <div className="container">
                        <h1 className="display-5 fw-bold">Schedule an Appointment</h1>
                        <p className="lead text-light">
                            Book a confidential consultation with one of our attorneys. We're ready to help.
                        </p>
                    </div>
                </section>

                {/* ── Appointment Form ──────────────────────────────── */}
                <section className="container mb-5" style={{ maxWidth: "750px" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Jane Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                className="form-control"
                                placeholder="+1 (555) 123-4567"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-semibold">Type of Legal Matter *</label>
                            <select
                                name="matter"
                                className="form-select"
                                value={formData.matter}
                                onChange={handleChange}
                                required
                            >
                                <option value="" hidden>-- Select --</option>
                                <option>Business Law</option>
                                <option>Family Law</option>
                                <option>Criminal Defense</option>
                                <option>Real Estate</option>
                                <option>Personal Injury</option>
                                <option>Estate Planning</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Preferred Date *</label>
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Preferred Time *</label>
                                <input
                                    type="time"
                                    name="time"
                                    className="form-control"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-semibold">Additional Notes (optional)</label>
                            <textarea
                                name="message"
                                className="form-control"
                                rows="4"
                                placeholder="Any specific questions or context we should know before the appointment?"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        {status === "error" && (
                            <div className="alert alert-danger" role="alert">
                            Please fill out all required fields.
                            </div>
                        )}
                        {status === "success" && (
                            <div className="alert alert-success" role="alert">
                            Appointment request submitted! We’ll reach out to confirm.
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary px-4">
                            Book Appointment
                        </button>
                    </form>
                </section>

                {/* ── CTA ───────────────────────────────────────────── */}
                <section className="bg-light py-5 text-center">
                    <div className="container">
                        <h2 className="fw-bold mb-3">Prefer to Talk First?</h2>
                        <p className="text-muted mb-4">
                            Call our office to speak with a staff member or get immediate assistance.
                        </p>
                        <a href="tel:+15551234567" className="btn btn-outline-primary btn-lg rounded-pill px-4">
                            Call (555) 123-4567
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}