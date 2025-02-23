import { Link } from "react-router";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { FiShoppingCart } from "react-icons/fi";

export function Header() {

    const { cartAmount } = useContext(CartContext);

    return (
        <header className="w-full">
            <nav className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto bg-zinc-900 text-white">

                <Link to='/' className="font-bold text-2xl">
                    <h1>Pet Shop Logo</h1>
                </Link>
                
                <div>
                    <Link to='/cart' className="relative">
                        <FiShoppingCart size={24} color="#FEFEFE"></FiShoppingCart>

                        {cartAmount > 0 && (
                            <span className="absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                                {cartAmount}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    )
}