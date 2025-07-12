import React, { useRef, useState } from "react";
import { Rating } from "./Rating";

export const RatingSelector = ({ show, close, reviews }) => {
    const [rating, setRating] = useState(0);

    const nameRef = useRef();
    const commentRef = useRef();

    if (!show) return null;

    const addNew = () => {
        if (!nameRef.current.value.trim() || rating === 0 || !commentRef.current.value.trim()) {
            alert("Please fill all fields and select a rating.");
            return;
        }
        const data = {
            rating,
            name: nameRef.current.value,
            comment: commentRef.current.value,
            date: new Date().toLocaleDateString()
        };
        setRating(0);
        nameRef.current.value = '';
        commentRef.current.value = '';
    }

    const remove = (review) =>{

    }

    return (
        <div
            className="position-fixed top-0 start-0 vw-100 vh-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
            style={{zIndex: 1050}}
            onClick={close}
            role="dialog"
            aria-modal="true"
        >
            <div onClick={(e)=>e.stopPropagation()} className="bg-white rounded-4 p-4" style={{ maxWidth: 500, width: "90%" }}>
                <h4 className="mb-4">Client Reviews</h4>
                <div
                    style={{
                        maxHeight: 200,
                        overflowY: "auto",
                        marginBottom: 20,
                        border: "1px solid #ddd",
                        padding: "10px",
                        borderRadius: "8px",
                    }}
                >
                    {reviews.length === 0 && <p className="text-muted">No reviews yet.</p>}
                    {reviews.map((rev, i) => (
                        <div className="d-flex justify-content-between align-items-start gap-3 mb-3" key={i}>
                            <div>
                                <strong>{rev.name}</strong> <br />
                                <small className="text-muted">{rev.date}</small>
                                <Rating rating={rev.rating} readOnly />
                                <p className="mb-0">{rev.comment}</p>
                            </div>
                            <button onClick={()=>remove(rev)} className="btn btn-sm btn-outline-danger">Remove</button>
                        </div>
                    ))}
                </div>

                <div>
                    <input
                        ref={nameRef}
                        type="text"
                        className="form-control mb-3"
                        placeholder="Your Name"
                    />
                    <label className="form-label">Rating</label>
                    <Rating rating={rating} onChange={setRating} />
                    <textarea
                        ref={commentRef}
                        className="form-control mt-3 mb-3"
                        rows={3}
                        placeholder="Your review"
                    />
                    <div className="d-flex justify-content-end gap-2">
                        <button className="btn btn-outline-primary" onClick={close}>Cancel</button>
                        <button className="btn btn-primary" onClick={addNew}>Submit Review</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
