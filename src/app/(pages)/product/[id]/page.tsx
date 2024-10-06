import ProductNotFound from "@/components/product/ ProductNotFound";
import ProductInfo from "@/components/product/ProductInfo";
import ProductTitle from "@/components/product/ProductTitle";
import PurchaseBanner from "@/components/product/PurchaseBanner";
import products from "@/core/constants/products";

export default function ProductPage(props: any) {
    const id = +props.params.id;
    const product = products.find((product) => product.id === id);
    //const productTest = false;
    return product ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <ProductTitle product={product} />
                <ProductInfo product={product} />
                <PurchaseBanner product={product} />
            </div>    
        </div>
    ) : (
        <ProductNotFound /> // in this case, it has the back button
    )
}