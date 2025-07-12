import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from '../components/Rating';
import { RatingSelector } from '../components/RatingSelector';

export const Reviews = () => {
    const [rating, setRating] = useState(false);

    const reviews = [
        {
            name: "Alicia John",
            date: "July 10, 2025",
            rating: 5,
            caseType: "Family Law",
            comment: "Attorney was compassionate, knowledgeable, and helped us resolve our custody dispute quickly. Highly recommended!"
        },{
            name: "Derek Paul",
            date: "July 4, 2025",
            rating: 4.5,
            caseType: "Criminal Defense",
            comment: "Handled my case professionally with excellent communication throughout. I felt confident every step of the way."
        },{
            name: "Janice Lee",
            date: "June 22, 2025",
            rating: 4,
            caseType: "Estate Planning",
            comment: "Very responsive and explained every detail clearly. Great for wills and trusts."
        },
    ];

    const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

    return (
        <div className="container py-5">
            <div className="mb-4">
                <h2 className="fw-bold">Client Reviews</h2>
                <div className="d-flex align-items-center">
                    <h4 className="mb-0 me-2">{averageRating} / 5</h4>
                    <Rating rating={averageRating} readOnly />
                </div>
                <p className="text-muted">{reviews.length} verified client reviews</p>
            </div>

            <div className="row">
                <div className="col-lg-8 mx-auto">
                    {reviews.map((review, idx) => (
                        <div className="card mb-4 shadow-sm border-lightly rounded-4" key={idx}>
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-2">
                                    <div className="me-3">
                                        <div className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-light" style={{width: 48, height: 48}}>
                                            {review.name?.[0].toUpperCase()}
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">{review.name}</h6>
                                        <small className="text-muted">{review.date} • {review.caseType}</small>
                                    </div>
                                </div>
                                <div className="mb-2"><Rating rating={review.rating} readOnly /></div>
                                <p className="mb-0 text-secondary">{review.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-5">
                <button onClick={()=>setRating(true)} className="btn btn-outline-primary px-4 py-2 rounded-pill">Write a Review</button>
            </div>
            <RatingSelector
                show={rating}
                close={()=>setRating(false)}
                reviews={reviews}
            />
        </div>
    )
}
