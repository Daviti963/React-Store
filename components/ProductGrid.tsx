import ProductCard from "./ProductCard"
import { products } from "@/data/products"
import styles from "./ProductGrid.module.css"
export default function ProductGrid() {
    return (
        <ul className={styles.products}>
            {products.map((item) => <ProductCard key={item.id} product={item}/>)}
        </ul>
    )
}