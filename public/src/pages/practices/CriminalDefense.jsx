import React from 'react';
import { routes } from '../../routes/Routes';
import { useNavigate } from 'react-router-dom';

export const CriminalDefense = () => {
    const navigate = useNavigate();
    return (
        <div className="container py-5">
            {/* Page Title */}
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Criminal Defense Services</h1>
                <p className="lead text-muted">
                    Protecting your rights. Fighting for your freedom. Experienced defense when it matters most.
                </p>
            </div>

            {/* Intro Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
                        className="img-fluid rounded shadow w-100"
                        alt="Criminal Defense"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-semibold">Defending Your Future</h2>
                    <p>
                        Being charged with a crime can be overwhelming. We provide aggressive and strategic legal
                        defense for clients facing serious accusations. We fight to protect your rights, reputation,
                        and future — inside and outside the courtroom.
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Assault & Violent Crimes</li>
                        <li className="list-group-item">Drug Charges</li>
                        <li className="list-group-item">DUI / DWI Defense</li>
                        <li className="list-group-item">Theft, Burglary & Robbery</li>
                        <li className="list-group-item">White Collar Crimes</li>
                        <li className="list-group-item">Juvenile Offenses</li>
                        <li className="list-group-item">Expungements</li>
                    </ul>
                </div>
            </div>

            {/* Defense Strategy Section */}
            <div className="bg-light p-4 rounded mb-5">
                <h3 className="mb-3">A Smart, Strategic Defense</h3>
                <p>
                    Every case is unique. We conduct thorough investigations, analyze the evidence, and build
                    a tailored defense strategy. Our firm has successfully defended clients in both state and
                    federal courts — and we are ready to stand by your side.
                </p>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <h4 className="mb-3">Charged With a Crime?</h4>
                <p className="mb-4">
                    Time is critical. Contact our office now for a confidential case review and start your defense.
                </p>
                <button onClick={()=>navigate(routes.contact())} className="btn btn-outline-primary btn-lg">Get Immediate Help</button>
            </div>
        </div>
    )
}
