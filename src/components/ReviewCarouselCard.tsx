type Props = {
    reviewerName:string,
    review:string,
    score: number,
    reviewerPhoto?:string
}

const ReviewCarouselCard = ({reviewerName, review, score, reviewerPhoto}:Props) =>  {
    return(
        <div className={"reviews_card"}>
            <div className={"reviews_carousel-card__reviewer-photo"}>
                <img 
                    src={reviewerPhoto} 
                    alt={""}
                />
            </div>
            <div className={"reviews_card-score"}>
                <div>
                    {score}/10
                </div>
            </div>
            <h3>
                {reviewerName}
            </h3>
            <div className={"reviews_card-text"}>
                <p >
                    {review}
                </p>
            </div>
        </div>
    )
}

export default ReviewCarouselCard