import { useGetBlogsPages } from "actions/pagination";
import CardItem from "components/cardItem";
import CardListItem from "components/cardListItem";
import LowerPageLayout from "layout/lowerPageLayout";
import { getAllBlogs, getPaginatedBlogs } from "lib/api";
import { useState } from "react";

export const BlogList = ({ data = [], filter }) => {
  return data.map((page) =>
    page.map((blog) =>
      filter.view.list ? (
        <CardListItem
          key={blog.slug}
          title={blog.title}
          summary={blog.summary}
          date={blog.date}
          image={blog.coverImage}
          slug={blog.slug}
        />
      ) : (
        <CardItem
          key={blog.slug}
          title={blog.title}
          summary={blog.summary}
          date={blog.date}
          image={blog.coverImage}
          slug={blog.slug}
        />
      )
    )
  );
};

const Blogs = ({ blogs }) => {
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
  } = useGetBlogsPages({ filter });

  return (
    <LowerPageLayout
      wrapperClass="-mt-64"
      pageTitle="Blogs"
      pageSubTitle="ぶろぐ"
      filter={filter}
      onChange={(option, value) => setFilter({ ...filter, [option]: value })}
    >
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <BlogList data={data || [blogs]} filter={filter} />
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
  );
};

export default Blogs;

export async function getStaticProps() {
  const blogs = await getPaginatedBlogs({ offset: 0, date: "desc" });
  return {
    props: {
      blogs,
    },
    revalidate: 1,
  };
}
