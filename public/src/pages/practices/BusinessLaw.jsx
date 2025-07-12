import React from 'react';
import { routes } from '../../routes/Routes';
import { useNavigate } from 'react-router-dom';

export const BusinessLaw = () => {
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            {/* Page Title */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Business Law Services</h1>
                <p className="lead text-muted">
                Strategic legal support for startups, corporations, and entrepreneurs.
                </p>
            </div>

            {/* Intro Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
                        className="img-fluid rounded shadow w-100"
                        alt="Business Law"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-semibold">Our Business Law Expertise</h2>
                    <p>
                        Whether you're forming a company, drafting a contract, or resolving a dispute, we provide
                        the legal insight to protect your business at every stage. Our team helps you reduce risk,
                        stay compliant, and grow with confidence.
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Business Formation (LLC, Corporation, etc.)</li>
                        <li className="list-group-item">Contracts & Agreements</li>
                        <li className="list-group-item">Partnership Disputes</li>
                        <li className="list-group-item">Regulatory Compliance</li>
                        <li className="list-group-item">Mergers & Acquisitions</li>
                        <li className="list-group-item">Intellectual Property Protection</li>
                    </ul>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-light p-4 rounded mb-5">
                <h3 className="mb-3">Why Work With Us</h3>
                <p>
                    Our firm has advised companies of all sizes — from local startups to established enterprises.
                    We take the time to understand your goals and tailor legal strategies that align with your
                    business vision.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h4 className="mb-3">Ready to Safeguard Your Business?</h4>
                <p className="mb-4">
                    Schedule a consultation today and gain a trusted legal partner for your business journey.
                </p>
                <button onClick={()=>navigate(routes.contact())} className="btn btn-outline-primary btn-lg">Speak With an Attorney</button>
            </div>
        </div>
    )
}
