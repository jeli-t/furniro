import React from 'react';
import classes from './Footer.module.css';


export function Footer() {
    return (
        <div className={classes.component}>
            <div className={classes.wrapper}>
                <div className={classes.info}>
                    <h4 className={classes.title}>
                        Funiro.
                    </h4>
                    <p className={classes.address}>
                        400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
                    </p>
                </div>
                <div className={classes.links}>
                    <h4 className={classes.section_title}>
                        Links
                    </h4>
                    <nav className={classes.nav}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.help}>
                    <h4 className={classes.section_title}>
                        Help
                    </h4>
                    <nav className={classes.nav}>
                        <ul>
                            <li><a href="#">Payment Options</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Privacy Policies</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={classes.newsletter}>
                    <h4 className={classes.section_title}>
                        Newsletter
                    </h4>
                    <form action="/#" method="POST" className={classes.form}>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email Here" />
                        <input type="submit" value="SUBSCRIBE" />
                    </form>
                </div>
            </div>
            <div className={classes.copyrights}>
                2023 furino. All rights reverved
            </div>
        </div>
    )
}