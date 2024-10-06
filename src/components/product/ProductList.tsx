'use client' // Indicates that this is a client-side component
import { products } from '@/core' // Imports the list of products from the core module
// import useProdutos from '@/data/hooks/useProdutos' // This hook could be used to fetch products from a backend
import ProductItem from './ProductItem' // Imports the product item component
import ProductNotFound from './ ProductNotFound' // Imports the "Product Not Found" component

export default function ListProducts() {
    // const { produtos } = useProdutos() // Optionally, products could be fetched using a custom hook
    return products.length ? ( // If there are products available
        <div
            className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
            "
        >
            {products.map((product) => (
                <ProductItem product={product} key={product.id} /> // Render each product as a ProdutoItem
            ))}
        </div>
    ) : (
        <ProductNotFound noBackButton /> // If no products are found, display the "Product Not Found" component
    )
}
