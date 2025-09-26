const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>

      <p className="text-gray-600 text-lg mb-8 leading-relaxed text-center">
        Have questions, feedback, or need support? We’d love to hear from you!  
        Reach out to us using the form below or through our contact details.
      </p>

      {/* Contact Form */}
      <form className="flex flex-col space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            placeholder="Type your message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Office</h2>
        <p className="text-gray-600">📍 Hyderabad, India</p>
        <p className="text-gray-600">📞 +91 98765 43210</p>
        <p className="text-gray-600">✉️ support@fooddelivery.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
