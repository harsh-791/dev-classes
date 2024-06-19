import ProductCard from "../ProductCard/ProductCard";
import { useState,useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";

function Products({cart, increaseQuantity, decreaseQuantity}){
    // const products = [
    //     {
    //     id: 1,
    //     title: "Apple iPhone 14",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 2,
    //     title: "Apple iPhone 13",
    //     price: "Rs. 70,000"
    //     },
    //     {
    //     id: 3,
    //     title: "Google Pixel 7",
    //     price: "Rs. 50,000"
    //     },
    //     {
    //     id: 4,
    //     title: "Nokia 1100",
    //     price: "Rs. 2,000"
    //     },
    //     {
    //     id: 5,
    //     title: "Samsung Galaxy S10",
    //     price: "Rs. 1,00,000"
    //     },
    //     {
    //     id: 6,
    //     title: "Sony Xperia S10",
    //     price: "Rs. 1,00,000"
    //     }
    //     ];
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
            (response) => {
                return response.json();
            }
        ).then(
            (res) => {
                console.log(res);
                setProducts(res);
            }
        );
    },[])

    // console.log(useWindowSize());


    // oldDom = [
    //     <ProductCard key={i1} title="Title 1" />,
    //     <ProductCard key={i2} title="Title 2" />,
    //     <ProductCard key={i3} title="Title 3" />
    // ] 
    // newDom = [
    //     <ProductCard key={i1} title="Title 1" />,
    //     <ProductCard key={i4} title="Title 4" />,
    //     <ProductCard key={i2} title="Title 2" />,
    //     <ProductCard key={i3} title="Title 3" />
    // ]

    //index shouldn't be passed as value in the key as
    //everthing get mixed up, let suppose you add an element at 0, everything gets changed
    //and will cause unwanted re-renders


    return(
        <div>
            {
                products.map(function(item, index){
                    return(<ProductCard key={index}  product={item}  cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>)
                })
            }
        </div>
    )
}

export let a = 10;
export let b = 20;
export default Products;