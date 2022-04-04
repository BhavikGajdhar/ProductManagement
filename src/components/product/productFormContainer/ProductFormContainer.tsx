import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCartData, getProductDataByID } from "../service/ProductService";
import ProductFormPresentation from "./productFormPresentation/ProductFormPresentation";
import { useNavigate } from "react-router-dom";
import AddToCart from "../../header/AddToCart";

const ProductFormContainer = (props: any) => {
  let navigate = useNavigate();
  
  const [productDetail, setProductDetail] = useState<any>();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getProductDataByID(parseInt(id as string))
        .then((res: any) => {
          setProductDetail(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  }, []);
  const cartDataDetails = (value: any) => {
    addToCartData(value)
      .then((res: any) => {
        alert("Added Cart");
        navigate(`/`);
      })
      .catch((error) => {
        alert("Already Added Cart");
        navigate(`/`);
      });
  };
  return (
    <div>
      {id && (
        <ProductFormPresentation
          detailsValue={productDetail}
          addToCartHandler={cartDataDetails}
        />
        )}
    </div>
  );
};

export { ProductFormContainer };
