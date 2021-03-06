import { useState } from "react";

import Footer from "components/footer";
import Header from "components/header";
import MobileMenu from "components/mobileMenu";
import { Toaster } from "react-hot-toast";

const MainLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="global-content" id="top">
      <div
        className={`bg-white relative z-10 transition transform duration-200 ease-in-out ${
          menuOpen ? "-translate-x-52" : "translate-x-0"
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 cursor-pointer z-50 ${
            menuOpen ? "visible" : "invisible"
          }  ${menuOpen ? "opacity-100" : "opacity - 0"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></div>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {children}
        {/* <!-- footer --> */}
        <Footer />
      </div>
      <MobileMenu />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 8000,
          // Default options for specific types
          success: {
            duration: 8000,
          },
        }}
      />
    </div>
  );
};

export default MainLayout;
