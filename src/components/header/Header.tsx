import { Link } from "react-router-dom";
import LogInButton from "./loginButton";
import LogOutButton from "./logoutButton";
import ProfileContent from "./profileContent";
import Cart from "./../../assets/picture/shopping-cart.png";
import React, { useEffect, useState, useContext } from "react";
import { getAddToCartData } from "../product/service/ProductService";
import { useAuth0 } from "@auth0/auth0-react";
import { CartContext } from "../header/AddToCart";

export const Header = (props: any) => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md sticky top-0">
      <Link to={`/`}>
        <h1 className="text-lg md:text-2xl font-semibold">E-Commerce App</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <LogInButton />
        <LogOutButton />
        <ProfileContent />
        {isAuthenticated && (
          <Link to={`/cart`}>
            <div className="cart relative">
              <span className="bg-sky-300 px-2 py-1 py rounded-full text-xs absolute left-5 -top-2">
                {/* <CartContext.Consumer>
                  {(value) => <h1>{value}</h1>}
                </CartContext.Consumer> */}
                {props.value}
              </span>
              <img className="w-8" src={Cart} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};