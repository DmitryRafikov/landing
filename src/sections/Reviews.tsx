import "react-multi-carousel/lib/styles.css";
import ReviewCarouselCard from "../components/ReviewCarouselCard";
import { data } from "../utils/data";
import Carousel from "../components/carousel/Carousel";

const Reviews = () => {
    const reviews = data.reviews

    return(
        <div className={"reviews"}>
            <div className="reviews-main">
                <h1>Прочитайте отзывы <br/><span>наших клиентов</span></h1>
                <Carousel
                    swipeable={false}
                    autoPlay={true}
                    infiniteMode={true}

                    autoPlayDuration={10000}
                    className={"reviews_layout-cards"}
                >
                    {
                        reviews.map((review, index) => {
                            return (
                                <ReviewCarouselCard 
                                    reviewerPhoto={review.reviewerPhoto}
                                    reviewerName={review.reviewerName}
                                    review={review.text}
                                    score={review.score}
                                    key={index}
                                />
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}
export default Reviews