import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from './Store';
import bottle from "../images/bottle.png";
import beef from "../images/beef.png";

function Cart() {
  const {state} = useContext(AppContext);
  const { cart, featuresArr } = state;
  const [nameId, setNameId] = useState();
  const [image, setImage] = useState();
  
  //The Id added to the cart and alocated to nameId value is used to filter the features array of the items in the categories section.
  let findName = featuresArr.find((item) => item.features.filter((i) => i.id === nameId));

  //this is a function that runs just to allocated the img property of the particular item added to the cart.
  useEffect(() => {
    findName? setImage(findName.img) : setImage("");
  }, [nameId]);

  // A function that runs only to find the id of the item added to the cart
  useEffect(() => {
    for (const i of cart) {
      setNameId(i.id);
    }
  }, [cart]);

  //Calculation of the total amount in the cart.
  let Total = cart.length > 0 ? cart.map((item) => item.price + 200) : 200;


  return (
    <div className="flex flex-col bg-slate-400 mt-20 p-7 md:w-3/4 mx-auto">
      <h1 className="underline text-2xl font-bold text-center">Cart</h1>
      <div className="flex items-center justify-between ">
        {cart.length > 0 ? (
          cart.map((item) => {
            const { size, price, id } = item;
            return (
              <div key={id}>
                <div className="flex flex-col items-center">
                  <img className="cartImages" src={image} alt="cart" />
                  <p>{size}</p>
                  <p>{price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="font-bold text-2xl text-color">??</h2>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
        <div className="flex flex-col items-center">
          <img className="cartImages" src={bottle} alt="water bottle" />
          <p>Water</p>
          <p>100</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
        <div className="flex flex-col items-center">
          <img className="cartImages" src={beef} alt="beef meat" />
          <p>Beef</p>
          <p>100</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-arrow-left-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
          />
        </svg>
        <div className="flex flex-col items-center">
          <h2 className="text-color text-2xl font-bold mb-5">Total</h2>
          <h2 className="font-bold">
            {Total}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Cart
