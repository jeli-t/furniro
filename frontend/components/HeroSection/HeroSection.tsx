import classes from './HeroSection.module.css';
import Link from 'next/link';


export function HeroSection() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <span className={classes.subtitle}>
                    New Arrival
                </span>
                <h1 className={classes.title}>
                    Discover Our <br /> New Collection
                </h1>
                <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
                <Link href="/new-arrival">
                    <div className={classes.button}>
                        BUY NOW
                    </div>
                </Link>
            </div>
        </div>
    )
}