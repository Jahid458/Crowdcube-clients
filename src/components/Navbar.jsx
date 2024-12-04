import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <div className="navbar-end">
        <a className="btn px-8 bg-orange-400 text-white">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
