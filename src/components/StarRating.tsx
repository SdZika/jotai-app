import { useState } from 'react'

export const StarRating = ({totalStars = 5}) => {

  const [rating, setRating] = useState(0)

  return (
    <div>
      <h1>StarRating</h1>
      {[...Array(totalStars)].map((item, index) => {
        const ratingValue = index + 1;
        return (
          <span onClick={() => setRating(ratingValue)} style={{cursor:"pointer", color: ratingValue <= rating ? "gold" : "gray"}}>★</span>
        )
      }
      )}
    </div>
  )
}
