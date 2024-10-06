'use client'
import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react'
import { Currency, Product } from '@/core'
// import useCart from '@/data/hooks/useCart'
import useInstallments from '@/data/hooks/useInstallmentCalculation'
import { useRouter } from 'next/navigation'

export interface PurchaseBannerProps {
    product: Product
}

export default function PurchaseBanner(props: PurchaseBannerProps) {
    const router = useRouter();
    const { product } = props;
    //const { addItem } = useCart();
     const installments = useInstallments(product.promotionalPrice)

    return (
        <div className="flex">
            <div className="flex flex-col border-r border-zinc-500 pr-5">
                <div className="line-through text-zinc-400">from R$ {product?.basePrice}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base text-zinc-300">for</span>{' '}
                    <span className="text-emerald-500">R$ {product?.promotionalPrice}</span>{' '}
                    <span className="text-base text-zinc-300">cash</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
                <span className="text-base text-zinc-300">{installments.installmentAmount}x of</span>
                {Currency.format(installments.installmentAmount)}{' '}
            </div>
            <div className="flex gap-2 items-center">
                <button
                    className="flex-1 button bg-pink-600"
                    onClick={() => {}}
                    // onClick={() => addItem(product)}
                >
                    <IconShoppingCart size={20} />
                    <span>Add</span>
                </button>
                <button
                    className="flex-1 button bg-violet-700"
                    onClick={() => {
                        // addItem(product)
                        router.push('/checkout/payment')
                    }}
                >
                    <IconCreditCard size={20} />
                    <span>Buy</span>
                </button>
            </div>
        </div>
    )
}
