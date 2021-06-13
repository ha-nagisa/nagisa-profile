import CardItem from "components/cardItem";
import CardListItem from "components/cardListItem";
import LowerPageLayout from "layout/lowerPageLayout";
import { getAllBlogs } from "lib/api";
import { useState } from "react";

const Blogs = ({ blogs }) => {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

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
            {blogs.map((blog) =>
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
            )}
          </div>
        </div>
      </section>
    </LowerPageLayout>
  );
};

export default Blogs;

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
