import React, {useContext} from 'react';
import Link from "next/link";
import {CartContext} from "../context/shopContext";
import MiniCart from "./MiniCart";

const Nav = () => {

    const {cart, cartOpen, setCartOpen} = useContext(CartContext)


    let cartQuantity = 0

    cart.map(item => {
        return (cartQuantity += item?.variantQuantity)
    })

    return (
        <header className={'border-b sticky top-0 z-20 bg-white'}>
            <div className={'flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl'}>
                <Link href={'/'} className={'cursor-pointer'} passHref>
                    <span className={'text-lg pt-1 font-bold'}>
                        Shopify + Next.js
                    </span>
                </Link>
                <button onClick={() => setCartOpen(!cartOpen)} className={'text-mb font-bold cursor-pointer'}>
                    Cart ({cartQuantity})
                </button>
                <MiniCart cart={cart} />
            </div>
        </header>
    );
};

export default Nav;