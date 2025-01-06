import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [sortOrder, setSortOrder] = useState("asc"); 

  useEffect(() => {
    fetch("https://crowdcube-server-ivory.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        setLoading(false); 
      })
      .catch(() => setLoading(false)); 
  }, []);

  const handleSort = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.minDonation - b.minDonation;
      } else {
        return b.minDonation - a.minDonation;
      }
    });

    setCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">
          All Campaigns Available Here
        </h1>

        <div className="text-end font-bold mb-4">
          <button
            onClick={handleSort}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sort by Minimum Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
        </div>


        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
            {campaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
              >
                <img
                  src={campaign.imageURL}
                  alt={campaign.campaignTitle}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-bold text-orange-600 mb-2">
                  {campaign.campaignTitle}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Type:</span> {campaign.campaignType}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">Min Donation:</span> {campaign.minDonation} USD
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-semibold">Deadline:</span> {campaign.deadline}
                </p>
                <Link to={`/campaignDetails/${campaign._id}`}>
                  <button className="w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-green-700 transition">
                    See More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCampaign;
