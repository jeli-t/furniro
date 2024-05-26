"use client";
import classes from './Slider.module.css';
import Image from 'next/image';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import { IconArrowRight } from '@tabler/icons-react';
import { IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';


export function Slider() {
    const slides = [
        { img: img1, title: "Inner Peace", description: "01 — Bed Room" },
        { img: img2, title: "Family Space", description: "02 — Dining Room" },
        { img: img3, title: "Heaven Dream", description: "03 — Bed Room" },
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(1);
    const [thirdIndex, setThirdIndex] = useState(2);

    const goToNext = () => {
        if (currentIndex == 0) {
            setCurrentIndex(1);
            setSecondIndex(2);
            setThirdIndex(0);
        } else if (currentIndex == 1) {
            setCurrentIndex(2);
            setSecondIndex(0);
            setThirdIndex(1);
        } else if (currentIndex == 2) {
            setCurrentIndex(0);
            setSecondIndex(1);
            setThirdIndex(2);
        }
    };

    const goToSlide = (slideIndex:any) => {
        setCurrentIndex(slideIndex);
        if (slideIndex == 0) {
            setSecondIndex(1);
            setThirdIndex(2);
        } else if (slideIndex == 1) {
            setSecondIndex(2);
            setThirdIndex(0);
        } else if (slideIndex == 2) {
            setSecondIndex(0);
            setThirdIndex(1);
        }
    };

    return (
        <div className={classes.slider}>
            <div className={classes.current}>
                <Image src={slides[currentIndex].img} className={classes.current_image} alt={""} title={""} />
                <div className={classes.slide_banner}>
                    <div className={classes.banner_content}>
                        <p className={classes.description}>
                            {slides[currentIndex].description}
                        </p>
                        <h4 className={classes.slide_title}>
                            {slides[currentIndex].title}
                        </h4>
                    </div>
                    <a href="#" className={classes.link}>
                        <IconArrowRight stroke={2} size={24} />
                    </a>
                </div>
            </div>
            <div className={classes.queue}>
                <div className={classes.second_image}>
                    <Image src={slides[secondIndex].img} className={classes.queue_image} alt={""} title={""} />
                </div>
                <div className={classes.third_image}>
                    <Image src={slides[thirdIndex].img} className={classes.queue_image} alt={""} title={""} />
                </div>
                <div className={classes.dots}>
                    <div className={classes.dot} onClick={() => goToSlide(0)}></div>
                    <div className={classes.dot} onClick={() => goToSlide(1)}></div>
                    <div className={classes.dot} onClick={() => goToSlide(2)}></div>
                </div>
                <div className={classes.arrow} onClick={goToNext}>
                    <IconChevronRight stroke={2} size={24} />
                </div>
            </div>
        </div>
    )
}