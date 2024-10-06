import Logo from '../shared/Logo' // Importing the Logo component from the shared folder
import CardIcon from '../shared/CardIcon' // Importing the Cart Icon component from the shared folder
import Link from 'next/link' // Importing the Link component from Next.js for client-side navigation
// import useCarrinho from '@/data/hooks/useCarrinho' // Commented out custom hook for managing the cart (could be used to track cart state)

export default function Header() { // Function for the Header component (translated "Cabecalho" to "Header")
    const qtyItens = 0 // Variable for the number of items in the cart (hardcoded to 0 for now)
    // const { qtdeItens } = useCarrinho() // Destructuring to get the number of cart items from the useCarrinho hook (commented out)

    return (
        <div
            className="flex flex-col h-20" // A flex container with column layout, height set to 20 (unitless, likely interpreted as "rem" in Tailwind)
            style={{
                background: 'linear-gradient(90deg, #14002D 0%, #420093 50%, #14002D 100%)', // Gradient background from dark purple to lighter shade and back to dark
            }}
        >
            <div className="flex-1 container flex flex-col justify-center">
                {/* A flex container that centers its content */}
                <div className="flex justify-between items-center">
                    {/* Flex container that spaces elements evenly with items aligned at the center */}
                    <Logo /> {/* Render the Logo component */}
                    <Link href="/checkout/carrinho"> {/* Link to the checkout/cart page */}
                     <CardIcon qtdeItens={qtyItens} />   {/*  Render the cart icon with the number of items passed as a prop */}
                    </Link>
                </div>
            </div>
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
            {/* Decorative gradient line under the header */}
        </div>
    )
}
