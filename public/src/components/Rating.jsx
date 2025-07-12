import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

export const Rating = ({ rating: rate, onChange, readOnly, children}) =>{
    const [rating, setRating] = useState(parseFloat(rate || 0));

    const change = (rt) =>{
        setRating(rt);
        onChange(rt);
    }

    return (
        <div className="d-flex align-items-center gap-2 user-select-none">
            <StarRatings
                rating={rating}
                starRatedColor="var(--highlight-color)"
                starHoverColor="orange"
                changeRating={!readOnly && change}
                numberOfStars={5}
                name='rating'
                starDimension="20px"
                starSpacing="3px"
            />
            <div>{rating} Star {children}</div>
        </div>
    );
}