import classes from './CategoryPreview.module.css';
import Image from 'next/image'
import dining from './dining.png';
import living from './living.png';
import bedroom from './bedroom.png';


export function CategoryPreview() {
    return (
        <div className={classes.component}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>
                    Browse The Range
                </h2>
                <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className={classes.categories}>
                    <a href="#">
                        <div className={classes.category_card}>
                            <Image src={dining} className={classes.category_image} alt="Dining" title='Dining' />
                            <h3 className={classes.category_title}>
                                Dining
                            </h3>
                        </div>
                    </a>
                    <a href="#">
                        <div className={classes.category_card}>
                            <Image src={living} className={classes.category_image} alt="Living" title='Living' />
                            <h3 className={classes.category_title}>
                                Living
                            </h3>
                        </div>
                    </a>
                    <a href="#">
                        <div className={classes.category_card}>
                            <Image src={bedroom} className={classes.category_image} alt="Bedroom" title='Bedroom' />
                            <h3 className={classes.category_title}>
                                Bedroom
                            </h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}