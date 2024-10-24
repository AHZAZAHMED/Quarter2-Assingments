import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-black">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
            <div>
                <Link href="/" className="text-white">Logo</Link>
            </div>
            <div className="space-x-4 ml-4 flex items-center">
                <Link href="/" className="text-white hover:text-black hover:bg-white rounded p-2">Home</Link>
                <Link href="AboutUs" className="text-white hover:text-black hover:bg-white rounded p-2">AboutUs</Link>
                <Link href="Blog" className="text-white hover:text-black hover:bg-white rounded p-2">Blog</Link>
                <Link href="Products" className="text-white hover:text-black hover:bg-white rounded p-2">Product</Link>
                <Link href="ContactMe" className="text-white hover:text-black hover:bg-white rounded p-2">Contact</Link>
            </div>

            </div>
        
        </nav>
    );
}