import { useContext } from "react";
import { FaDonate } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { authContext } from "./AuthProvider";


const CampaignDetails = () => {
  const { user } = useContext(authContext);

  const singleCampaign = useLoaderData(); 
   const {imageURL,campaignTitle,campaignType,description,minDonation,deadline} = singleCampaign; 
  console.log(imageURL,campaignTitle,campaignType,description,minDonation,deadline)

  const handleDonate = () => {
    const donationData = {
      campaignTitle,
      campaignType,
      userName: user.displayName,
      userEmail: user.email,
      minDonation,
      deadline,
      description,
    };

    fetch('http://localhost:5000/donatedetails',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(donationData),
    })
    .then(res => res.json())
    .then((data) => {
      alert('Donation Successfull!');
      console.log("Donation Details", data)
    })
    .catch((err) =>{
      console.log('Error Donating', err)
    })
  }


  return (
    <div className="p-5 lg:p-16">

   <div className="card w-full   bg-base-100 shadow-2xl mb-5 mt-5 ">
      {/* Campaign Image - Full Width */}
      <figure className="w-full">
        <img src={imageURL} alt={campaignTitle} className="w-full h-full object-cover" />
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
        <div className="card-actions mt-6 justify-center">
          <button
          onClick={() => handleDonate()}
          className="btn btn-success hover:bg-orange-600 hover:text-white flex items-center gap-2 px-6 text-xl">
            <FaDonate className="text-2xl" /> Donate Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CampaignDetails;