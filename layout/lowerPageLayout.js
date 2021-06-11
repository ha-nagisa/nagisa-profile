import MainLayout from "./mainLayout";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LowerPageLayout = ({ wrapperClass, pageTitle, pageSubTitle, children }) => {
  const router = useRouter();

  return (
    <MainLayout>
      <div>
        <div className="bannerFondo bg-green-800 bg-left-top bg-auto bg-repeat-x h-96"></div>
        <div className={wrapperClass}>
          <div className="w-full text-center">
            <h1 className="font-bold text-5xl text-white">{pageTitle}</h1>
            <p className="text-sm tracking-widest text-white pt-2">{pageSubTitle}</p>
            {router.pathname === "/blogs" || router.pathname === "/works" ? (
              <div className="flex container mx-auto justify-between px-8 pt-12 pb-8">
                <ul>
                  <li className="cursor-pointer inline-block mr-5 border-2 border-transparent hover:border-white p-2">
                    <FontAwesomeIcon icon="list" size="lg" className="text-white" />
                  </li>
                  <li className="cursor-pointer inline-block border-2 border-white p-2 ">
                    <FontAwesomeIcon icon="border-all" size="lg" className="text-white" />
                  </li>
                </ul>
                <div className="cursor-pointer inline-block border-2 border-white p-2 ">
                  <FontAwesomeIcon icon="sort-numeric-up" size="lg" className="text-white" />
                </div>
              </div>
            ) : null}
            <div className="container mx-auto"></div>
          </div>

          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default LowerPageLayout;
