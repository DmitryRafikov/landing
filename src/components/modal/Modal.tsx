import styles from './modal.module.scss'
import {useAppSelector, useAppDispatch} from "../../store/hooks";
import { close } from "../../store/reducers/modal.slice";

export const Modal = () => {
    const isOpen = useAppSelector(state => state.modal.isOpen);
    const dispatch = useAppDispatch();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        dispatch(close())
    };


    if(!isOpen) return null

    return(
        <div
            className={styles.modal}
        >
            <h3 className={'modal_header'}>
                Напишите нам в удобном для вас мессенджере
                или позвоните по телефону
                и мы поможем вам выбрать время
            </h3>
            <div className={styles.modal_contacts}>

            </div>
            <div className={styles.modal_controls}>
                <button onClick={ () => dispatch(close()) }>
                    Закрыть
                </button>
            </div>
        </div>
    )
}