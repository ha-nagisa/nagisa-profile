import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer className="h-full bg-white">
      <div className="py-6 px-16 flex justify-between">
        <div>
          <Link href="/">
            <a className="font-bold text-gray-800 text-xl">
              NAGISA<span className="text-yellow-500">-PROFILE</span>
            </a>
          </Link>
        </div>

        <div className="flex space-x-6 mt-2">
          <i className="fa fa-dribbble text-white fa-lg"></i>
          <i className="fa fa-twitter text-white fa-lg"></i>
          <i className="fa fa-facebook text-white fa-lg"></i>
          <i className="fa fa-instagram text-white fa-lg"></i>
        </div>
      </div>

      <div className="border-t-2 mx-10 border-gray-800"></div>

      <div className="py-4 py-6 px-16 flex justify-between">
        <div>
          <h1 className="font-semibold text-gray-800 text-sm">Copyrigth @ Jun 2021</h1>
        </div>

        <div>
          <AnchorLink href="#top" className="flex space-x-2 text-gray-800 hover:text-yellow-400">
            <p className="font-semibold  text-sm">GO TOP</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6  -mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18" />
            </svg>
          </AnchorLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
