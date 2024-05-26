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
import { ProductCard } from '@/components/ProductCard/ProductCard';
import Link from 'next/link';


export function ProductsPreview() {
    return (
        <div className={classes.component}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>
                    Our Products
                </h2>
                <div className={classes.grid}>
                    <ProductCard link="/product" image={syltherine} title='Syltherine' description='Stylish cafe chair' current_price='Rp 2.500.000' old_price='Rp 3.500.000' badge="-30%" />
                    <ProductCard link="/product" image={leviosa} title='Leviosa' description='Stylish cafe chair' current_price='Rp 2.500.000' old_price='' badge="" />
                    <ProductCard link="/product" image={lolito} title='Lolito' description='Luxury big sofa' current_price='Rp 7.000.000' old_price='Rp 14.000.000' badge="-50%" />
                    <ProductCard link="/product" image={respira} title='Respira' description='Outdoor bar table and stool' current_price='Rp 500.000' old_price='' badge="New" />
                </div>
                <div className={classes.grid}>
                    <ProductCard link="/product" image={grifo} title='Grifo' description='Night lamp' current_price='Rp 1.500.000' old_price='' badge="" />
                    <ProductCard link="/product" image={muggo} title='Muggo' description='Small mug' current_price='Rp 150.000' old_price='' badge="New" />
                    <ProductCard link="/product" image={pingky} title='Pingky' description='Cute bed set' current_price='Rp 7.000.000' old_price='Rp 14.000.000' badge="-50%" />
                    <ProductCard link="/product" image={potty} title='Potty' description='Minimalist flower pot' current_price='Rp 500.000' old_price='' badge="New" />
                </div>
                <Link href="/shop">
                    <div className={classes.button}>
                        Show More
                    </div>
                </Link>
            </div>
        </div>
    )
}