import React from 'react';
import classes from './HeaderMenu.module.css';
import Image from 'next/image'
import logo from './logo.png';
import { IconUserExclamation } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import { IconHeart } from '@tabler/icons-react';
import { IconShoppingCart } from '@tabler/icons-react';
import Link from 'next/link';


export function HeaderMenu() {
    return (
        <header>
            <div className={classes.header}>
                <Link href="/">
                    <div className={classes.logo}>
                        <Image src={logo} alt="Furniro" title='Furniro' loading='eager' />
                    </div>
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
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
            </div>
            <nav className={classes.responsive_nav}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}