'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import { Product } from "@/types/type";

import ProductGrid from "@/components/ProductGrid";
export default function Home() {

  const [cart, setCart] = useState<Product[]>([]);
  const [availableProducts, setAvailableProducts] = useState(products);
  const [counter, setCounter] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [isCartVisible, setIsCartVisible] = useState(false);


  useEffect(() => {
    if (counter === 0) {
      setIsCartVisible(false);
    }
  }, [counter]);

  const addToCart = (product: Product): void => {
    setCart([...cart, product]);
    setAvailableProducts(availableProducts.filter(item => item.id !== product.id));
    setCounter(counter + 1);
  }

  const removeFromCart = (product: Product): void => {
    setAvailableProducts([...availableProducts, product]);
    setCart(cart.filter(item => item.id !== product.id));
    setCounter(counter - 1);
  }

  const filteredProducts = availableProducts
    .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    .sort((a, b) => b.rating - a.rating);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value);

  const classToggle = (): void => {
    if (counter > 0) {
      setIsCartVisible(!isCartVisible);
    }
  }

  return (
    <main className={styles.container}>

      <div>

        <div className={styles.header}>
          <h1>Popular Products</h1>
          <input type="text"
            placeholder="Search Product"
            value={searchValue}
            onChange={onChange}
          />
          <button onClick={classToggle}>View All {counter > 0 ? <span>{counter}</span> : ''}</button>
        </div>

        <ProductGrid products={filteredProducts} onButtonClick={addToCart} />


        {isCartVisible && (
          <>
            <h2>Your Cart</h2>
            <ProductGrid products={cart} onButtonClick={removeFromCart} />
          </>
        )}

      </div>

    </main>
  );
}