import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addToCartData,
  getAddToCartData,
  getProductDataByID,
} from "../service/ProductService";
import ProductFormPresentation from "./productFormPresentation/ProductFormPresentation";
import { useNavigate } from "react-router-dom";
import { Header } from "../../header/Header";

const ProductFormContainer = (props: any) => {
  let navigate = useNavigate();

  const [productDetail, setProductDetail] = useState<any>();
  const [value, setValue] = useState<any>();

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
    getAddToCartData()
      .then((res: any) => {
        setValue(res.data.length);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  const cartDataDetails = (value: any) => {
    addToCartData(value)
      .then((res: any) => {
        alert("Added Cart");
      })
      .catch((error) => {
        alert("Already Added Cart");
      });
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
      <Header value={value}></Header>
      <ProductFormPresentation
        detailsValue={productDetail}
        addToCartHandler={cartDataDetails}
      />
    </div>
  );
};

export { ProductFormContainer };
