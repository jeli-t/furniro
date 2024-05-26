import classes from './PageNotFound.module.css';


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
                <a href="https://jeli.pl">
                    <div className={classes.button}>
                        www.jeli.pl
                    </div>
                </a>
            </div>
        </div>
    )
}