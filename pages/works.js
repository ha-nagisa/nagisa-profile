import { useState } from "react";
import { NextSeo } from "next-seo";

import { useGetWorksPages } from "actions/pagination";
import CardItem from "components/cardItem";
import CardItemBlank from "components/CardItemBlank";
import CardListItem from "components/cardListItem";
import CardItemListBlank from "components/CardListItemBlank";
import LowerPageLayout from "layout/lowerPageLayout";
import { getPaginatedWorks } from "lib/api";

export const WorkList = ({ data = [], filter }) => {
  return data.map((page) =>
    page.map((work) =>
      filter.view.list ? (
        <CardListItem
          key={work.slug}
          title={work.title}
          summary={work.summary}
          date={work.date}
          image={work.coverImage}
          slug={work.slug}
        />
      ) : (
        <CardItem
          key={work.slug}
          title={work.title}
          summary={work.summary}
          date={work.date}
          image={work.coverImage}
          slug={work.slug}
        />
      )
    )
  );
};

const Works = ({ works }) => {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const {
    data,
    size,
    setSize,
    isLoadingInitialData,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    isRefreshing,
  } = useGetWorksPages({ filter });

  return (
    <>
      <NextSeo
        title="works | nagisa-profile"
        description="Hayami Nagisaの制作物を載せたページになります。お問い合わせは、コンタクトフォームもしくはメールアドレスまでお願いいたします。"
        canonical="https://nagisa-profile.com/works"
        openGraph={{
          type: "article",
          url: "https://nagisa-profile.com/works",
          title: "works | nagisa-profile",
          description:
            "Hayami Nagisaの制作物を載せたページになります。お問い合わせは、コンタクトフォームもしくはメールアドレスまでお願いいたします。",
          images: [
            {
              url: "public/ogp.png",
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
      <LowerPageLayout
        wrapperClass="-mt-64"
        pageTitle="Works"
        pageSubTitle="制作物"
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      >
        <section className="text-gray-600 body-font">
          <div className="container px-5 pb-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <WorkList data={data || [works]} filter={filter} />
              {isLoadingMore
                ? Array(3)
                    .fill(0)
                    .map((_, i) => (filter.view.list ? <CardItemListBlank /> : <CardItemBlank />))
                : null}
            </div>
            <div className="block text-center mt-12">
              <button
                className={`inline-block border-2 text-white px-4 py-3 rounded-lg  focus:outline-none ${
                  isLoadingMore || isReachingEnd
                    ? "cursor-default bg-gray-400 border-gray-400"
                    : "bg-gray-800 hover:bg-white hover:text-gray-800 hover:border-gray-800"
                }`}
                onClick={() => setSize(size + 1)}
                disabled={isLoadingMore || isReachingEnd}
                size="lg"
                variant="outline-secondary"
              >
                {isLoadingMore ? "読み込み中....." : isReachingEnd ? "すべて表示済み" : "さらに表示"}
              </button>
            </div>
          </div>
        </section>
      </LowerPageLayout>
    </>
  );
};

export default Works;

export async function getStaticProps() {
  const works = await getPaginatedWorks({ offset: 0, date: "desc" });
  return {
    props: {
      works,
    },
    revalidate: 1,
  };
}
