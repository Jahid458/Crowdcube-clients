import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa"; // For theme toggle icons
import { authContext } from "./AuthProvider";
import { useTheme } from "../Layout/ThemeProvider";


const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const logoutFunc = () => {
    handleLogout();
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Campaign", path: "/allCampaign" },
    { name: "Add Campaign", path: "/addCampaign" },
    { name: "My Campaign", path: "/myCampaign" },
    { name: "My Donation", path: "/myDonation" },
  ];

  return (
    <div className="navbar container mx-auto dark:bg-gray-900 dark:text-white ">
  
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
            className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 ${
                    isActive
                      ? "text-orange-600 font-bold"
                      : "hover:text-orange-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>


        <Link to="/" className="btn btn-ghost text-xl text-orange-600 dark:text-orange-400">
      
          CrowdCube
        </Link>
      </div>

  
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? "text-orange-600 font-bold"
                    : "hover:text-orange-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>


      <div className="navbar-end flex items-center gap-3">
      
        <button
          onClick={toggleTheme}
          className="btn btn-circle btn-outline dark:bg-gray-800"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500 text-xl" />
          ) : (
            <FaMoon className="text-gray-800 text-xl" />
          )}
        </button>

        {user?.email ? (
          <div className="flex items-center gap-3">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || "Anonymous"}
            >
              <img
                src={user?.photoURL || "https://i.pravatar.cc/150"}
                alt="User Avatar"
                className="w-12 h-12 rounded-full border-4 border-orange-500"
              />
            </div>
            <button onClick={logoutFunc} className="btn lg:w-20 w-14">
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn lg:w-20 w-14">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
