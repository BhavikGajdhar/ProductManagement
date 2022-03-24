import {lazy} from 'react'
import { Routes,Route,useLocation,
  useNavigate} from "react-router-dom";

const HeaderComponent = lazy(() => import('./components/header/Header').
    then(({ Header }) => ({ default: Header })));
const LoginComponent = lazy(() => import('./components/loginScreen/loginContainer/LoginContainer').
    then(({ LoginContainer }) => ({ default: LoginContainer })));

const AppRouting = (props:any) => {
  let navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
        <Routes>
            <Route  path="/" element={<LoginComponent navigate={navigate} location={location}/>}/>
            <Route   path="/ProductList" element={<HeaderComponent/>}/>
        </Routes>
    </div>
  );
};
export default AppRouting;