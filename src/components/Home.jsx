import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";


const img1= "american_lays.jpg";
const img2= "indian_lays.jpg";
const img3= "kurkure.jpg";
const img4= "cocacola.jpg";
const img5= "dew.jpg";
const img6= "pepsi.jpg";
const img7= "redbull.jpg";
const img8= "frooti.jpg";
const img9= "orio.jpg";
// const img10= "cadbury_chocobakes.jpg";



const Home = () => {
  const productList = [
    {
      name: "American Lays",
      price: 20,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Indian Lays",
      price: 20,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Kurkure",
      price: 20,
      imgSrc: img3,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Cocacola",
      price: 40,
      imgSrc: img4,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Mountain Dew",
      price: 40,
      imgSrc: img5,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Pepsi",
      price: 40,
      imgSrc: img6,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Redbull",
      price: 120,
      imgSrc: img7,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Frooti",
      price: 10,
      imgSrc: img8,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Oreo",
      price: 30,
      imgSrc: img9,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },

  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>Rs. {price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
