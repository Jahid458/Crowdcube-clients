import { FaStar } from "react-icons/fa";

const BlogAndReview = () => {
  return (
    <div className="p-5 dark:bg-gray-900 dark:text-gray-100">
      {/* Blog Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Blog</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
          {/* Blog Post 1 */}
          <div className="card bg-base-100 dark:bg-gray-800 dark:shadow-md shadow-xl">
            <img
              src="https://i.ibb.co.com/TM4JmC9/campaign1.jpg"
              alt="Blog Post"
              className="rounded-t-xl"
            />
            <div className="card-body">
              <h3 className="card-title">How to Launch a Successful Campaign</h3>
              <p>
                Learn the steps and strategies to make your crowdfunding
                campaign a success.
              </p>
              <button className="btn btn-link text-orange-600 dark:text-orange-400">
                Read More →
              </button>
            </div>
          </div>
          {/* Blog Post 2 */}
          <div className="card bg-base-100 dark:bg-gray-800 dark:shadow-md shadow-xl">
            <img
              src="https://i.ibb.co.com/Rzq3k51/images-1.png"
              alt="Blog Post"
              className="rounded-t-xl"
            />
            <div className="card-body">
              <h3 className="card-title">Engaging Your Audience</h3>
              <p>
                Tips and tricks for keeping your audience engaged throughout
                your campaign journey.
              </p>
              <button className="btn btn-link text-orange-600 dark:text-orange-400">
                Read More →
              </button>
            </div>
          </div>
          {/* Blog Post 3 */}
          <div className="card bg-base-100 dark:bg-gray-800 dark:shadow-md shadow-xl">
            <img
              src="https://i.ibb.co.com/54Js26s/images-2.png"
              alt="Blog Post"
              className="rounded-t-xl"
            />
            <div className="card-body">
              <h3 className="card-title">Success Stories</h3>
              <p>
                Get inspired by real-life stories of successful crowdfunding
                campaigns.
              </p>
              <button className="btn btn-link text-orange-600 dark:text-orange-400">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6">What People Say</h2>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
          {/* Review 1 */}
          <div className="card bg-base-100 dark:bg-gray-800 dark:shadow-md shadow-xl">
            <div className="card-body">
              <p>
                "This platform is incredible! It helped me connect with the
                right investors and bring my dream project to life."
              </p>
              <div className="flex items-center mt-3">
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <span className="ml-2 font-bold">- John Doe</span>
              </div>
            </div>
          </div>
          {/* Review 2 */}
          <div className="card bg-base-100 dark:bg-gray-800 dark:shadow-md shadow-xl">
            <div className="card-body">
              <p>
                "The user experience is seamless, and the support team is
                outstanding. Highly recommended!"
              </p>
              <div className="flex items-center mt-3">
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <FaStar className="text-orange-500" />
                <span className="ml-2 font-bold">- Jane Smith</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogAndReview;
