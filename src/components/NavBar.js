import { Nanum_Gothic_Coding } from "next/font/google";
import Link from "next/link";
import React from "react";
import Logo from './Logo';

const NavBar = () => {
    return (
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/blog'>Blog</Link>
                <Link href='/contact'>Contact</Link>
            </nav>
            <Logo />
            <nav>
                <Link href='/' target={"_blank"}>L</Link>
                <Link href='/' target={"_blank"}>G</Link>
            </nav>

            </header>
    );
};

export default NavBar;