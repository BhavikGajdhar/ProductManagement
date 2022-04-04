import React from "react";
import { AppContextType } from "../auth.model";


const AppContext = React.createContext<AppContextType>({
    setShowLoader:()=>{},
  });
  
  export default AppContext;