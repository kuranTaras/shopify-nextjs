import {getProductsInCollection} from "../../lib/shopify";
import ProductList from "../../components/ProductList";
import Hero from "../../components/Hero";
import Head from 'next/head'

export default function Home({products}) {

    return (
        <div>
            <Head>
                <title>
                    Modern eCommerce Course
                </title>
                <meta http-equiv={'Content-Type'} content={'text/html; charset=utf-8'} />
                <meta http-equiv={'Content-Type'} content={'text/html; charset=ISO-8859-1'} />
                <meta name={'description'} content={'Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more.'} />
                <meta property="og:title" content=" Modern eCommerce Course" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://shopify-nextjs-g7i5.vercel.app" />
                <meta property="og:image" content="https://shopify-nextjs-g7i5.vercel.app/share.png" />
                <meta property="og:description"
                      content="Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Modern eCommerce Course" />
            </Head>
            <Hero />
            <ProductList products={products} />
        </div>
    )
}


export async function getStaticProps() {

    const products = await getProductsInCollection()

    return {
        props: {products}
    }
}
