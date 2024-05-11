import React from 'react';
import classes from './HeaderMenu.module.css';
import Image from 'next/image'
import logo from './logo.png';
import { IconUserExclamation } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';
import { IconShoppingCart } from '@tabler/icons-react';


export function HeaderMenu() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
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
                    <li><IconUserExclamation className={classes.icon} /></li>
                    <li><IconSearch className={classes.icon} /></li>
                    <li><IconHeart className={classes.icon} /></li>
                    <li><IconShoppingCart className={classes.icon} /></li>
                </ul>
            </div>
        </header>
    )
}