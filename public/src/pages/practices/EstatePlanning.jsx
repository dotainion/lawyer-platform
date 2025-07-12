import React from 'react';
import { routes } from '../../routes/Routes';
import { useNavigate } from 'react-router-dom';

export const EstatePlanning = () => {
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            {/* Page Title */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Estate Planning Services</h1>
                <p className="lead text-muted">
                Secure your legacy. Protect your loved ones. Plan for the future with confidence.
                </p>
            </div>

            {/* Intro Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
                        className="img-fluid rounded shadow w-100"
                        alt="Estate Planning"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-semibold">What We Offer</h2>
                    <p>
                        A solid estate plan ensures your wishes are carried out and your loved ones are protected.
                        We provide thoughtful legal guidance to help you organize your assets, reduce tax burdens,
                        and avoid costly legal disputes.
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Wills & Trusts</li>
                        <li className="list-group-item">Powers of Attorney</li>
                        <li className="list-group-item">Living Wills / Advance Directives</li>
                        <li className="list-group-item">Probate & Estate Administration</li>
                        <li className="list-group-item">Asset Protection Strategies</li>
                        <li className="list-group-item">Guardianship Planning</li>
                    </ul>
                </div>
            </div>

            {/* Info Section */}
            <div className="bg-light p-4 rounded mb-5">
                <h3 className="mb-3">Why Estate Planning Matters</h3>
                <p>
                    Without proper planning, your family may face unnecessary stress, taxes, or court battles.
                    We guide you through every step, ensuring your plan reflects your values and priorities,
                    and brings peace of mind to those you care about most.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h4 className="mb-3">Start Planning Today</h4>
                <p className="mb-4">
                    Let’s build a plan that honors your life’s work. Contact us for a confidential consultation.
                </p>
                <button onClick={()=>navigate(routes.contact())} className="btn btn-outline-primary btn-lg">Book a Consultation</button>
            </div>
        </div>
    )
}
