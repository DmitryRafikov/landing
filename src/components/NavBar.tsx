import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import {useAppDispatch} from '../store/hooks';
import {open} from '../store/reducers/modal.slice'
const NavBar = () => {
    useEffect(() => {
        // Updating scrollSpy when the component mounts.
        scrollSpy.update()
        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
            Events.scrollEvent.remove('begin')
            Events.scrollEvent.remove('end')
        }
    }, [])
    const dispatch = useAppDispatch()
    const _offset = 0
    const _duration = 500

    return(
        <nav className={'navbar'}>
            <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={_offset}
                duration={_duration}
                className={"link"}
            >
                Фото и видео
            </Link>
            <Link
                to="offers"
                spy={true}
                smooth={true}
                offset={_offset}
                duration={_duration}
                className={"link"}
            >
                Услуги
            </Link>
            <Link
                to="addresses"
                spy={true}
                smooth={true}
                offset={_offset}
                duration={_duration}
                className={"link"}
            >
                Адреса
            </Link>
            <Link
                to="reviews"
                spy={true}
                smooth={true}
                offset={_offset+100}
                duration={_duration}
                className={"link"}
            >
                Отзывы
            </Link>
            <button onClick={()=>dispatch(open())}>
                Забронировать
            </button>
        </nav>
    )
}

export default NavBar