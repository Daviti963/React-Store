import ProductCard from "./ProductCard";
import styles from './ProductGrid.module.css';
import { Product } from "@/types/type";

interface Props {
    products: Product[]
    onButtonClick: (product: Product) => void
}


export default function ProductGrid({ products, onButtonClick }: Props) {
    return (
        <ul className={styles.ul}>
            {products.map(item => (
                <ProductCard key={item.id} product={item} onButtonClick={onButtonClick} />
            ))}
        </ul>
    )
}