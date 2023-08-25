
const Footer = () => {
  return (
    <div className="mt-40 bottom-0">
       <div className="bg-amber-400 text-center py-4">
        <div className="container flex justify-center gap-20 items-center flex-col lg:flex-row  mx-auto">
        <p className=" font-medium">Subscribe to our newsletter:</p>
        <div className="mt-2 flex ">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-white rounded-l px-4 py-2 focus:outline-none"
          />
          <button className=" bg-amber-600 text-white  px-4 py-2 hover:bg-gray-300 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
      </div>
    <footer className="bg-gray-800 text-white ">
   
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: "url('/assets/images/fbackground.webp')" }}
      >
        <div className="bg-black bg-opacity-70 py-48">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 text-center md:text-left">
              <img
                src="/path/to/logo.png"
                alt="Company Logo"
                className="w-16 h-16 mx-auto mb-2"
              />
              <p>Creating Innovative Solutions</p>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="list-none">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="list-none">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <ul className="list-none">
                <li>123 Street, City</li>
                <li>Email: info@example.com</li>
                <li>Phone: +1 123-456-7890</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 container mx-auto">
        <p className="text-left pl-4">&copy; 2023 EthosMatrix </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
