import cardStyles from '../styles/modules/gallery.module.scss'


type Props = {
    id?: string,
    src: string,
    alt?: string,
    height: typeof cardStyles.more_height |
            typeof cardStyles.special_height |
            typeof cardStyles.common_height |
            typeof cardStyles.more_width
}

const GalleryCard = ({id, src, alt, height}:Props) => {
    return(
        <div id={id} className={"gallery-card " + height}>
            <div className="card-content">
                <img
                    src={src}
                    alt={alt}
                />
            </div>
        </div>
    )
}
export default GalleryCard