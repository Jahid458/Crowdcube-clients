import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "./AuthProvider";

const MyCampaign = () => {
  const { user } = useContext(authContext);
  const [mycampaigns, setMycampaigns] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    if (user?.email) {
      fetch(
        `https://crowdcube-server-ivory.vercel.app/mycampaign?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMycampaigns(data);
          setLoading(false); 
        })
        .catch((error) => {
          console.error("Error fetching campaigns:", error);
          setLoading(false); 
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowdcube-server-ivory.vercel.app/mycampaign/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
              const remaining = mycampaigns.filter(
                (campaign) => campaign._id !== id
              );
              setMycampaigns(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">
        My Campaigns
      </h2>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
        </div>
      ) : mycampaigns.length > 0 ? (
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
                    <Link to={`/updatecampaign/${campaign._id}`}>
                      <button className="btn btn-sm bg-orange-600 hover:bg-green-300 hover:text-white">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center text-2xl">
          No campaigns added yet.
        </p>
      )}
    </div>
  );
};

export default MyCampaign;
