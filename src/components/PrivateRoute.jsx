import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const {user} = useContext(authContext);
  console.log(user)

  if(user && user?.email){
    return children
  }

  return <Navigate to ="/login"></Navigate>
 
};

export default PrivateRoute;