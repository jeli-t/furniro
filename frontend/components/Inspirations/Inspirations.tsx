import classes from './Inspirations.module.css';
import Image from 'next/image';
import img1 from './slider/img1.png';
import img2 from './slider/img2.png';
import img3 from './slider/img3.png';
import { IconArrowRight } from '@tabler/icons-react';
import { IconChevronRight } from '@tabler/icons-react';


export function Inspirations() {
    return (
        <div className={classes.component}>
            <div className={classes.wrapper}>
                <div className={classes.content}>
                    <h3 className={classes.title}>
                        50+ Beautiful rooms <br /> inspiration
                    </h3>
                    <p className={classes.description}>
                        Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you
                    </p>
                    <a href="#">
                        <div className={classes.button}>
                            Explore More
                        </div>
                    </a>
                </div>
                <div className={classes.slider_wrapper}>
                    <div className={classes.slider}>
                        <div className={classes.current}>
                            <Image src={img1} className={classes.current_image} alt={""} title={""} />
                            <div className={classes.slide_banner}>
                                <div className={classes.banner_content}>
                                    <p className={classes.description}>
                                        01 —— Bed Room
                                    </p>
                                    <h4 className={classes.slide_title}>
                                        Inner Peace
                                    </h4>
                                </div>
                                <a href="#" className={classes.link}>
                                    <IconArrowRight stroke={2} size={24} />
                                </a>
                            </div>
                        </div>
                        <div className={classes.queue}>
                            <div className={classes.second_image}>
                                <Image src={img2} className={classes.queue_image} alt={""} title={""} />
                            </div>
                            <div className={classes.third_image}>
                                <Image src={img3} className={classes.queue_image} alt={""} title={""} />
                            </div>
                            <div className={classes.dots}>
                                <div className={classes.dot}></div>
                                <div className={classes.dot}></div>
                                <div className={classes.dot}></div>
                                <div className={classes.dot}></div>
                            </div>
                            <div className={classes.arrow}>
                                <IconChevronRight stroke={2} size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}