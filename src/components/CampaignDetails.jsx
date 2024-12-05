import { FaDonate } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const CampaignDetails = () => {

  const singleCampaign = useLoaderData(); 
   const {imageURL,campaignTitle,campaignType,description,minDonation,deadline} = singleCampaign; 
  console.log(imageURL,campaignTitle,campaignType,description,minDonation,deadline)
  



  

  return (
   <div className="card w-full bg-base-100 shadow-2xl mb-5 mt-5">
      {/* Campaign Image - Full Width */}
      <figure className="w-full">
        <img src={imageURL} alt={campaignTitle} className="w-full h-80 object-cover" />
      </figure>

      {/* Campaign Details */}
      <div className="card-body">
        {/* Campaign Title */}
        <h2 className="card-title text-3xl font-bold mb-4">{campaignTitle}</h2>

        {/* Campaign Type */}
        <p className="text-lg font-medium text-gray-700 mb-2">
          <span className="font-bold text-orange-600">Type:</span> {campaignType}
        </p>

        {/* Campaign Description */}
        <p className="text-gray-600 text-justify mb-4">{description}</p>

        {/* Minimum Donation */}
        <p className="text-lg font-medium text-gray-700">
          <span className="font-bold text-orange-600">Minimum Donation:</span> ${minDonation}
        </p>

        {/* Deadline */}
        <p className="text-lg font-medium text-gray-700">
          <span className="font-bold text-orange-600">Deadline:</span> {new Date(deadline).toDateString()}
        </p>

        {/* Donate Button */}
        <div className="card-actions mt-6 justify-end">
          <button className="btn btn-success hover:bg-orange-600 hover:text-white flex items-center gap-2 px-6">
            <FaDonate /> Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;