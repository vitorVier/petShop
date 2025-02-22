import { Link } from "react-router";

import { FiShoppingCart } from "react-icons/fi"

export function Header() {
    return (
        <header className="w-full px-1">
            <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto bg-zinc-900 text-white">

                <Link to='/'>
                    <h1>Header</h1>
                </Link>
                
                <div>
                    <Link to='/cart' className="relative">
                        <FiShoppingCart size={24} color="#FEFEFE"></FiShoppingCart>
                    </Link>
                </div>
            </nav>
        </header>
    )
}