import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "./ThemeProvider";




const MainLayout = () => {
  return (
    <ThemeProvider>
    <div className="bg-white dark:bg-black dark:text-white">
      <Navbar></Navbar>
  
      <div className="min-h-[calc(100vh-264px)] container mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
  
    </div>
    </ThemeProvider>
  );
};

export default MainLayout;