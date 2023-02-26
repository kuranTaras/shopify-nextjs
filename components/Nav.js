import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <header className={'border-b sticky top-0 z-20 bg-white'}>
            <div className={'flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl'}>
                <Link href={'/'} className={'cursor-pointer'} passHref>
                    <span className={'text-lg pt-1 font-bold'}>
                        Shopify + Next.js
                    </span>
                </Link>
                <Link href={''} className={'text-mb font-bold cursor-pointer'}>
                    Cart
                </Link>
            </div>
        </header>
    );
};

export default Nav;