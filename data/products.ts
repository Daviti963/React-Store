import { Product } from "@/types/type";

export const products: Product[] = [
    { id: 1, name: "Green Apple", price: 14.99, oldPrice: 20.99, image: "images/apple.png", rating: 4, onSale: true, discountPercent: 50 },
    { id: 2, name: "Fresh Indian Malta", price: 20.00, image: "images/orange.png", rating: 4, onSale: false },
    { id: 3, name: "Chinese cabbage", price: 12.00, image: "images/cabbage.png", rating: 4, onSale: false },
    { id: 4, name: "Green Lettuce", price: 9.00, image: "images/lettuce.png", rating: 5, onSale: false },
    { id: 5, name: "Eggplant", price: 34.00, image: "images/eggplant.png", rating: 4, onSale: false },
    { id: 6, name: "Big Potatoes", price: 20.00, image: "images/potatoes.png", rating: 4, onSale: false },
    { id: 7, name: "Corn", price: 20.00, image: "images/corn.png", rating: 4, onSale: false },
    { id: 8, name: "Fresh Cauliflower", price: 12.00, image: "images/cauliflower.png", rating: 3, onSale: false },
    { id: 9, name: "Green Capsicum", price: 9.00, oldPrice: 20.99, image: "images/capsicum.png", rating: 4, onSale: true, discountPercent: 50 },
    { id: 10, name: "Green Chili", price: 34.00, image: "images/chili.png", rating: 2, onSale: false }
];