import React from 'react';
import classes from './HeaderMenu.module.css';
import Image from 'next/image'
import logo from './logo.png';
import user_icon from './mdi_account-alert-outline.svg'
import search_icon from './akar-icons_search.svg'
import heart_icon from './akar-icons_heart.svg';
import shopping_cart_icon from './ant-design_shopping-cart-outlined.svg'

export function HeaderMenu() {
    return (
        <header className={classes.header}>
            <div className="logo">
                <Image src={logo} alt="Furniro" title='Furniro' loading='eager' />
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className={classes.icons}>
                <ul>
                    <li><Image src={user_icon} alt="Account" title='Account' loading='eager' /></li>
                    <li><Image src={search_icon} alt="Search" title='Search' loading='eager' /></li>
                    <li><Image src={heart_icon} alt="Favorite" title='Favorite' loading='eager' /></li>
                    <li><Image src={shopping_cart_icon} alt="Cart" title='Cart' loading='eager' /></li>
                </ul>
            </div>
        </header>
    )
}