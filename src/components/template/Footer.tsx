import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconBrandYoutube,
} from '@tabler/icons-react' // Import brand icons for social media platforms from the Tabler Icons library
import Logo from '../shared/Logo' // Import the custom Logo component

// Footer component for the website
export default function Footer() {
    return (
        <footer className="flex flex-col bg-black/30 text-zinc-400 mt-10">
            {/* Footer container with a semi-transparent black background and grayish text */}
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
            {/* Horizontal gradient line for visual separation */}
            
            <div className="container flex flex-col py-10 gap-10">
                {/* Main container for the footer content with padding and spacing */}
                
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    {/* Content section split into columns for different info sections, responsive for small (centered) and medium+ (left-aligned) screens */}
                    
                    <Logo /> {/* Custom Logo component */}
                    
                    {/* 'About' section */}
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">About</span>
                        <span className="text-sm">Our Story</span>
                        <span className="text-sm">Privacy Policy</span>
                        <span className="text-sm">Terms of Use</span>
                    </div>
                    
                    {/* 'Contact' section */}
                    <div className="flex flex-col gap-1">
                        <span className="text-2xl font-bold text-zinc-200 pb-2">Contact</span>
                        <span className="text-sm">support@gam3r.store</span>
                        {/* WhatsApp contact */}
                        <div className="text-sm flex items-center gap-2 justify-center md:justify-start">
                            <IconBrandWhatsapp size={20} className="text-green-500" />
                            <span>WhatsApp</span>
                        </div>
                    </div>
                </div>

                {/* Social media icons and footer disclaimer */}
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    {/* Social media section */}
                    <div className="flex gap-2 ">
                        <IconBrandYoutube size={28} stroke={1} /> {/* YouTube icon */}
                        <IconBrandInstagram size={28} stroke={1} /> {/* Instagram icon */}
                        <IconBrandFacebook size={28} stroke={1} /> {/* Facebook icon */}
                        <IconBrandLinkedin size={28} stroke={1} /> {/* LinkedIn icon */}
                    </div>

                    {/* Footer credits */}
                    <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm text-zinc-500">
                        <div className="flex gap-1.5">
                            <span>Made with</span>
                            <span>❤️</span>
                            <span>in {new Date().getFullYear()}</span> {/* Current year dynamically rendered */}
                        </div>
                        <span className="hidden md:inline-block">-</span>
                        <span>All rights reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}