import classes from './ProductCard.module.css';
import Image, { StaticImageData } from 'next/image';


interface ProductCardProps {
    link: string;
    image: StaticImageData;
    title: string;
    description: string;
    current_price: string;
    old_price: string;
}

export function ProductCard({link, image, title, description, current_price, old_price}: ProductCardProps) {
    return (
        <a href={link}>
            <div className={classes.product_card}>
                <Image src={image} className={classes.product_image} alt={title} title={title} />
                <div className={classes.card_content}>
                    <h3 className={classes.product_title}>
                        {title}
                    </h3>
                    <p className={classes.product_description}>
                        {description}
                    </p>
                    <div className={classes.product_prices}>
                        <span className={classes.current_price}>
                            {current_price}
                        </span>
                        <span className={classes.old_price}>
                            {old_price}
                        </span>
                    </div>
                </div>
            </div>
        </a>
    )
}