import React from "react";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-semibold">Contact</h1>
        <p className="mt-2 text-base sm:text-lg">We'd love to hear from you!</p>
      </div>

      {/* Working Hours & Address */}
      <div className="text-center bg-gray-200 rounded py-4 px-6 mb-6 space-y-4 lg:space-y-0 lg:space-x-6 lg:flex lg:items-center lg:justify-center">
        <p className="text-sm sm:text-lg">
          <strong>Monday – Friday:</strong> 10:00am – 7:30pm
        </p>
        <p className="text-sm sm:text-lg">
          <strong>Saturday:</strong> 10:00am – 6:00pm
        </p>
        <p className="text-sm sm:text-lg">
          <strong>Sunday:</strong> 11:00am – 6:00pm
        </p>
      </div>
      <p className="text-sm sm:text-lg text-center mb-10">
        <strong>Address:</strong> 456 North New Ballas Road, Creve Coeur, MO
        63141, United States
      </p>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2799074118026!2d-90.48471238459373!3d38.654243979676174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b0d5caddae99%3A0xe7109817b81b3464!2s456%20N%20New%20Ballas%20Rd%2C%20Creve%20Coeur%2C%20MO%2063141%2C%20United%20States!5e0!3m2!1sen!2sin!4v1639474515430!5m2!1sen!2sin"
            className="w-full h-64 sm:h-80 lg:h-full rounded-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-base sm:text-lg mb-6">
            Our friendly team would love to hear from you.
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your phone"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
