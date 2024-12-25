import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold  mb-4">Contact Us</h3>
          <p className="mb-2">📍 123 Language Lane, Word City, 45678</p>
          <p className="mb-2">📞 +1 (123) 456-7890</p>
          <p>📧 support@....... .com</p>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-xl font-bold  mb-4">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl  hover:text-blue-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl  hover:text-blue-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl  hover:text-pink-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl  hover:text-blue-500" />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold  mb-4">Stay Updated</h3>
          <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-3 w-full p-2 bg-[#3d8396e0]  rounded-md hover:bg-[#357283e0]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} .......   . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
