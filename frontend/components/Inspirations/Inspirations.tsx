import classes from './Inspirations.module.css';
import { Slider } from './slider/Slider';
import Link from 'next/link';


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
                    <Link href="/inspirations">
                        <div className={classes.button}>
                            Explore More
                        </div>
                    </Link>
                </div>
            </div>
            <div className={classes.slider_wrapper}>
                <Slider />
            </div>
        </div>
    )
}