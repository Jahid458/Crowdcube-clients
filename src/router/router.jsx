import { createBrowserRouter } from "react-router-dom";

import AddCampaign from "../components/AddCampaign";
import AllCampaign from "../components/AllCampaign";
import CampaignDetails from "../components/CampaignDetails";
import Login from "../components/Login";
import MyCampaign from "../components/MyCampaign";
import PrivateRoute from "../components/PrivateRoute";
import Register from "../components/Register";
import UpdateCampaign from "../components/UpdateCampaign";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import MyDonation from "./../components/MyDonation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allCampaign",
        element: <AllCampaign></AllCampaign>,
      },
      {
        path: "/campaignDetails/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://crowdcube-server-ivory.vercel.app/campaigns/${params.id}`
          );
        },
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <AddCampaign></AddCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCampaign",
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/myDonation",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatecampaign/:id",
        element: <UpdateCampaign></UpdateCampaign>,
        loader: ({ params }) =>
          fetch(
            `https://crowdcube-server-ivory.vercel.app/campaigns/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
