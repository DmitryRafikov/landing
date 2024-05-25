import cn from 'classnames'
import { UseDispatch, useSelector } from 'react-redux'
type TabProps = {
    active?: boolean,
    label: string
    onClick?: () => void
}

const Tab = ({active, label, onClick}: TabProps) =>{

    return(
        <li 
            className ={ cn('tab', {'active': active})}
            onClick = {onClick}
        >
            {label}
        </li>
    )
}

export default Tab