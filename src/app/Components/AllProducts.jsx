import { ProductCard } from "./ProductCard";

export const AllProducts = async () => {
    const res = await fetch('http://localhost:4000/products');
    const products = await res.json();
    
    return(
        <div className="grid three">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
    </div>
    )
}