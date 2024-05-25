import GalleryCard from '../components/GalleryCard'
import styles from '../styles/modules/gallery.module.scss'
import cardStyles from "../styles/modules/gallery.module.scss";

const Gallery = () => {
    return(
        <section className={"gallery"}>
            <div className={"gallery-header"}>
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
            </div>
            <div className={"gallery-grid"}>
                <div className="gallery-grid-group">
                    <GalleryCard
                        src={"./assets/photos/compressed/grid__1__compressed.jpg"}
                        height={styles.more_height}
                    />
                    <GalleryCard
                        src={"./assets/photos/compressed/grid__2__compressed.jpg"}
                        height={cardStyles.common_height}
                    />
                </div>
                <div className="gallery-grid-group images-less-height">
                        <GalleryCard
                            src={"./assets/photos/compressed/grid__3__compressed.jpg"}
                            height={styles.common_height}
                        />
                        <GalleryCard
                            src={"./assets/photos/compressed/grid__4__compressed.jpg"}
                            height={styles.more_height}
                        />
                </div>
                <div className="gallery-grid-group">
                    <GalleryCard
                        src={"./assets/photos/compressed/grid__1__compressed.jpg"}
                        height={styles.more_height}
                    />
                    <GalleryCard
                        src={"./assets/photos/compressed/grid__2__compressed.jpg"}
                        height={cardStyles.common_height}
                    />

                </div>
                <div className="gallery-grid-group images-less-height">
                        <GalleryCard
                            src={"./assets/photos/compressed/grid__3__compressed.jpg"}
                            height={styles.common_height}
                        />
                        <GalleryCard
                            src={"./assets/photos/compressed/grid__4__compressed.jpg"}
                            height={styles.more_height}
                        />
                </div>
            
            </div>
            
        </section>
    )
}

export default Gallery