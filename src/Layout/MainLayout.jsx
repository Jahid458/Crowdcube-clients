import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "./ThemeProvider";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <ThemeProvider>
      <Toaster />
      <div className="bg-white dark:bg-black dark:text-white flex flex-col min-h-screen">
 
        <Navbar />
        <div className="flex-grow container mx-auto dark:bg-gray-900 py-10 dark:text-white">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
