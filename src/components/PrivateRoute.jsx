import { useContext } from "react";
import { authContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const {user,loading} = useContext(authContext);
  const location = useLocation();
  // console.log(user)
  if(loading){
    //text-center text-2xl
    return <div className="text-center text-5xl mt-36">
      <span className="loading loading-bars loading-lg "></span>
    </div>
  }

  if(user && user?.email){
    return children
  }

  return <Navigate state={location.pathname} to ="/login"></Navigate>
 
};

export default PrivateRoute;