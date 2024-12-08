import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





const AllCampaign = () => {
  const [campaigns,setCampaigns] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/campaigns")
    .then(res => res.json())
    .then((data) =>{
      console.log(data)
      setCampaigns(data)
    })
  },[])


  return <div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">
        All Campaigns Availaible Here
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full border-collapse border border-gray-200">
       
          <thead className="bg-gray-200 text-center text-gray-700">
            <tr>
              <th className="p-3 border">Id</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Minimum Donation</th>
              <th className="p-3 border">Deadline</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>

 
          <tbody>
            {campaigns.map((campaign,index) => (
              <tr key={campaign._id} className="hover:bg-gray-100">
                <td className="p-3 border text-center">{index + 1 }</td>
                <td className="p-3 border text-center">{campaign.campaignTitle}</td>
                <td className="p-3 border text-center">{campaign.campaignType}</td>
                <td className="p-3 border text-center">{campaign.minDonation} USD</td>
                <td className="p-3 border text-center">{campaign.deadline}</td>
                <td className="p-3 border text-center">
                
                  <Link to={`/campaignDetails/${campaign._id}`}>
                    <button className="btn btn-sm bg-green-600 text-white">
                      See More
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
  </div>;
};

export default AllCampaign;
