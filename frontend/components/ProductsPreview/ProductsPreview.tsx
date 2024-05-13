import classes from './ProductsPreview.module.css';
import Image from 'next/image';
import syltherine from './img/syltherine.png';
import leviosa from './img/leviosa.png';
import lolito from './img/lolito.png';
import respira from './img/respira.png';
import grifo from './img/grifo.png';
import muggo from './img/muggo.png';
import pingky from './img/pingky.png';
import potty from './img/potty.png';


export function ProductsPreview() {
    return (
        <div className={classes.component}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>
                    Our Products
                </h2>
                <div className={classes.grid}>
                    <a href="#">
                        <div className={classes.product_card}>
                            <Image src={syltherine} className={classes.product_image} alt="syltherine" title='syltherine' />
                            <div className={classes.card_content}>
                                <h3 className={classes.product_title}>
                                    Syltherine
                                </h3>
                                <p className={classes.product_description}>
                                    Stylish cafe chair
                                </p>
                                <div className={classes.product_prices}>
                                    <span className={classes.current_price}>
                                        Rp 2.500.000
                                    </span>
                                    <span className={classes.old_price}>
                                        Rp 3.500.000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className={classes.product_card}>
                            <Image src={leviosa} className={classes.product_image} alt="leviosa" title='leviosa' />
                            <div className={classes.card_content}>
                                <h3 className={classes.product_title}>
                                    Leviosa
                                </h3>
                                <p className={classes.product_description}>
                                    Stylish cafe chair
                                </p>
                                <div className={classes.product_prices}>
                                    <span className={classes.current_price}>
                                        Rp 2.500.000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className={classes.product_card}>
                            <Image src={lolito} className={classes.product_image} alt="lolito" title='lolito' />
                            <div className={classes.card_content}>
                                <h3 className={classes.product_title}>
                                    Lolito
                                </h3>
                                <p className={classes.product_description}>
                                    Luxury big sofa
                                </p>
                                <div className={classes.product_prices}>
                                    <span className={classes.current_price}>
                                        Rp 7.000.000
                                    </span>
                                    <span className={classes.old_price}>
                                        Rp 14.000.000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className={classes.product_card}>
                            <Image src={respira} className={classes.product_image} alt="respira" title='respira' />
                            <div className={classes.card_content}>
                                <h3 className={classes.product_title}>
                                    Respira
                                </h3>
                                <p className={classes.product_description}>
                                    Outdoor bar table and stool
                                </p>
                                <div className={classes.product_prices}>
                                    <span className={classes.current_price}>
                                        Rp 500.000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={classes.grid}>
                    <a href="#">
                        <div className={classes.product_card}>
                            <Image src={grifo} className={classes.product_image} alt="grifo" title='grifo' />
                            <div className={classes.card_content}>
                                <h3 className={classes.product_title}>
                                    Grifo
                                </h3>
                                <p className={classes.product_description}>
                                    Night lamp
                                </p>
                                <div className={classes.product_prices}>
                                    <span className={classes.current_price}>
                                        Rp 1.500.000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className={classes.product_card}>
                            <Image src={muggo} className={classes.product_image} alt="muggo" title='muggo' />
                            <div className={classes.card_content}>
                                <h3 className={classes.product_title}>
                                    Muggo
                                </h3>
                                <p className={classes.product_description}>
                                    Small mug
                                </p>
                                <div className={classes.product_prices}>
                                    <span className={classes.current_price}>
                                        Rp 150.000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className={classes.product_card}>
                            <Image src={pingky} className={classes.product_image} alt="pingky" title='pingky' />
                            <div className={classes.card_content}>
                                <h3 className={classes.product_title}>
                                    Pingky
                                </h3>
                                <p className={classes.product_description}>
                                    Cute bed set
                                </p>
                                <div className={classes.product_prices}>
                                    <span className={classes.current_price}>
                                        Rp 7.000.000
                                    </span>
                                    <span className={classes.old_price}>
                                        Rp 14.000.000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className={classes.product_card}>
                            <Image src={potty} className={classes.product_image} alt="potty" title='potty' />
                            <div className={classes.card_content}>
                                <h3 className={classes.product_title}>
                                    Potty
                                </h3>
                                <p className={classes.product_description}>
                                    Minimalist flower pot
                                </p>
                                <div className={classes.product_prices}>
                                    <span className={classes.current_price}>
                                        Rp 500.000
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={classes.button}>
                    Show More
                </div>
            </div>
        </div>
    )
}