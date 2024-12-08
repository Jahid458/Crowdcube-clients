import { useContext } from "react";
import { authContext } from "./AuthProvider";
import toast from "react-hot-toast";

const AddCampaign = () => {
  const { user } = useContext(authContext);

  const handleCampaignSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageURL = form.imageURL.value;
    const campaignTitle = form.campaignTitle.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const minDonation = form.minDonation.value;
    const deadline = form.deadline.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const singleCampaigns = {
      imageURL,
      campaignTitle,
      campaignType,
      description,
      minDonation,
      deadline,
      userEmail,
      userName,
    };
    console.log(singleCampaigns);

    fetch("https://crowdcube-server-ivory.vercel.app/campaigns", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singleCampaigns),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        toast.success('Campaign Added Successfully');
      });
  };
  return (
    <div>
      <div className="container mx-auto mt-10 max-w-lg p-6 bg-white rounded-lg shadow-lg mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Campaign
        </h2>

        <form onSubmit={handleCampaignSubmit}>
          {/* Image URL  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="imageURL"
              placeholder="Enter image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Campaign Title */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Campaign Title</span>
            </label>
            <input
              type="text"
              name="campaignTitle"
              placeholder="Enter campaign title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Campaign Type  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Campaign Type</span>
            </label>
            <select
              name="campaignType"
              className="select select-bordered w-full"
              required
            >
              <option disabled selected>
                Select type
              </option>
              <option>Personal Issue</option>
              <option>Startup</option>
              <option>Business</option>
              <option>Creative Ideas</option>
            </select>
          </div>

          {/* Description  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Write a brief description..."
              className="textarea textarea-bordered w-full"
              required
            ></textarea>
          </div>

          {/* Minimum Donation Amount */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Minimum Donation Amount</span>
            </label>
            <input
              type="number"
              name="minDonation"
              placeholder="Enter amount"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Deadline  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* User Email (Read Only)  */}
          <div className="form-control mb-4">
            <label className="label font-semibold">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="userEmail"
              className="input input-bordered w-full  bg-gray-200 "
              defaultValue={user?.email || ""}
            />
          </div>

          {/* User Name (Read Only) */}
          <div className="form-control mb-6">
            <label className="label font-semibold">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              className="input input-bordered w-full bg-gray-200 "
              defaultValue={user?.displayName || ""}
            />
          </div>

          {/* Add Button  */}
          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCampaign;
