import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router";

export function Cart() {

    const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);

    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <h1 className="font-medium text-2xl text-center my-4">My Cart</h1>

            {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center">
                    <p className="font-medium">Ops, seu carrinho está vazio!</p>

                    <Link to='/' className="bg-sky-600 my-3 p-1 px-3 text-white font-medium rounded">
                        Voltar para a página inicial
                    </Link>
                </div>
            )}

            {cart.map((item) => (
                <section key={item.id} className="flex items-center justify-between border-b2 border-gray-300">
                    <img 
                        src={item.cover} 
                        alt={item.title} 
                        className="w-28 cursor-pointer"
                    />

                    <strong>
                        {item.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                    
                    <div className="flex items-center justify-center gap-3">
                        <button 
                            className="bg-red-600 rounded px-2 text-white font-medium flex items-center justify-center cursor-pointer"
                            onClick={() => removeItemCart(item)}
                        >    
                            - 
                        </button>
                        
                        <span className="font-medium">{item.amount}</span>
                        
                        <button 
                            className="bg-green-600 rounded px-2 text-white font-medium flex items-center justify-center cursor-pointer"
                            onClick={() => addItemCart(item)}
                        >
                            +
                        </button>
                    </div>

                    <strong className="float-right max-sm:text-sm">
                        Sub-Total: {item.total.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </strong>
                </section>
            ))}

            {cart.length !== 0 && (
                <p className="font-bold mt-4">Total: {total}</p>
            )}
        </div>
    )
}