import * as React from 'react'
import OfferCard from './OfferCard'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { selection } from '../store/reducers/service.slice'
import {data} from '../utils/data'
const Offers = () => {
    const currentService = useAppSelector((state) => state.service.currentService)
    const dispatch = useAppDispatch()
    const services = data.services
    return(
        <section className={"offers"}>
            <h1>Какие услуги <br/>мы предоставляем?</h1>
            <div className={"offers_selection"}>
                <button 
                    className={"button__transparent"}
                    onClick={() => dispatch(selection(0))}
                >
                        Полет на парашюте
                </button>
                <button 
                    className={"button__transparent"}
                    onClick={() => dispatch(selection(1))}
                >
                        Дельфин тур
                </button>
                <button 
                    className={"button__transparent"}
                    onClick={() => dispatch(selection(2))}
                >
                        Рыбалка в открытом море
                </button>
            </div>
            <div className={"offers-cards"}>
                <OfferCard
                    header={services[currentService].name}
                    description={services[currentService].description}
                    cost={services[currentService].cost}
                />
                <div className={"offers-cards_photo"}>
                    <img src={services[currentService].coverURL} alt=""/>
                </div>
            </div>
        </section>
    )
}
export default Offers