import Header from './Header' // Import the Header component
import Footer from './Footer' // Import the Footer component

// Interface defining the props that can be passed to the Page component
export interface PageProps {
    children: any // The content to be displayed within the page
    className?: string // Optional additional CSS classes for the page
    noHeader?: boolean // Optional prop to omit the Header
    noFooter?: boolean // Optional prop to omit the Footer
}

// Page component that serves as a layout wrapper
export default function Page(props: PageProps) {
    return (
        <div
            className="flex flex-col min-h-screen" // Flex container that takes the full height of the screen
            style={{ background: 'radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)' }} // Background gradient
        >
            <div
                className="flex-1 flex flex-col w-screen" // Flex container that grows to fill available space
                style={{ background: 'url("/background.png")' }} // Background image
            >
                {!props.noHeader && <Header />} {/* Render the Header component unless noHeader is true */}
                
                <main className={`flex-1 flex flex-col ${props.className ?? ''}`}>
                    {/* Main content area, which expands to fill available space and can take additional classes */}
                    {props.children} {/* Render the children passed to the Page component */}
                </main>
                
                {!props.noFooter && <Footer />} {/* Render the Footer component unless noFooter is true */}
            </div>
        </div>
    )
}
