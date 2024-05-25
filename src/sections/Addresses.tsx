import { useAppSelector, useAppDispatch } from '../store/hooks'
import { selectionAddress, selection } from '../store/reducers/service.slice'
import {data} from '../utils/data'
import Tab from '../components/addresses-section/Tab'
import YandexMap from '../components/addresses-section/YaMaps'
import cn from 'classnames'
const Addresses = () => {
    const currentService = useAppSelector((state) => state.service.currentService)
    const currentAddress = useAppSelector(
        (state) => state.service
                        .serviceList
                        .find(s => s.serviceNumber === currentService)
                        ?.currentAddress
    )
    const dispatch = useAppDispatch()
    const services = data.services
    return(
        <section className={"addresses"}>
            <div className={"addresses-layout"}>
                <div className={"addresses-main"}>
                    <h1>Где мы находимся?</h1>
                    <div className={"addresses-main-navigation"}>
                        <ul className={"tab-panel"}>
                            {
                                services.map((service: any, index: number) => {
                                    return (
                                        <Tab
                                            key={index}
                                            active={currentService === index}
                                            label={service.name}
                                            onClick={() => dispatch(selection(index))}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={"addresses-main-layout"}>
                        <ul className={"addresses-list"}>
                            {
                                
                                services[currentService].addresses.map((address: any, index: number) => {
                                    return (
                                        <li 
                                            key={index}
                                            onClick={() => {
                                                    dispatch(selectionAddress(index));
                                                }
                                            }
                                            className={cn({'active': currentAddress === index})}
                                        >
                                            {address.name}
                                        </li>
                                )})
                            }
                        </ul>
                    </div>
                </div>
                <div className={"addresses-aside"}>
                    <YandexMap/>
                </div>
            </div>
            <button className={"button__black"}>Забронировать</button>
        </section>
    )
}
export default Addresses