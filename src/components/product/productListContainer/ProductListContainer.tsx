import { useEffect, useReducer, useState } from "react";
import AddToCart from "../../header/AddToCart";
import {
  getAddToCartData,
  getProductData,
  searchGetProductData,
} from "../service/ProductService";
import ProductListPresentation from "./productListPresentation/ProductListPresentation";

const ProductListContainer = (props: any) => {
 
  /** addToCart Length value  */
  const [value, setValue] = useState<any>();
  
  /** use Reducer for the List product  */
  const dataReducer = (state: any, action: any) => {
    switch (action.type) {

      /** Store the listing data */
      case "STACK_DATA":
        return { ...state, data: state.data.concat(action.data) };

      /** Store the searching data */  
      case "SEARCHING_DATA":
        return { ...state, data: action.data };

      /**  True/False  for the fetching value */  
      case "FETCHING_DATA":
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };

  /** useReducer hooks concept  */
  const [Data, Dispatch] = useReducer(dataReducer, {
    data: [],
    fetching: true,
  });

  useEffect(() => {
    
    Dispatch({ type: "FETCHING_DATA", fetching: true });

    /**  Listing APL Called */
    getProductData()
      .then((res: any) => {
        let data = res.data;
        Dispatch({ type: "STACK_DATA", data });
        Dispatch({ type: "FETCHING_DATA", fetching: false });
      })
      .catch((error) => {
        Dispatch({ type: "FETCHING_DATA", fetching: false });
        return error;
      });

    /** Get a product listing Length value  */  
    getAddToCartData().then((res: any) => {
      setValue(res.data.length);
    });
  }, [Dispatch]);

  /** searching API Called */
  const searchingValue = (value: any) => {
    searchGetProductData(value).then((res: any) => {
      let data = res.data;
      Dispatch({ type: "SEARCHING_DATA", data });
    });
  };
  return (
    <>
      <AddToCart cartValue={value} />
      <ProductListPresentation Values={Data} searchValue={searchingValue} />
    </>
  );
};

export { ProductListContainer };
