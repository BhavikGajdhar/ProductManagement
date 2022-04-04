import { useAuth0 } from "@auth0/auth0-react";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const ProductComponent = lazy(() =>
  import("./components/product/productListContainer/ProductListContainer").then(
    ({ ProductListContainer }) => ({ default: ProductListContainer })
  )
);
const ProductDetailComponent = lazy(() =>
  import("./components/product/productFormContainer/ProductFormContainer").then(
    ({ ProductFormContainer }) => ({ default: ProductFormContainer })
  )
);
const CartComponent = lazy(() =>
  import(
    "./components/product/productFormContainer/addToCartPresentation/AddToCartPresentation"
  ).then(({ AddToCartPresentation }) => ({ default: AddToCartPresentation }))
);
const UserProfileComponent = lazy(() =>
  import(
    "./components/userProfile/userProfileFormContainer/UserProfileFormContainer"
  ).then(({ UserProfileFormContainer }) => ({
    default: UserProfileFormContainer,
  }))
);

const AppRouting = (props: any) => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductComponent />} />
        <Route path="/details/:id" element={<ProductDetailComponent />} />
      </Routes>
      {isAuthenticated && (
        <Routes>
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/userProfile" element={<UserProfileComponent />} />
        </Routes>
      )}
    </>
  );
};
export default AppRouting;
