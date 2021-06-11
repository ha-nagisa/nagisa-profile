import React from "react";

import MainLayout from "layout/mainLayout";
import TopBanar from "components/topBanar";
import TopSections from "components/topSections";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-green-800 w-full">
        <TopBanar />
        <TopSections />
      </div>
    </MainLayout>
  );
}
