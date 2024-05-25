import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


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

    return(
        <nav className={'navbar'}>
            <Link
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={"link"}
            >
                Фото и видео
            </Link>
            <Link
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={"link"}
            >
                Услуги
            </Link>
            <Link
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={"link"}
            >
                Адреса
            </Link>
            <Link
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={"link"}
            >
                Отзывы
            </Link>
            <button>
                Забронировать
            </button>
        </nav>
    )
}

export default NavBar