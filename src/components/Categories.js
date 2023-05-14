import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from './Store';

function Categories() {
  const {state, dispatch} = useContext(AppContext); 
  const {foodCart, featuresArr} = state;
  const {foodId} = useParams();

  useEffect(() => {
    getCategories();
  }, [Number(foodId)]);

  //A function that filters out the categories available for each food item
  const getCategories = () => {
    window.scroll(0, 10);
    dispatch({ type: "GETCATEGORIES", payload: Number(foodId) });
  }

  const showFeatures = (id) => {
    dispatch({type: "SHOWFEATURES", payload: id});
  }


  return (
    <main className="mx-auto">
      <header className="text-center">
        <h1 className="text-color font-bold text-5xl">
          OUR AVAILABLE CATEGORIES
        </h1>
        <p className="text-2xl my-5">
          Select your choice among the various available categories
        </p>
      </header>
      <div className="md:flex justify-center">
        {foodCart.map((item) => {
          return item.categories.map((i) => {
            const { img, name, id } = i;
            return (
              <div className="flex flex-col items-center mt-10 md:m-5 md:w-1/3" key={id}>
                <div className="flex flex-col items-center border-2 border-red-400 py-2 px-2 text-center">
                  <img className="food-images" src={img} alt="foods" />
                  <div className="flex items-center">
                    <h3 className="my-5 font-bold md:text-2xl text-xl text-color bg-white px-5 rounded">
                      {name}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-arrow-down-square-fill primary-color cursor-pointer"
                      viewBox="0 0 16 16"
                      onClick={(e) => showFeatures(id)}
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
      <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-2 lg:grid-rows-1 md:grid-rows-2 grid-rows-2 gap-10 text-center mt-20">
        {featuresArr.map((item) => {
          const {features} = item;
          return (
            features.map((i) => {
              const {size, price} = i;
              return (
                <div>
                  <h2 className='text-color font-bold text-2xl underline'>{size}</h2>
                  <h1 className='font-bold text-2xl'>{price}</h1>
                </div>
              )
            })
          )
        })}
      </div>
    </main>
  );
}

export default Categories
