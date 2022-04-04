import React, { Suspense, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AppRouting from "./AppRouting";
import LoadingOverlay from "react-loading-overlay-ts";
import { useRoutes } from "react-router-dom";
import { Header } from "./components/header/Header";
import AddToCart from "./components/header/AddToCart";
import ClipLoader from "react-spinners/ClipLoader";
import AuthInterceptor, {
  RESPONSE_CODE,
} from "./components/core/AuthInterceptor/AuthInterceptor";
import { AppContextType } from "./components/core/auth.model";
import AppContext from "./components/core/AuthInterceptor/AppContext";

function App(props: any) {
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const sampleAppContext: AppContextType = {
    setShowLoader: setShowLoader,
  };

  // setShowLoader(true)
  const { pathname } = window.location;
  // console.log(location.pathname);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppContext.Provider value={sampleAppContext}>
        <AuthInterceptor>
          <Router>
            <AddToCart>
              <LoadingOverlay
                // className="flex flex-col flex-grow overflow-hidden"
                active={showLoader}
                styles={{
                  wrapper: {},
                  overlay: (base) => ({
                    ...base,
                    background: "rgba(0, 0, 0, 0.1)",
                  }),
                  content: {
                    display: "block",
                    margin: " auto",
                    overflow: "hidden",
                  },
                  spinner: {},
                }}
                spinner={<ClipLoader color={"grey"} size={50} />}
              />
              <Header />
              <AppRouting />
            </AddToCart>
          </Router>
        </AuthInterceptor>
      </AppContext.Provider>
    </Suspense>
  );
}

export default App;
function useSelector(arg0: (state: any) => any) {
  throw new Error("Function not implemented.");
}
