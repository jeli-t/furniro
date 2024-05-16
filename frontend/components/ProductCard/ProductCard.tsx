import classes from './ProductCard.module.css';
import Image, { StaticImageData } from 'next/image';
import { IconShare } from '@tabler/icons-react';
import { IconArrowsRightLeft } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';


interface ProductCardProps {
    link: string;
    image: StaticImageData;
    title: string;
    description: string;
    current_price: string;
    old_price: string;
    badge: string;
}

export function ProductCard({link, image, title, description, current_price, old_price, badge}: ProductCardProps) {
    return (
        <>
            <div className={classes.product_card}>
                <a href={link}>
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
                </a>
                {badge !== '' && (
                    <div className={classes.badge} style={{background: badge === "New" ? '#2EC1AC' : '#E97171'}}>
                        {badge}
                    </div>
                )}
                <div className={classes.overlay}>
                    <div className={classes.button}>
                        Add to cart
                    </div>
                    <div className={classes.links}>
                        <a href="#" className={classes.link}>
                            <IconShare stroke={2} size={18} fill='white'/>
                            Share
                        </a>
                        <a href="#" className={classes.link}>
                            <IconArrowsRightLeft stroke={3} size={18} />
                            Compare
                        </a>
                        <a href="#" className={classes.link}>
                            <IconHeart stroke={3} size={18} />
                            Like
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}