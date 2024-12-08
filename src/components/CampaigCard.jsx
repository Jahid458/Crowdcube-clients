/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const CampaigCard = ({ campaignList }) => {
  const { imageURL, campaignTitle, campaignType, description, _id } =
    campaignList;
  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-2xl mb-5 ">
      <figure>
        <img
          src={imageURL}
          alt="Campaign"
          className="w-full h-[300px] object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title lg:text-2xl font-bold">{campaignTitle}</h2>

        <p className="text-sm text-gray-600">
          <span className="font-semibold text-xl">Type:</span> {campaignType}
        </p>

        <p className="text-sm text-gray-600 ">
          <span className="font-semibold text-xl">Description:</span>
          <br />
          {description}
        </p>

        <div className="card-actions justify-center mt-2">
          <Link to={`/campaignDetails/${_id}`}>
            <button className="btn bg-orange-600 text-white font-bold text-2xl lg:px-4 px-12">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaigCard;
