import classes from './PageNotFound.module.css';
import Link from 'next/link';


export function PageNotFound() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h1 className={classes.title}>
                    This Subpage <br /> Doesn't Exist
                </h1>
                <p className={classes.description}>
                    This website is only part of my portfolio. <br /> To contact me visit my main website.
                </p>
                <Link href="https://jeli.pl">
                    <div className={classes.button}>
                        www.jeli.pl
                    </div>
                </Link>
            </div>
        </div>
    )
}