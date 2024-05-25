type Props = {
    header: string,
    description: string,
    cost: number
}

const OfferCard = ({header, description, cost}: Props) => {
    return(
        <div className={"offers-cards_info"}>
            <h3>{header}</h3>
            <p>{description}</p>
            <span className={"offers-cards_info_cost"}>Стоимость: {cost}</span>
            <div className="offers-cards_info_buttons">
                <button className={"button__black"}><span>Забронировать</span></button>
                <button>Посмотреть адреса</button>
            </div>
        </div>
    )
}
export default OfferCard