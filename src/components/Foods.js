import React from 'react'
import { useContext, useEffect, useState } from "react";
import { AppContext } from './Store';
import loaderGif from "../images/loader.gif"; 
import { Link } from "react-router-dom";

function Foods() {
  const { state, dispatch } = useContext(AppContext);
  const { data } = state;

  //a state to handle the rotating loader 
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  // function to show the item categories button
  const showBtn = (id) => {
    dispatch({ type: "SHOWBUTTON", payload: id });
  };

  return (
    <main className="mx-auto">
      <header className="text-center">
        <h1 className="text-color font-bold text-5xl">OUR DAILY DISHES</h1>
        <p className="text-2xl my-5">
          Check out recommended dishes of your choice
        </p>
      </header>
      {loader ? (
        <img className="w-24 mx-auto" src={loaderGif} alt="loader" />
      ) : (
        <section className="dishes-section">
          <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:grid-rows-3 md:grid-rows-5 grid-rows-9 gap-20">
            {data.map((item) => {
              const { img, name, id, button } = item;
              return (
                <div className="flex flex-col items-center mt-10" key={id}>
                  <div className="flex flex-col items-center border-2 border-red-400 py-20 px-10 text-center">
                    <img className="food-images" src={img} alt="foods" />
                    <div className="flex items-center">
                      <h3 className="my-5 font-bold text-2xl text-color bg-white px-5 rounded">
                        {name}
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-arrow-down-square-fill primary-color cursor-pointer"
                        viewBox="0 0 16 16"
                        onClick={(e) => showBtn(id)}
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                      </svg>
                    </div>
                    {button ? (
                      <Link to={`/categories/${id}`}>
                        <button className="bg-orange-600 p-2 rounded">
                          Item Categories
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}

export default Foods
