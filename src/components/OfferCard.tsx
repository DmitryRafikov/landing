import { Link } from "react-scroll"
import styles from '../styles/sections/offers.module.scss'
type Props = {
    header: string,
    description: string,
    cost: number
}

const OfferCard = ({header, description, cost}: Props) => {
    return(
        <div className={styles.offersCard}>
            <h3>{header}</h3>
            <p>{description}</p>
            <span className={styles.offersCard__cost}>Стоимость: {cost}</span>
            <div className={styles.offersCard__controls}>
            <button className={`button__black ${styles.book__button}`}><span>Забронировать</span></button>
                <Link
                    to="addresses"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    <button>Посмотреть адреса</button>
                </Link>
                
            </div>
        </div>
    )
}
export default OfferCard