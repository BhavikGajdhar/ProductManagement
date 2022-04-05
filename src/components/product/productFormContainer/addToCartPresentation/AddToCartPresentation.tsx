import { useEffect, useState } from "react";
import { Header } from "../../../header/Header";
import {
  deleteAddToCartData,
  getAddToCartData,
} from "../../service/ProductService";

// export  const CartContext = React.createContext(0);

const AddToCartPresentation = (props: any) => {
  const [addCart, setAddToCat] = useState<any>();
  const [addValue, setValue] = useState<any>();
  useEffect(() => {
    getAddToCartData().then((res: any) => {
      setAddToCat(res.data);
      setValue(res.data.length);
    });
  }, []);

  const removeFromCartHandler = (id: number) => {
    deleteAddToCartData(id).then((res: any) => {
      alert("Deleted Cart");
    });
    getAddToCartData().then((res: any) => {
      setAddToCat(res.data);
      setValue(res.data.length);
    });
  };
  return (
    <>
    <Header value={addValue}/> 
    <div className="px-10 py-5 w-full h-full bg-gray-100 flex-grow overflow-y-auto">
      <h1 className="text-2xl font-bold">Your cart</h1>
      {addCart &&
        addCart.map((item: any, i: number) => {
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-center gap-8 justify-between p-3 md:p-0 mt-6 bg-white rounded-lg overflow-hidden"
            >
              <div className="flex items-center justify-between md:justify-start gap-8 w-full">
                <figure className="w-24 h-full">
                  <img src={item.image} />
                </figure>
                <div>
                  <p>{item.title}</p>
                  <p className="pt-6">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCartHandler(item.id)}
                className="bg-red-500 px-3 py-1 text-white rounded mx-6"
              >
                Remove
              </button>
            </div>
          );
        })}
    </div>
    </>
  );
};
export { AddToCartPresentation };
