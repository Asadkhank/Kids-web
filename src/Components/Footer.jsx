import React from "react";

const Footer = () => {
  return (
    <footer className="lg:mx-28 rounded-tr-3xl bg-gray-100">
      {/* Top Contact Section */}
      <div className="bg-pink-100 text-center py-8 px-4">
        <h3 className="text-lg font-semibold text-pink-700 mb-2">
          We're here to assist you!
        </h3>
        <h2 className="text-2xl font-bold mb-4">Get in Touch with Us</h2>
        <p className="text-gray-600 mb-6">
          Have questions, concerns, or just want to say hello? We'd love to hear
          from you. Reach out to our dedicated support team using the options
          below.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-pink-700 border border-pink-700 px-4 py-2 rounded-lg shadow hover:bg-pink-200">
            Help Resources
          </button>
          <button className="bg-pink-700 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-800">
            Contact Support
          </button>
        </div>
      </div>

      {/* Links and Information Section */}
      <div className="grid bg-pink-100 grid-cols-1 md:grid-cols-4 gap-8 py-8 px-6 md:px-12 lg:px-24">
        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe to newsletter</h4>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-2 rounded-r-lg"
            >
              →
            </button>
          </form>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick links</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Blogs</li>
            <li>Contact</li>
            <li>Bundles</li>
            <li>About us</li>
          </ul>
        </div>

        {/* Popular Collections */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Popular collections</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Gift Cards</li>
            <li>Mini Plush</li>
            <li>Face Masks</li>
            <li>All collections</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-gray-600 mb-2">
            456 North New Ballas Road <br />
            Creve Coeur, MO 63141 <br />
            United States
          </p>
          <p className="text-gray-600 mb-2">+15551234567</p>
          <p className="text-gray-600">customersupport@1o1development.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-200 py-4 px-6 text-sm text-gray-600">
      <div className="text-center mt-4">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md">
            ♥ Follow on shop
          </button>
        </div>
        <div className="flex justify-center items-center">
          <p>English</p>
          <p>United States (USD $)</p>
        </div>
       
        <div className="text-center mt-4 text-gray-500">
          <p>Copyright © 2024, Kidu. Powered by Shopify.</p>
          <p className="flex justify-center gap-2 mt-2">
            <img src="visa.png" alt="Visa" className="h-4" />
            <img src="mastercard.png" alt="Mastercard" className="h-4" />
            <img src="paypal.png" alt="Paypal" className="h-4" />
            {/* Add other payment icons */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
