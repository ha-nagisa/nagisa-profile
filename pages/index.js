import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="global-content">
      <div
        className={`bg-white relative z-10 transition transform duration-200 ease-in-out ${
          menuOpen ? "-translate-x-52" : "translate-x-0"
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 cursor-pointer z-50 ${
            menuOpen ? "visible" : "invisible"
          }  ${menuOpen ? "opacity-100" : "opacity - 0"}`}
          onClick={() => ssetMenuOpen(!menuOpen)}
        ></div>
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
                  <a href="#" className="text-white font-semibold text-lg hover:text-yellow-400">
                    Blogs
                  </a>
                  <a href="#" className="text-white font-semibold text-lg hover:text-yellow-400">
                    Works
                  </a>
                  <a href="#" className="text-white font-semibold text-lg hover:text-yellow-400">
                    About
                  </a>
                </div>
                <div className="pace-x-2 space-x-10 hidden pl-10 sm:block ">
                  <button className="bg-yellow-500  text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-xl hover:bg-white hover:text-yellow-500">
                    Contact
                  </button>
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
        <div className="bg-green-800 w-full">
          {/* Top banar */}
          <section className="h-screen px-12 sm:px-24 flex items-center relative">
            <div className="grid grid-cols-12 gap-6 ">
              <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-12">
                <div className="w-full">
                  <h1 className="text-7xl sm:text-8xl lg:text-8xl xl:text-9xl text-white font-bold my-8">
                    Welcome To
                    <br />
                    NAGISA<span className="text-yellow-500">-PROFILE</span>
                  </h1>
                  <p className="text-xl text-white font-semibold ">
                    自分のことを知ってもらうためにこのサイトを作成しました！
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Links */}
          <section>
            <div className="h-full">
              <div className="grid grid-cols-12 gap-0">
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-white h-full px-16 py-6">
                  <div>
                    <Image src="/blog.png" width="155px" height="auto" className="w-40 -ml-4" />
                    <h1 className="text-green-800 font-semibold text-7xl">Blogs</h1>
                    <button className="my-6 border-2 border-green-800 font-bold py-2 px-4 rounded-lg uppercase text-green-800 text-sm  shadow-2xl hover:bg-green-800 hover:text-white ">
                      View the Blogs
                    </button>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-gray-800 h-full px-16 py-6">
                  <div>
                    <Image src="/work.png" width="155px" height="auto" />
                    <h1 className="text-white font-semibold text-7xl">Works</h1>
                    <button className="my-6 border-2 border-white bg-gray-800  text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-2xl hover:bg-white hover:text-gray-800">
                      View the works
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="grid grid-cols-12 gap-0">
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-yellow-500 h-full px-16 py-6">
                  <div>
                    <Image width="155px" height="auto" src="/Nagisa.png" className="w-40 -ml-4" />
                    <h1 className="text-white font-semibold text-7xl">About</h1>
                    <button className="my-6 border-2 border-white bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-2xl hover:bg-white hover:text-yellow-500">
                      About me
                    </button>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-green-800 h-full px-16 py-6">
                  <div>
                    <Image src="/mail.png" width="155px" height="auto" className="" />
                    <h1 className="text-white font-semibold text-7xl">Contact</h1>
                    <button className="my-6 border-2 border-white bg-green-800  text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-2xl hover:bg-white hover:text-green-800">
                      Contact me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- footer --> */}
          <footer className="h-full bg-white">
            <div className="py-6 px-16 flex justify-between">
              <div>
                <h1 className="font-bold text-gray-800 text-xl">
                  NAGISA<span className="text-yellow-500">-PROFILE</span>
                </h1>
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
                <a href="#" className="flex space-x-2 text-gray-800 hover:text-yellow-400">
                  <p className="font-semibold  text-sm">GO TOP</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6  -mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7l4-4m0 0l4 4m-4-4v18"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <nav className="mobile-menu fixed right-0 top-0 w-52 h-full bg-gray-800">
        <ul className="pt-20 px-10">
          <li>
            <a className="inline-block text-white text-2xl mb-3 hover:text-yellow-500 cursor-pointer">Blogs</a>
          </li>
          <li>
            <a className="inline-block text-white text-2xl mb-3 hover:text-yellow-500 cursor-pointer">Works</a>
          </li>
          <li>
            <a className="inline-block text-white text-2xl mb-3 hover:text-yellow-500 cursor-pointer">About</a>
          </li>
          <li>
            <a className="inline-block text-white text-2xl mb-3 hover:text-yellow-500 cursor-pointer">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
