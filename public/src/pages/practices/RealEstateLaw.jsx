import React from 'react';
import { routes } from '../../routes/Routes';
import { useNavigate } from 'react-router-dom';

export const RealEstateLaw = () => {
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            {/* Page Title */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Real Estate Law Services</h1>
                <p className="lead text-muted">
                Trusted legal guidance for property transactions, disputes, and development.
                </p>
            </div>

            {/* Intro Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
                        className="img-fluid rounded shadow w-100"
                        alt="Real Estate Law"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-semibold">Our Real Estate Legal Services</h2>
                    <p>
                        Buying, selling, leasing, or developing property? Our team ensures your real estate
                        transactions are smooth, secure, and fully compliant. We handle residential, commercial,
                        and investment property matters with attention to detail and legal precision.
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Property Purchase & Sale Agreements</li>
                        <li className="list-group-item">Title Review & Due Diligence</li>
                        <li className="list-group-item">Commercial Leases & Contracts</li>
                        <li className="list-group-item">Real Estate Disputes & Litigation</li>
                        <li className="list-group-item">Land Use, Zoning & Development</li>
                        <li className="list-group-item">Foreclosure Defense</li>
                    </ul>
                </div>
            </div>

            {/* Why Us Section */}
            <div className="bg-light p-4 rounded mb-5">
                <h3 className="mb-3">Why Choose Our Firm</h3>
                <p>
                    Real estate is one of the most significant investments you'll make. We offer strategic
                    legal advice backed by years of experience to protect your interests, minimize risks, and
                    resolve conflicts efficiently.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h4 className="mb-3">Need Legal Support for a Property Matter?</h4>
                <p className="mb-4">Contact our office today to get reliable legal guidance on your real estate issue.</p>
                <button onClick={()=>navigate(routes.contact())} className="btn btn-outline-primary btn-lg">Request a Consultation</button>
            </div>
        </div>
    )
}
