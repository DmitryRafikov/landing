import Carousel from '../components/carousel/Carousel'
import storiesUrls from "../utils/gallery-stories";
import { PaginationPosition } from '../components/carousel/types';
import StoryTimer from '../components/StoryTimer';
import styles from '../styles/sections/gallery.module.scss'

const GalleryNew = () => {
    const _duration = 5000;
    return(
        <section className={styles.gallery}>
            <div className={styles.gallery__offer}>
                <div className={styles.gallery__headerWrapper}>
                    <h1 className={styles.gallery__header}>
                        Посмотрите, как <span>Вы проведете время</span>
                    </h1>
                    <div className={styles.gallery__headerWrapper__cards}>
                        <div className={styles.card}>
                            <img src={"./assets/icons/photocamera.svg"} alt=""/>
                            <p>Наши фотографы не оставят вас без качественных фотографий на память</p>
                        </div>
                        <div className={styles.card}>
                            <img src={"./assets/icons/videocamera.svg"} alt=""/>
                            <p>Ваши эмоции будут такими же яркими, как каждый кадр записанного для вас видео</p>
                        </div>
                    </div>
                    <div className={styles.gallery__figure}>
                        <img src="./assets/figures/card-figure.svg" alt="" />
                    </div>
                </div>         
            </div>
            <div className={styles.gallery__storyWrapper}>
                <div className={styles.stories}>
                    <Carousel
                        paginationPosition={PaginationPosition.INSIDE_UP}
                        customPagination={<StoryTimer duration={_duration} />}
                        customLeftArrow={customArrow("./assets/icons/arrow left rounded.svg")}
                        
                        customRightArrow={customArrow("./assets/icons/arrow right rounded.svg")}
                        autoPlay={true}
                        autoPlayDuration={_duration}
                    >
                        {storiesUrls.map((url, index) => (
                            <div className={styles.story} key={index}>
                                <img src={url} alt="Story" />
                            </div>
                        ))}
                    </Carousel>
                    <button className={"button__white"}>
                        Посмотреть еще
                    </button>
                </div>                    
            </div>
        </section>
    )
}

const customArrow = (imgPath:string) => {
    return(
        <div className="story-arrow">
            <img src={imgPath} alt="" />
        </div>
    )
}
export default GalleryNew