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


export function ProductsPreview() {
    return (
        <div className={classes.component}>
            <div className={classes.wrapper}>
                <h2 className={classes.title}>
                    Our Products
                </h2>
                <div className={classes.grid}>
                    <ProductCard link="#" image={syltherine} title='Syltherine' description='Stylish cafe chair' current_price='Rp 2.500.000' old_price='Rp 3.500.000' />
                    <ProductCard link="#" image={leviosa} title='Leviosa' description='Stylish cafe chair' current_price='Rp 2.500.000' old_price=''/>
                    <ProductCard link="#" image={lolito} title='Lolito' description='Luxury big sofa' current_price='Rp 7.000.000' old_price='Rp 14.000.000'/>
                    <ProductCard link="#" image={respira} title='Respira' description='Outdoor bar table and stool' current_price='Rp 500.000' old_price=''/>
                </div>
                <div className={classes.grid}>
                    <ProductCard link="#" image={grifo} title='Grifo' description='Night lamp' current_price='Rp 1.500.000' old_price='' />
                    <ProductCard link="#" image={muggo} title='Muggo' description='Small mug' current_price='Rp 150.000' old_price=''/>
                    <ProductCard link="#" image={pingky} title='Pingky' description='Cute bed set' current_price='Rp 7.000.000' old_price='Rp 14.000.000'/>
                    <ProductCard link="#" image={potty} title='Potty' description='Minimalist flower pot' current_price='Rp 500.000' old_price=''/>
                </div>
                <a href="">
                    <div className={classes.button}>
                        Show More
                    </div>
                </a>
            </div>
        </div>
    )
}