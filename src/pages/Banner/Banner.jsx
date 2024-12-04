const Banner = () => {
  return (
    <div className="p-5 lg:p-0 mb-3">
      <div className="carousel w-full h-[500px]  mt-4">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://media.istockphoto.com/id/1274417514/photo/businessman-holding-graph-growth-of-business-and-block-chain-technology-and-data-analysis-on.jpg?s=612x612&w=0&k=20&c=_1MR9y80KdLvD3gYIVMhkQK_psJo0Z0AOOmXWVqcI2w="
            className="w-full rounded-2xl"
          />
          <div className="absolute mt-[200px] lg:ml-20 ml-5">
            <h2 className="lg:text-6xl text-xl text-white font-bold">
              Startup Fundraising Platform
            </h2>
            <p className="text-white lg:text-4xl text-xl lg:w-2/3 mt-5">
              Start and manage a professional fundraise to attract quality
              accredited investors.
            </p>
            <button className="btn bg-orange-600 text-white mt-5 rounded-2xl font-bold text-xl hover:text-black">
              Start Your Campaign
            </button>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://media.istockphoto.com/id/681735516/photo/top-view-of-creative-business-team-working-at-modern-office-colleagues-talking-smiling-high.jpg?s=612x612&w=0&k=20&c=PSeoP05X0lekAssNoLu8eosHHGMLcZncXQYZfIgMxTw="
            className="w-full rounded-2xl"
          />

          <div className="absolute text-center mt-[200px] lg:ml-20 ml-5">
            <h2 className="lg:text-6xl text-xl text-white font-bold ">
              Empower Your Big Ideas
            </h2>
            <p className="text-white lg:text-2xl text-sm  mt-5">
              Raise funds to turn your innovative concepts into reality. Join
              thousands of successful campaigns
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://media.istockphoto.com/id/1263260443/vector/crowdfunding.jpg?s=612x612&w=0&k=20&c=KDRtpVkYEPmT-9rEhUg_uyCsL6UdiUhSsYT13HSlRGM="
            className="w-full rounded-2xl "
          />

          <div className="absolute text-center mt-[200px] lg:ml-20 ml-5">
            <h2 className="lg:text-6xl text-xl text-black font-bold ">
              Secure Funding with Confidence
            </h2>
            <p className="text-black lg:text-2xl text-sm  mt-5">
              Connect with trusted investors who believe in your vision and help
              you achieve your goals.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://media.istockphoto.com/id/1418251735/photo/pound-sterling-gbp-symbol-on-money-bag-and-people-on-scales-concept-attracting-investment.jpg?s=612x612&w=0&k=20&c=oF7HK-P2bIYjVHSaSvRUHMg2s-tx4c_LG6nTtuult1A="
            className="w-full rounded-2xl"
          />

<div className="absolute  mt-[200px] lg:ml-20 ml-5">
            <h2 className="lg:text-4xl text-xl text-white font-bold ">
            Your Gateway to Successful Crowdfunding
            </h2>
            <p className="text-white lg:text-2xl text-sm  mt-5 w-2/3">
            Launch, manage, and scale your fundraising campaigns with ease. Connect with a global investor community.
            </p>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
