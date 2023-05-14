import React, {createContext, useReducer} from 'react'
import { data } from './FoodData';


export const AppContext = createContext();

//initial or natural state of elements represented in an object
const initialState = {
  data: data,
  foodCart: [],
  featuresArr: []
}

//A function to initiate a change in the state of an element or elements
const reducer = (state, action) => {
  if (action.type === "SHOWBUTTON") {
    //filtering out the particular food item clicked on
    const Data = data.filter((item) => item.id === action.payload? item.button = true : item.button = false)
    //newData is equal to updated food item with button true if the id equals the id of food item clicked.
    let newData = data.map((i) => Data.find((o) => o.id === i.id) || i);
    return {...state, data: newData};
  }

  if (action.type === "GETCATEGORIES") {
    const filteredCategory = data.filter((item) => item.id === action.payload);
    return {...state, foodCart: filteredCategory}
  }

  if (action.type === "SHOWFEATURES") {
    let availableFeature = []
    for (const category of state.foodCart) {
      availableFeature = (category.categories.filter((i) => i.id === action.payload));
    }
    return {...state, featuresArr: availableFeature};
  }


  return state;
}

//A function passing every change and state down to all components in the website
function Store({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {state, dispatch};
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Store
