import { IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'

// Define the interface for the component's props
export interface ReviewRatingProps {
    rating: number // Rating value (from 0 to 5)
    size?: number  // Optional size for the stars, default is 12 if not provided
}

// Component to display the review rating using stars
export default function ReviewRating(props: ReviewRatingProps) {

    // Helper function to convert the rating (1-5) into star icons
    function ratingToStars(rating: number) {
        const stars = [] // Initialize an empty array for storing star icons
        // Loop to generate 5 stars based on the rating value
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                // If the rating is greater than or equal to the current star, show a filled star
                stars.push(<IconStarFilled size={props.size ?? 12} />)
            } else if (rating >= i - 0.5) {
                // If the rating is within a half-star range, show a half-filled star
                stars.push(<IconStarHalfFilled size={props.size ?? 12} />)
            } else {
                // Otherwise, show an empty star
                stars.push(<IconStar size={props.size ?? 12} />)
            }
        }
        return stars
    }

    // Render the stars in a row, using flexbox to space them out
    return <div className="flex gap-0.5 text-emerald-400">{ratingToStars(props.rating)}</div>
}
