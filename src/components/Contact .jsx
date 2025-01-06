const ContactPage = () => {
  return (
    <div className="p-5 dark:bg-gray-900 dark:text-gray-100 mt-">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
        {/* Contact Form Section */}
        <div className="card bg-base-100 dark:bg-gray-800 shadow-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <form>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full mb-4 dark:bg-gray-700"
            />
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full mb-4 dark:bg-gray-700"
            />
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full mb-4 dark:bg-gray-700"
            ></textarea>
            <button className="btn bg-orange-600 text-white w-full dark:hover:bg-orange-500">
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="card bg-base-100 dark:bg-gray-800 shadow-xl">
          <div className="p-4">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.97321107486!2d90.46505327439151!3d23.748334688857536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7e8f71bd77d%3A0x81c550eb912c8463!2s1360%20Banasree%20-%20Staff%20Quarter%20-%20Demra%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1736187422535!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
