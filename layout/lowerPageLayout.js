import MainLayout from "./mainLayout";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilteringMenu from "components/FilteringMenu";
import { useState } from "react";

const LowerPageLayout = ({ wrapperClass, pageTitle, pageSubTitle, children, filter, onChange }) => {
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
              <FilteringMenu filter={filter} onChange={onChange} />
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
