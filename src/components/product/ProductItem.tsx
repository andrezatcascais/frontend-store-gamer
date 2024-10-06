'use client'
import { Currency, Product } from '@/core'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import ReviewRating from '../shared/ReviewRating';

export interface ProductItemProps {
    product: Product
}

export default function ProductItem(props: ProductItemProps) {
    const { product } = props
    return (
        <Link
            href={`/product/${props.product.id}`}
            className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
        >
            <div className="absolute flex justify-end top-2.5 right-2.5">
                <ReviewRating rating={props.product.rating} />
            </div>
            <div className="w-full h-48 relative">
                <Image
                    src={product.image}
                    fill
                    className="object-contain"
                    alt="Product Image"
                />
            </div>
            <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
                <span className="text-lg font-semibold">{product.name}</span>
                <div className="self-start text-sm border-b border-dashed">
                    {product.specifications.highlight}
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                        from {Currency.format(product.basePrice)}
                    </span>
                    <span className="text-xl font-semibold text-emerald-400">
                        for {Currency.format(product.promotionalPrice)}
                    </span>
                    {/* <span className="text-zinc-400 text-xs">
                        up to {installment.installmentsQty}x of{' '}
                        {Currency.format(installment.installmentValue)}
                    </span> */}
                </div>
                <button
                    className="
                      flex justify-center items-center gap-2 h-8
                      bg-violet-700 hover:border-2 border-emerald-500 rounded-full
                    "
                    onClick={(e) => {
                        e.preventDefault()
                        console.log('Add to cart')
                        // addItem(props.product)
                    }}
                >
                    <IconShoppingCartPlus size={20} />
                    <span>Add</span>
                </button>
            </div>
        </Link>
    )
}
