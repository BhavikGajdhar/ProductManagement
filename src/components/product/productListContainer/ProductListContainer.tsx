import React, { useEffect, useState } from "react";
import {
  getProductData,
  searchGetProductData,
} from "../service/ProductService";
import ProductListPresentation from "./productListPresentation/ProductListPresentation";

const ProductListContainer = (props: any) => {
  const [productList, setProductList] = useState<any>([]);
  useEffect(() => {
    getProductData().then((res) => {
      setProductList(res.data);
    });
  }, []);
  const searchingValue = (value: any) => {
    searchGetProductData(value).then((res: any) => {
      setProductList(res.data);
    });
  };
  return (
    <div>
      <ProductListPresentation
        Values={productList}
        searchValue={searchingValue}
      />
    </div>
  );
};

export { ProductListContainer };
