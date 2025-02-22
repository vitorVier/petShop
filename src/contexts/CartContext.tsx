import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home";

interface CartContextData {
    cart: CartProps[];
    addItemCart: (produto: ProductProps) => void;
}

interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);

    function addItemCart(produto: ProductProps) {
        console.log(produto.id)
    }

    return (
        <CartContext.Provider value={{ 
            cart,
            addItemCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;