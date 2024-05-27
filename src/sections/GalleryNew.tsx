import StoriesGenerator from '../components/StoriesGenerator'
import Carousel from '../components/carousel/Carousel'
import storiesUrls from "../utils/gallery-stories";
import { ArrowPosition, PaginationPosition } from '../components/carousel/types';
import StoryTimer from '../components/StoryTimer';
const GalleryNew = () => {
    const _duration = 5000;
    return(
        <section className={"gallery"}>
            <div className="gallery-photosection">
                <div className="gallery-offer">
                    <h1>Посмотрите, как <span>Вы проведете время</span></h1>
                    <div className={"gallery-header__slogan"}>
                        <div className={"gallery-header__slogan-card"}>
                            <img src={"./assets/icons/photocamera.svg"} alt=""/>
                            <p>Наши фотографы не оставят вас без качественных фотографий на память</p>
                        </div>
                        <div className={"gallery-header__slogan-card"}>
                            <img src={"./assets/icons/videocamera.svg"} alt=""/>
                            <p>Ваши эмоции будут такими же яркими, как каждый кадр записанного для вас видео</p>
                        </div>
                    </div>
                    <div className="gallery-figure">
                        <img src="./assets/figures/card-figure.svg" alt="" />
                    </div>
                </div>
                <div className="gallery-photos">
                    <div className="gallery-photos__photo-container">
                        <Carousel
                            paginationPosition={PaginationPosition.INSIDE_UP}
                            customPagination={<StoryTimer duration={_duration} />}
                            autoPlay={true}
                            autoPlayDuration={_duration}
                        >
                            {storiesUrls.map((url, index) => (
                                <div className={"story"} key={index}>
                                    <img src={url} alt="Story" />
                                </div>
                            ))}
                        </Carousel>
                        <button className={"button__white"}>
                            Посмотреть еще
                        </button>
                    </div>                    
                </div>
            </div>
            <div className="gallery-videosection">
                <div className="gallery-video"></div>
            </div>
        </section>
    )
}

export default GalleryNew