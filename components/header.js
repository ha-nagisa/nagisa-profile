import Link from "next/link";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <header className="bg-green-800">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-6">
          <div>
            <h1 className="font-bold text-white text-3xl">
              NAGISA<span className="text-yellow-500">-PROFILE</span>
            </h1>
          </div>
          <div className="flex items-center">
            <div className="justify-center space-x-10 hidden sm:block">
              <Link href="/blogs">
                <a className="text-white font-semibold text-lg hover:text-yellow-400">Blogs</a>
              </Link>
              <Link href="/works">
                <a className="text-white font-semibold text-lg hover:text-yellow-400">Works</a>
              </Link>
              <Link href="/about">
                <a className="text-white font-semibold text-lg hover:text-yellow-400">About</a>
              </Link>
            </div>
            <div className="pace-x-2 space-x-10 hidden pl-10 sm:block ">
              <Link href="/contact">
                <a className="bg-yellow-500  text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-xl hover:bg-white hover:text-yellow-500">
                  Contact
                </a>
              </Link>
            </div>
          </div>
          <div className="space-x-2 space-x-10 block sm:hidden">
            <button
              className="z-50 relative w-10 h-10 bg-yellow-500  text-white font-bold py-2 px-4 rounded-full uppercase text-sm  shadow-xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    menuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                    menuOpen && "opacity-0"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                    menuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
