import { getUserData } from "../service/loginService";
import { LoginPresentation } from "./loginPresentation/LoginPresentation";

const LoginContainer = (props: any) => {
  const loginData = (data: any) => {
    getUserData().then((res) => {
      if (res.data) {
        const user = res.data.find((value: any) => {
          return value.email === data.Email && value.password === data.Password;
        });
        if (user) {
          props.navigate("/ProductList");
        } else {
          alert("User name and password is incorrect...!");
        }
      }
    });
  };

  return (
    <div className="form">
      <LoginPresentation loginValue={loginData} />
    </div>
  );
};

export { LoginContainer };
