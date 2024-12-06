import { useNavigate } from "react-router-dom";
import err from "/404_page_cover.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();

  const homePath = () => {
    navigate("/");
  };
  return (
    <div className="container mx-auto relative">
      <img src={err} alt="" className="w-[800px] mt-6 ml-80 rounded-2xl" />
      <button
        onClick={homePath}
        className="btn px-10 font-bold text-xl hover:bg-green-500 hover:text-black bg-sky-600 text-white rounded-full  absolute left-[690px] bottom-[15px]"
      >
        Home
      </button>
    </div>
  );
};

export default ErrorPage;
