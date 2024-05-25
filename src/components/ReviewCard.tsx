type Props = {
    reviewerName:string,
    review:string,
    score: number
}

const ReviewCard = ({reviewerName, review, score}:Props) =>  {
    return(
        <div className={"reviews_card"}>
            <h3>
                {reviewerName}
            </h3>
            <div className={"reviews_card-text"}>
                <p >
                    {review}
                </p>
            </div>
            <div className={"reviews_card-score"}>
                <img src="" alt=""/>
                <div>
                    {score}/10
                </div>
            </div>
        </div>
    )
}

export default ReviewCard