import { useContext, useState } from "react";
import { FaDonate } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md"; 
import { useLoaderData } from "react-router-dom";
import { authContext } from "./AuthProvider";

const CampaignDetails = () => {
  const { user } = useContext(authContext);
  const singleCampaign = useLoaderData();
  const {
    imageURL,
    campaignTitle,
    campaignType,
    description,
    minDonation,
    deadline,
  } = singleCampaign;

  const [showModal, setShowModal] = useState(false);

  // Check if the campaign deadline has passed
  const currentDate = new Date();
  const isDeadlineOver = new Date(deadline) < currentDate;

  const handleDonate = () => {
    if (isDeadlineOver) {
      setShowModal(true); // Show modal if the deadline is over
      return;
    }

    const donationData = {
      campaignTitle,
      campaignType,
      userName: user.displayName,
      userEmail: user.email,
      minDonation,
      deadline,
      description,
      imageURL,
    };

    fetch("https://crowdcube-server-ivory.vercel.app/donatedetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donationData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Donation Successful!");
        console.log("Donation Details", data);
      })
      .catch((err) => {
        console.log("Error Donating", err);
      });
  };

  return (
    <div className="p-5 lg:p-16">
      <div className="card w-full bg-base-100 shadow-2xl mb-5 mt-5">
        {/* Campaign Image */}
        <figure className="w-full">
          <img
            src={imageURL}
            alt={campaignTitle}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Campaign Details */}
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold mb-4">{campaignTitle}</h2>

          <p className="text-lg font-medium text-gray-700 mb-2">
            <span className="font-bold text-orange-600">Type:</span> {campaignType}
          </p>

          <p className="text-gray-600 text-justify mb-4">{description}</p>

          <p className="text-lg font-medium text-gray-700">
            <span className="font-bold text-orange-600">Minimum Donation:</span> ${minDonation}
          </p>

          <p className="text-lg font-medium text-gray-700">
            <span className="font-bold text-orange-600">Deadline:</span>{" "}
            {new Date(deadline).toDateString()}
          </p>

          {/* Donate Button */}
          <div className="card-actions mt-6 justify-center">
            <button
              onClick={handleDonate}
              className="btn btn-success hover:bg-orange-600 hover:text-white flex items-center gap-2 px-6 text-xl"
            >
              <FaDonate className="text-2xl" /> Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <MdErrorOutline className="text-5xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-600 mb-2">Donation Not Allowed</h3>
            <p className="text-gray-700 mb-4">
              Sorry, this campaigns deadline has already passed.
            </p>
            <button
              onClick={() => setShowModal(false)} // Close the modal
              className="btn btn-error px-4 py-2 text-white hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetails;

