import Image from "next/image";

import LowerPageLayout from "layout/lowerPageLayout";

const About = () => {
  return (
    <LowerPageLayout wrapperClass="-mt-64" pageTitle="About me" pageSubTitle="私について">
      <section className="text-gray-600 body-font pt-16">
        <div className="container px-5 pb-24 mx-auto flex justify-center">
          <div className="bg-white w-full lg:mx-8 lg:flex lg:max-w-5xl shadow-lg rounded-lg">
            <div className="lg:w-1/2">
              <div className="flex justify-center bg-cover rounded-lg h-full bg-gray-800 p-5 items-center">
                <div>
                  <div className="text-center mb-2">
                    <div className="inline-block rounded-full border-8 border-yellow-400 bg-yellow-400">
                      <Image src="/Nagisa.jpg" width="155px" height="auto" className="inline-block rounded-full" />
                    </div>
                  </div>
                  <p className="text-center text-white font-bold text-2xl mb-4 ">Nagisa</p>
                  <p className="text-center text-white font-medium text-base mb-1">工学部土木建築学科4年</p>
                  <p className="text-center text-white font-medium text-base mb-1">1999年2月22日生まれ AB型 男</p>
                </div>
              </div>
            </div>
            <div className="py-12 px-6 lg:w-1/2">
              <p className="font-bold text-xl mb-1 border-b-2 border-green-800">・経験</p>
              <p className="mb-3">
                昨年の4月からプログラミングについて勉強を始めました。2020年4~9月は、主にwordpressによるサイト制作を個人で行いました。2020年10月~6月は、インターン先でshopifyによるサイト構築を行いました。gitによる共同開発も経験あります。
              </p>
              <p className="font-bold text-xl mb-1 border-b-2 border-green-800">・スキル</p>
              <p className="break-all mb-3">
                HTML5 / CSS3 / Sass / JavaScript / JQery / React / Next.js / Redux / Firebase / Sanity / Wordpress /
                Shopify
              </p>
              <p className="font-bold text-xl mb-1 border-b-2 border-green-800">・性格</p>
              <p className="break-all mb-3">地道にコツコツ努力することが得意です。</p>
              <p className="font-bold text-xl mb-1 border-b-2 border-green-800">・好きな言葉</p>
              <p className="break-all mb-3">一期一会</p>
            </div>
          </div>
        </div>
      </section>
    </LowerPageLayout>
  );
};

export default About;
