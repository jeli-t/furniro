import classes from './PageNotFound.module.css';
import Link from 'next/link';


interface PageNotFoundProps {
    title1: string;
    title2: string;
    description1: string;
    description2: string;
}

export function PageNotFound({title1, title2, description1, description2}: PageNotFoundProps) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h1 className={classes.title}>
                    {title1} <br /> {title2}
                </h1>
                <p className={classes.description}>
                    {description1} <br /> {description2}
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