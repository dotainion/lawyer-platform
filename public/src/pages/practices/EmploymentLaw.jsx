import React from 'react';
import { routes } from '../../routes/Routes';
import { useNavigate } from 'react-router-dom';

export const EmploymentLaw = () => {
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            {/* Page Title */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Employment Law Services</h1>
                <p className="lead text-muted">
                    Protecting employees and advising businesses on workplace rights and responsibilities.
                </p>
            </div>

            {/* Intro Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
                        className="img-fluid rounded shadow w-100"
                        alt="Employment Law"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-semibold">Employment Legal Support</h2>
                    <p>
                        Whether you're an employee facing unfair treatment or an employer navigating legal compliance,
                        we provide experienced legal guidance on workplace matters. We help ensure fair, lawful,
                        and productive employment relationships.
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Wrongful Termination</li>
                        <li className="list-group-item">Workplace Discrimination & Harassment</li>
                        <li className="list-group-item">Wage & Hour Disputes</li>
                        <li className="list-group-item">Employment Contracts & Policies</li>
                        <li className="list-group-item">Non-Compete & Severance Agreements</li>
                        <li className="list-group-item">Employer Defense & Compliance</li>
                    </ul>
                </div>
            </div>

            {/* Info Section */}
            <div className="bg-light p-4 rounded mb-5">
                <h3 className="mb-3">For Employees & Employers</h3>
                <p>
                    We advocate for fairness and legal compliance in the workplace. Whether you're defending
                    your rights or managing legal risk as a business owner, we work to resolve disputes efficiently
                    and uphold your interests under labor laws.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h4 className="mb-3">Need Help With a Workplace Issue?</h4>
                <p className="mb-4">
                    Speak with an attorney today for practical advice and strong representation in employment matters.
                </p>
                <button onClick={()=>navigate(routes.contact())} className="btn btn-outline-primary btn-lg">Schedule a Consultation</button>
            </div>
        </div>
    )
}
