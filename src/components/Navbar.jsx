import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import usericon from "../assets/user.png";
import { authContext } from "./AuthProvider";

const Navbar = () => {
  const {user,handleLogout} = useContext(authContext);

  const navigate = useNavigate();

  const logoutFunc = () => {
    handleLogout();
    console.log('logout')
    navigate("login");
  };


  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  w-52 p-2 shadow"
          >
            <NavLink to="/"
              className={({ isActive }) =>
                `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
              }
            >Home</NavLink>
            <NavLink to="/allCampaign"
              className={({ isActive }) =>
                `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
              }
            >All Campaign</NavLink>
            <NavLink to="/addCampaign"
              className={({ isActive }) =>
                `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
              }
            >Add Campaign</NavLink>
            <NavLink to="/myCampaign"
              className={({ isActive }) =>
                `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
              }
            >My Campaign</NavLink>
            <NavLink to="/myDonation"
              className={({ isActive }) =>
                `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
              }
            >My Donation</NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-orange-600">CrowdCube</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-5 ">
          <NavLink to="/"
            className={({ isActive }) =>
              `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
            }
          >Home</NavLink>
          <NavLink to="/allCampaign"
            className={({ isActive }) =>
              `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
            }
          >All Campaign</NavLink>
          <NavLink to="/addCampaign"
            className={({ isActive }) =>
              `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
            }
          >Add Campaign</NavLink>
          <NavLink to="/myCampaign"
            className={({ isActive }) =>
              `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
            }
          >My Campaign</NavLink>
          <NavLink to="/myDonation"
            className={({ isActive }) =>
              `${isActive ? " text-orange-600" : "hover:text-orange-600"}`
            }
          >My Donation</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-3">
    
        {user?.email ? (
          <div className="flex">
            <img
              src={user?.photoURL && user?.photoURL}
              alt=""
              className="w-12 h-12 rounded-[50%] border-4 border-sky-500"
            />
          </div>
        ) : (
          <img src={usericon} alt="" className="w-8 lg:w-10" />
        )}
        {user ? (
          //
          <button onClick={logoutFunc}  className="btn lg:w-20  w-14">
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <a className="btn lg:w-20 w-14">Login</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
