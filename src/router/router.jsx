import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AllCampaign from "../components/AllCampaign";
import AddCampaign from "../components/AddCampaign";
import MyCampaign from "../components/MyCampaign";
import MyDonation from './../components/MyDonation';
import CampaignDetails from "../components/CampaignDetails";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/allCampaign',
          element:<AllCampaign></AllCampaign>
        },
        {
          path:'/campaignDetails/:id',
          element:
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>
          </PrivateRoute>,
          loader: ({params}) =>{
            return fetch(`http://localhost:5000/campaigns/${params.id}`)
          }
        },
        {
          path:"/addCampaign",
          element:
            <PrivateRoute>
              <AddCampaign></AddCampaign>
            </PrivateRoute>

         
        },
        {
          path:'/myCampaign',
          element:
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>

         
        },
        {
          path:'/myDonation',
          element:
          <PrivateRoute>
            <MyDonation></MyDonation>

          </PrivateRoute>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"register",
          element:<Register></Register>
        }

    ]
  }
])



export default router;