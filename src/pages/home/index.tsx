import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { api } from "../../services/api";
import { useEffect, useState } from "react";

export interface ProductProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
}

export function Home() {

    const { addItemCart } = useContext(CartContext);

    const [products, setProducts] = useState<ProductProps[]>([]);

    useEffect(() => {
        async function getProducts() {
            const response = await api.get("/products");
            setProducts(response.data)
        }

        getProducts();
    }, [])

    function handleAddCartItem(product: ProductProps) {
        addItemCart(product);
    }

    return (
        <div>
            <main className="max-sm:mb-20 w-full max-w-7xl px-4 mx-auto">
                <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Pet Shop</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                    {products.map((product) => (
                        <section key={product.id} className="w-full">
                            <Link to='/'>
                                <img 
                                    src={product.cover}
                                    alt={product.title}
                                />
                            </Link>
                            <p className="font-medium mt-1 mb-2 text-nowrap overflow-x-hidden">{product.title}</p>

                            <div className="flex gap-3 items-center">
                                <strong className="text-zinc-700/90">
                                    {product.price.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </strong>

                                <button className="bg-zinc-900 p-1 rounded cursor-pointer">
                                    <BsCartPlus size={24} color="#FFF" onClick={() => handleAddCartItem(product)}/>
                                </button>
                            </div>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    )
}