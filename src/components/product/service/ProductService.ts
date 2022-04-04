import axios from "axios";

  export const getProductData = () => {
    return axios.get('http://localhost:4500/products');
  };

  export const searchGetProductData = (value:any) => {
    return axios.get(`http://localhost:4500/products?q=${value}`);
  };

  export const getProductDataByID=(id:number)=>{
      return axios.get('http://localhost:4500/products/'+id);
  }

  export const addToCartData=(value:any)=>{
      return axios.post('http://localhost:4500/addToCart',value);
  }

  export const getAddToCartData=()=>{
    return axios.get('http://localhost:4500/addToCart');
  }

  export const deleteAddToCartData=(id:number)=>{
    return axios.delete('http://localhost:4500/addToCart/'+id);
  }
  