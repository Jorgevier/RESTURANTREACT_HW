import Review from "./Review"
export const Reviews = () => {

    const reviews =[]
    return (
        <>
            {reviews.length > 0 ? reviews.map((review) =>{
                return <Review key={review.id} review={review} />
            }) : <p> no reviews to display </p>}
        </>
    )
}