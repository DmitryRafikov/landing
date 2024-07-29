import OfferCard from '../components/OfferCard'
import styles from '../styles/sections/offers.module.scss'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { selection } from '../store/reducers/service.slice'
import {data} from '../utils/data'
const Offers = () => {
    const currentService = useAppSelector((state) => state.service.currentService)
    const dispatch = useAppDispatch()
    const services = data.services
    return(
        <section className={styles.offers}>
            <h1>Какие услуги <br/>мы предоставляем?</h1>
            <div className={styles.offers__navigation}>
                {
                    services.map((service: any, index: number) => {
                        return (
                            <button
                                key={index}
                                className={"button__transparent"}
                                onClick={() => dispatch(selection(index))}
                            >
                                {service.name}
                            </button>
                        )
                    })
                }
            </div>
            <div className={styles.offers__offersWrapper}>
                <OfferCard
                    header={services[currentService].name}
                    description={services[currentService].description}
                    cost={services[currentService].cost}
                />
                <div className={styles.offers__photo}>
                    <img src={services[currentService].coverURL} alt=""/>
                </div>
            </div>
            <div className={styles.offers__figure}>
                <img src="./assets/figures/offers.svg" alt="" />
            </div>
        </section>
    )
}
export default Offers