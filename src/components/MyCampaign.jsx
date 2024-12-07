import { useContext, useEffect, useState } from "react";
import { authContext } from "./AuthProvider";

const MyCampaign = () => {
  const { user } = useContext(authContext);
  const [mycampaigns, setMycampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns added by the specific user
    if (user?.email) {
      fetch(`http://localhost:5000/mycampaign?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMycampaigns(data);
        })
        .catch((error) => console.error("Error fetching campaigns:", error));
    }
  }, [user?.email]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Campaigns</h2>
      {mycampaigns.length > 0 ? (
        <div className="overflow-x-auto"> 
          <table className="table w-full text-center border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Id</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Minimum Donation</th>
                <th className="border px-4 py-2">Deadline</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mycampaigns.map((campaign, idx) => (
                <tr key={campaign._id} className="text-center hover">
                  <td className="border px-4 py-2">{idx + 1}</td>
                  <td className="border px-4 py-2">{campaign.campaignTitle}</td>
                  <td className="border px-4 py-2">{campaign.campaignType}</td>
                  <td className="border px-4 py-2">${campaign.minDonation}</td>
                  <td className="border px-4 py-2">{campaign.deadline}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <button className="btn btn-sm btn-primary">Update</button>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No campaigns added yet.</p>
      )}
    </div>
  );
};

export default MyCampaign;
