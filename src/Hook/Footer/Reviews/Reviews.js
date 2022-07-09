import { useEffect } from "react";
import { useState } from "react"

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return [reviews, setReviews];
}

export default Reviews;




// import { useEffect, useState } from "react";

// const reviews=()=>{
//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         fetch('generated.json')
//             .then(res => res.json())
//             .then(data => setReview(data))
//     }, []);
// }