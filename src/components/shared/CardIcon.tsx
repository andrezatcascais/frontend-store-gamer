import { IconShoppingCart } from '@tabler/icons-react' // Import the shopping cart icon from the Tabler Icons library

// Define the interface (or type) for the props that will be passed into the CartIcon component
export interface CartIconProps {
    qtdeItens: number // This prop represents the number of items in the cart
}

// The CartIcon component, which displays the shopping cart icon along with the item count
export default function CartIcon(props: CartIconProps) {
    return (
        <div className="flex justify-center items-center rounded-full w-14 h-14 bg-violet-dark relative">
            {/* A flex container that centers its children, which is the cart icon */}
            <IconShoppingCart size={30} stroke={1.3} /> 
            {/* Render the shopping cart icon with size 30 and stroke thickness 1.3 */}
            
            {/* The item count bubble */}
            <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {props.qtdeItens ?? 0} 
                {/* Display the number of items passed in through the prop. If undefined, default to 0 */}
            </div>
        </div>
    )
}
