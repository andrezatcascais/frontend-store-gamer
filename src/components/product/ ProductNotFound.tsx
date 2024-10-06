import { IconDevicesPcOff } from '@tabler/icons-react' // Import an icon for when no products are found
import Link from 'next/link' // Import Next.js Link for navigation

// Define the interface for the component props, allowing an optional "semBotaVoltar" flag
export interface ProductNotFoundProps {
    noBackButton?: boolean
}

// The component for displaying the "Product Not Found" message
export default function ProductNotFound(props: ProductNotFoundProps) {
    return (
        <div className="flex-1 flex flex-col justify-center items-center text-violet-300">
            {/* Display the icon when no product is found */}
            <IconDevicesPcOff size={180} stroke={0.5} />
            {/* Display the "Product Not Found" message */}
            <span className="text-violet-300 font-light">Product not found</span>
            {/* If "noBackButton" is not set, show a back button */}
            {!props.noBackButton && (
                <Link href="/" className="button bg-violet-700 text-white mt-5">
                    Back
                </Link>
            )}
        </div>
    )
}
