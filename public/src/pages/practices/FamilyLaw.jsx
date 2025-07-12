import React from 'react';
import { routes } from '../../routes/Routes';
import { useNavigate } from 'react-router-dom';

export const FamilyLaw = () => {
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            {/* Page Title */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Family Law Services</h1>
                <p className="lead text-muted">Compassionate guidance through life’s most personal legal matters.</p>
            </div>

            {/* Intro Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
                        className="img-fluid rounded shadow w-100"
                        alt="Family Law"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-semibold">What We Handle</h2>
                    <p>
                        Our family law practice covers a range of sensitive issues, including divorce, child custody,
                        alimony, and property division. We work closely with our clients to protect their rights and
                        support their families through difficult transitions.
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Divorce & Separation</li>
                        <li className="list-group-item">Child Custody & Visitation</li>
                        <li className="list-group-item">Child Support & Alimony</li>
                        <li className="list-group-item">Prenuptial Agreements</li>
                        <li className="list-group-item">Adoption & Guardianship</li>
                    </ul>
                </div>
            </div>

            {/* Testimonials or Case Study */}
            <div className="bg-light p-4 rounded mb-5">
                <h3 className="mb-3">Why Choose Us</h3>
                <p>
                    We believe every family deserves dignity and respect. Our legal team brings a thoughtful,
                    strategic approach to resolving family disputes while minimizing emotional stress. Whether
                    through litigation or mediation, we advocate fiercely for your best interests.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h4 className="mb-3">Need Legal Help with a Family Matter?</h4>
                <p className="mb-4">Contact us today to schedule a confidential consultation.</p>
                <button onClick={()=>navigate(routes.contact())} className="btn btn-outline-primary btn-lg">Get in Touch</button>
            </div>
        </div>
    )
}
