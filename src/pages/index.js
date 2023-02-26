import {getProductsInCollection} from "../../lib/shopify";
import ProductList from "../../components/ProductList";

export default function Home({products}) {

  return (
      <h1 className="text-xl">
        <ProductList products={products} />
      </h1>
  )
}


export async function getStaticProps() {

    const products = await getProductsInCollection()

    return {
        props: {products}
    }
}
