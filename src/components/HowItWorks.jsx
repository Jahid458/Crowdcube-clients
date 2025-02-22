import { FaDonate, FaLightbulb, FaUsers } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/crowdfunding.json";
import donationData from "../assets/donation.json";
import { Typewriter } from "react-simple-typewriter";

const HowItWorks = () => {
  return (
    <div className="p-5 lg:p-0">
      <div className="rounded-2xl py-10 px-4 lg:px-16 mb-3">

        <h2 className="text-4xl font-bold text-center text-orange-600 dark:text-orange-400 mb-12 py-10">
          How <span className="text-blue-600 dark:text-blue-400">CrowdCube</span> Works
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              The Process is Simple and Effective
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Empower your dreams through crowdfunding. CrowdCube offers an easy,
              reliable way to raise funds for innovative ideas, startups, or
              personal causes.
            </p>

            <div className="space-y-6">
              <Step
                icon={<FaLightbulb className="text-orange-600 lg:text-5xl text-3xl" />}
                title="Step 1: Create Your Campaign"
                description="Share your idea, define your goal, and showcase your vision."
              />
              <Step
                icon={<FaUsers className="text-blue-600 lg:text-5xl text-3xl" />}
                title="Step 2: Share With the World"
                description="Use our platform and social media tools to spread the word."
              />
              <Step
                icon={<FaDonate className="text-green-600 lg:text-5xl text-3xl" />}
                title="Step 3: Receive Contributions"
                description="Collect funds securely and achieve your goals with community support."
              />
            </div>

            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mt-8">
              <Typewriter
                words={[
                  "Empowering Dreams.",
                  "Simplifying Crowdfunding.",
                  "Connecting Innovators & Supporters.",
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </h3>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-6">
            <div className="w-full">
              <Lottie animationData={donationData} loop className="max-h-80 mx-auto " />
            </div>
            <div className="w-full">
              <Lottie animationData={animationData} loop className="max-h-80 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Step = ({ icon, title, description }) => (
  <div className="flex items-center gap-4">
    {icon}
    <div>
      <h4 className="font-bold text-xl text-gray-800 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

export default HowItWorks;
