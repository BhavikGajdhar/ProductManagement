import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addToCartData,
  getAddToCartData,
  getProductDataByID,
} from "../service/ProductService";
import ProductFormPresentation from "./productFormPresentation/ProductFormPresentation";
import { useNavigate } from "react-router-dom";
import AddToCart from "../../header/AddToCart";

const ProductFormContainer = (props: any) => {

  let navigate = useNavigate();

  /** Store the data of product detail */
  const [productDetail, setProductDetail] = useState<any>();

  /** addToCart length value  */
  const [value, setValue] = useState<any>();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
    /** GetById API Called */  
      getProductDataByID(parseInt(id as string))
        .then((res: any) => {
          setProductDetail(res.data);
        })
        .catch((error) => {
          alert(error);
        });
    }
    /** addToCard get a length API Called */
    getAddToCartData()
      .then((res: any) => {
        setValue(res.data.length);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  /** addToCard post API Called */
  const cartDataDetails = (value: any) => {
    addToCartData(value)
      .then((res: any) => {
        alert("Added Cart");
      })
      .catch((error) => {
        alert("Already Added Cart");
      });
  /** addToCard get a length API Called  */    
    getAddToCartData()
      .then((res: any) => {
        setValue(res.data.length);
        navigate(`/`);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <AddToCart cartValue={value}/>
      <ProductFormPresentation
        detailsValue={productDetail}
        addToCartHandler={cartDataDetails}
      />
    </div>
  );
};

export { ProductFormContainer };
