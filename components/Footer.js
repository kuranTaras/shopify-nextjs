import React from 'react';
import Link from "next/link";

const navigation = [
    {name: 'About', href: '#'},
    {name: 'Jobs', href: '#'},
    {name: 'Shop', href: '#'},
    {name: 'Terms and Conditions', href: '#'}
]

const Footer = () => {
    return (
        <footer className={'bg-white'}>
            <div className={'max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'}>
               <nav className={'flex flex-wrap justify-center'}>
                   {
                       navigation.map((item, index) => (
                           <div key={index} className={'px-6 py-2'}>
                               <Link
                                   href={item.href}
                                   className={'text-gray-500 hover:text-gray-500'}
                               >
                                   {item.name}
                               </Link>
                           </div>
                       ))
                   }
               </nav>
                <p className={'mt-8 text-center text-gray-400'}>
                    &copy;  2023 Learn Shopify Next.js Course, All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;