import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const ProductFormPresentation = (props: any) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      {props.detailsValue && (
        <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center p-10 flex-grow overflow-y-auto">
          <figure className="flex justify-center">
            <img className="w-3/4" src={props.detailsValue.image} />
          </figure>
          <div>
            <h1 className="font-bold text-2xl">{props.detailsValue.title}</h1>
            <p className="bg-sky-500 text-white inline-block px-3 py-1 my-6 tag">
              ${props.detailsValue.price}
            </p>
            <p className="font-semibold w-full md:w-3/4">
              {props.detailsValue.description}
            </p>
            {isAuthenticated ? (
              <button
                onClick={() => props.addToCartHandler(props.detailsValue)}
                className="bg-red-500 my-6 px-3 py-2 rounded-md text-white"
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-red-500 my-6 px-3 py-2 rounded-md text-white"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductFormPresentation;
