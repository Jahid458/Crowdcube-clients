import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import AllCampaign from "../components/AllCampaign";
import AddCampaign from "../components/AddCampaign";
import MyCampaign from "../components/MyCampaign";
import MyDonation from './../components/MyDonation';


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
          path:'/addCampaign',
          element:<AddCampaign></AddCampaign>
        },
        {
          path:'/myCampaign',
          element:<MyCampaign></MyCampaign>
        },
        {
          path:'/myDonation',
          element:<MyDonation></MyDonation>
        }

    ]
  }
])



export default router;