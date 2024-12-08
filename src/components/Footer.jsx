import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">

      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
  
        <div>
          <h1 className="text-4xl text-orange-500 font-bold mb-3">CrowdCube</h1>
          <p className="text-gray-400">
            Connecting dreams with reality. Empower campaigns, inspire change, and make a difference together.
          </p>
        </div>

        <div>
          <h6 className="text-lg font-semibold text-white mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">Branding</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Design</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Marketing</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Advertisement</a></li>
          </ul>
        </div>

        <div>
          <h6 className="text-lg font-semibold text-white mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Jobs</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Press Kit</a></li>
          </ul>
        </div>


        <div>
          <h6 className="text-lg font-semibold text-white mb-4">Follow Us</h6>
          <div className="flex space-x-4">
            <a target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a target="_blank"
              rel="noreferrer"
              className="hover:text-blue-700 transition"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
      
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-600 transition"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>


      <div className="border-t border-gray-700 my-6"></div>


      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="text-orange-400 font-bold">Jahidul Islam</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
