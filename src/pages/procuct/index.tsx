import { useParams } from "react-router"

export function Product() {

    const { id } = useParams();

    return (
        <div className="w-full max-w-7xl h-14 flex items-center justify-between px-5 mx-auto bg-stone-100 text-black">
            <h1>Product {id}</h1>
        </div>
    )
}