import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';
import { ArrowPosition, PaginationPosition } from './types';
import cn from 'classnames';
interface CarouselProps {
    children: React.ReactNode[];
    customLeftArrow?: React.ReactNode;
    customRightArrow?: React.ReactNode;
    arrowPosition?: ArrowPosition;
    paginationPosition?: PaginationPosition;
    customPagination?: React.ReactNode;
    autoPlay?: boolean;
    autoPlayDuration?: number;
    infiniteMode?: boolean;
    swipeable?: boolean;
    className?: string;
} 


const Carousel: React.FC<CarouselProps> = ({
  children,
  customLeftArrow,
  customRightArrow,
  arrowPosition = ArrowPosition.INSIDE_MIDDLE,
  paginationPosition = PaginationPosition.OUTSIDE_DOWN,
  customPagination,
  autoPlay = false,
  autoPlayDuration,
  infiniteMode = false,
  swipeable = false,
  className
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = React.Children.count(children);

  useEffect(() => {
    if (autoPlay && autoPlayDuration) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
      }, autoPlayDuration);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayDuration, itemCount]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (infiniteMode ? (prevIndex - 1 + itemCount) % itemCount : Math.max(prevIndex - 1, 0)));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (infiniteMode ? (prevIndex + 1) % itemCount : Math.min(prevIndex + 1, itemCount - 1)));
  };

  const renderArrows = () => (
    <div className={`${styles.arrows} ${styles[ArrowPosition[arrowPosition]]}`}>
      <div onClick={handlePrevClick}>{
        customLeftArrow ? customLeftArrow : <DefaultLeftArrow/>
      }</div>
      <div onClick={handleNextClick}>{
        customRightArrow ? customRightArrow : <DefaultRightArrow/>
      }</div>
    </div>
  );

  const renderPagination = () => (
    <div className={`${styles.pagination} ${styles[PaginationPosition[paginationPosition]]}`}>
      {Array.from({ length: itemCount }).map((_, index) => (
        <div
          key={index}
          className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
          onClick={() => setCurrentIndex(index)}
        >
          {customPagination ? (
            <div className={`${index === currentIndex ? 'active' : ''}`}>
              {customPagination}
            </div>
          ) : (
            <div className={styles.defaultDot}></div>
          )}
        </div>
      ))}
    </div>
  );
  

  const handleSwipe = (e: React.TouchEvent) => {
    if (!swipeable) return;
    // handle swipe logic here
  };

  return (
    <div className={styles.carousel} onTouchEnd={handleSwipe}>
      <div className={ cn(styles.carouselInner, className)}>
        {children[currentIndex]}
      </div>
      {
        renderArrows()
      }
      {renderPagination()}
    </div>
  );
};

const DefaultLeftArrow = () => {
  return(
    <div className='arrow-default'>
      <img src="./assets/icons/arrow left.svg" alt="" />
    </div>
  )
}

const DefaultRightArrow = () => {
  return(
    <div className='arrow-default'>
      <img src="./assets/icons/arrow right.svg" alt="" />
    </div>
  )
}

export default Carousel;
