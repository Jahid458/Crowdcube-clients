import HowItWorks from "../../components/HowItWorks";
import RunningCampaign from "../../components/RunningCampaign";
import Banner from "../Banner/Banner";


const Home = () => {
  return (
    <div className="container mx-auto">
        <Banner></Banner>
        <RunningCampaign></RunningCampaign>
        <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
