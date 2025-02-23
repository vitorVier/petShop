import { createContext, ReactNode, useState } from "react";
import { ProductProps } from "../pages/home";

interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    total: string;
    addItemCart: (produto: ProductProps) => void;
}

interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);
    const [total, setTotal] = useState("");

    function addItemCart(newItem: ProductProps) {
        const indexProduct = cart.findIndex(item => item.id === newItem.id);

        if(indexProduct !== -1) {
            let cartList = cart;

            cartList[indexProduct].amount = cartList[indexProduct].amount + 1;
            setCart(cartList);            

            // Calcula o total do carrinho
            cartList[indexProduct].total = cartList[indexProduct].amount * cartList[indexProduct].price;
            totalResultCart(cartList)
            return;
        }

        // Adiciona item a lista
        let data = {
            ...newItem,
            amount: 1,  
            total: newItem.price 
        }

        setCart(products => [...products, data]);
        totalResultCart([...cart, data])
        console.log(cart)
    }

    function totalResultCart(items: CartProps[]) {
        let myCart = items;
        let result = myCart.reduce((acc, obj) => { return acc + obj.total}, 0);
        const resultFormated = result.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
        setTotal(resultFormated);
    }

    return (
        <CartContext.Provider value={{ 
            cart,
            cartAmount: cart.length,
            addItemCart,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;