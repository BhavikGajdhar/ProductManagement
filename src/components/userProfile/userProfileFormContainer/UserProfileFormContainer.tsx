import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddToCart from "../../header/AddToCart";
import { getCartData, updateUser } from "../service/UserProfileService";
import UserProfileFormPresentation from "./userProfileFormPresentation/UserProfileFormPresentation";

const UserProfileFormContainer = (props: any) => {
  const [value, setValue] = useState<any>();
  let navigate = useNavigate();
  useEffect(() => {
    getCartData().then((res: any) => {
      setValue(res.data.length);
    });
  }, []);
  const userUpdate = (value: any) => {
    updateUser(value.id, value);
    navigate(`/`);
  };
  return (
    <>
      <AddToCart cartValue={value} />
      <UserProfileFormPresentation updateUser={userUpdate} />
    </>
  );
};

export { UserProfileFormContainer };
