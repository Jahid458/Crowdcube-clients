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


const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>,
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
          element:<CampaignDetails></CampaignDetails>,
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
          element:<MyCampaign></MyCampaign>
        },
        {
          path:'/myDonation',
          element:<MyDonation></MyDonation>
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