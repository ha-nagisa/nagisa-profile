import React from "react";
import { NextSeo } from "next-seo";

import MainLayout from "layout/mainLayout";
import TopBanar from "components/topBanar";
import TopSections from "components/topSections";

export default function Home() {
  return (
    <>
      <NextSeo
        title="nagisa-profile"
        description="Hayami Nagisaの制作物やブログ記事を記載したサイトになります。お問い合わせは、コンタクトフォームもしくはメールアドレスまでお願いいたします。"
        canonical="https://nagisa-profile.com/"
        openGraph={{
          type: "website",
          url: "https://nagisa-profile.com/",
          title: "nagisa-profile",
          description:
            "Hayami Nagisaの制作物やブログ記事を記載したサイトになります。お問い合わせは、コンタクトフォームもしくはメールアドレスまでお願いいたします。",
          images: [
            {
              url: "https://nagisa-profile.com/ogp.png",
              alt: "nagisa-profile",
            },
          ],
        }}
        twitter={{
          handle: "@sora_pi_2",
          site: "@sora_pi_2",
          cardType: "summary_large_image",
        }}
      />
      <MainLayout>
        <div className="bg-green-800 w-full">
          <TopBanar />
          <TopSections />
        </div>
      </MainLayout>
    </>
  );
}
