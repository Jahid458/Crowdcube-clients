import { useEffect, useState } from "react";
import CampaigCard from "./CampaigCard";

const RunningCampaign = () => {
  const [campaignList, setCampaignList] = useState([]);
  useEffect(() => {
    fetch("https://crowdcube-server-ivory.vercel.app/homecampaign")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCampaignList(data);
      });
  }, []);
  return (
    <div>
      <h1 className="md:text-3xl text-lg text-center font-bold mt-10">
        Running Campaign Sections
      </h1>
      <p className="md:text-xl w-3/4 md:w-5/6 lg:mx-14 mx-14 text-center font-semibold mb-6 mt-2">
        Join our efforts to create impactful change by supporting ongoing
        campaigns focused on education, sustainability, community development,
        and innovation, bringing hope and opportunities to those in need.
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:p-5 gap-3 p-10 dark:text-white">
        {campaignList.map((singleCampaign) => (
          <CampaigCard
            key={singleCampaign._id}
            campaignList={singleCampaign}
          ></CampaigCard>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaign;
