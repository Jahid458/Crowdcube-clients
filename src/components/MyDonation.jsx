import { useContext, useEffect, useState } from "react";
import { authContext } from "./AuthProvider";

const MyDonations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { user } = useContext(authContext);

  useEffect(() => {
    fetch(`https://crowdcube-server-ivory.vercel.app/mycampaign/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); 
      });
  }, [user?.email]);

  return (
    <div className="container mx-auto px-4 lg:px-8 mt-8 mb-7">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        My Donated <span className="text-orange-600 dark:text-orange-400">Campaigns</span> List
      </h2>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
        </div>
      ) : donations.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">No Donation Found Here.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="bg-base-100 shadow-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800"
            >
              <figure className="w-full h-48">
                <img
                  src={donation.imageURL}
                  alt={donation.campaignTitle}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {donation.campaignTitle}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-xl">
                  <span className="font-bold">Type:</span> {donation.campaignType}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-bold">Description:</span>{" "}
                  {donation.description.slice(0, 100)}...
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-bold">Minimum Donation:</span> ${donation.minDonation}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-bold">Deadline:</span>{" "}
                  {new Date(donation.deadline).toDateString()}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-bold">Donor Email:</span> {donation.userEmail}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
