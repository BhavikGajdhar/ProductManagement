import { useEffect, useReducer, useState } from "react";
import { Header } from "../../header/Header";
import {
  getAddToCartData,
  getProductData,
  searchGetProductData,
} from "../service/ProductService";
import ProductListPresentation from "./productListPresentation/ProductListPresentation";

const ProductListContainer = (props: any) => {
  const [value, setValue] = useState<any>();

  const dataReducer = (state: any, action: any) => {
    switch (action.type) {
      case "STACK_DATA":
        return { ...state, data: state.data.concat(action.data) };
      case "SEARCHING_DATA":
        return { ...state, data: action.data };
      case "FETCHING_DATA":
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };

  const [Data, Dispatch] = useReducer(dataReducer, {
    data: [],
    fetching: true,
  });

  useEffect(() => {
    Dispatch({ type: "FETCHING_DATA", fetching: true });
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
    getAddToCartData().then((res: any) => {
      setValue(res.data.length);
    });
  }, [Dispatch]);

  const searchingValue = (value: any) => {
    searchGetProductData(value).then((res: any) => {
      let data = res.data;
      Dispatch({ type: "SEARCHING_DATA", data });
    });
  };
  return (
    <div>
      <Header value={value} />
      <ProductListPresentation Values={Data} searchValue={searchingValue} />
    </div>
  );
};

export { ProductListContainer };
