import React from 'react';
import Link from 'next/link'

const Hero = () => {
    return (
        <div className={'my-40 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center'}>
            <h1 className={'font-extrabold text-gray-900'}>
                <p className={'text-xl sm:text-3xl md:text-4xl'}>
                    Shopify + Next.js + Tailwind CSS:
                </p>
                <p className={'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl'}>
                    Modern eCommerce
                </p>
            </h1>
            <h2 className={'mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl'}>
                Build the eCommerce Revolution
            </h2>
            <div className={'mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8'}>
                <Link
                    className={'inline-flex items-center justify-center h-12 px-6 mr-6 font-medium py-3 border-transparent rounded-md text-white bg-gray-900 hover:bg-gray-800'}
                    href={'#'}
                >
                    Enroll Now
                </Link>
                <Link
                    href={'#'}
                    className={'inline-flex items-center font-semibold text-gray-900 hover:text-gray-800'}
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default Hero;