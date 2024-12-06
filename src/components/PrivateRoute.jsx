import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const {user} = useContext(authContext);
  const location = useLocation();
  console.log(user)

  if(user && user?.email){
    return children
  }

  return <Navigate state={location.pathname} to ="/login"></Navigate>
 
};

export default PrivateRoute;