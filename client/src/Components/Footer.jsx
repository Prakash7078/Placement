import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter,BsBrowserChrome} from 'react-icons/bs';
import vvit from '../assets/logo.jpg'
function Footer() {
  return (
    <footer className="bg-blue-900 text-white ">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src={vvit}
                alt="Welcome to job portal"
                className="mr-2 h-10 cursor-pointer"
              />
              <h2 className="text-sm font-semibold  uppercase">
                job portal
              </h2>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-8  md:mb-0">
            <h2 className="text-sm font-semibold  uppercase mb-4">
              About Us
            </h2>
            <ul className=" font-medium">
              <li className="mb-3">
                <a href="#" className="">
                  About Us
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-sm font-semibold  uppercase mb-4">
              Services
            </h2>
            <ul className=" font-medium">
              <li className="mb-3">
                <a href="#" className="">
                  Jobs
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="">
                  Customization
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Repair & Restoration
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="text-sm font-semibold  uppercase mb-4">
              Contact
            </h2>
            <ul className=" font-medium">
              <li className="mb-3">
                <a href="tel:+1234567890" className="">
                  +1 234 567 890
                </a>
              </li>
              <li className="mb-3">
                <a href="mailto:20bq1a05j5@vvit.net" className="">
                  jobportal@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Hyderabad, India
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-secondary" />
        <div className="flex justify-between items-center">
          <span className="text-sm ">
            &copy; {new Date().getFullYear()} JOB Portal. All rights
            reserved.
          </span>
          <div className="flex space-x-4">
            <a href="#" className="">
              <BsBrowserChrome size={20} />
              <span className="sr-only">Web page</span>
            </a>
            <a href="#" className="">
              <AiFillInstagram size={20} />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="">
              <BsTwitter size={20} />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
