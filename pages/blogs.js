import CardItem from "components/cardItem";
import CardListItem from "components/cardListItem";
import LowerPageLayout from "layout/lowerPageLayout";
import { getAllBlogs } from "lib/api";

const Blogs = ({ blogs }) => {
  return (
    <LowerPageLayout wrapperClass="-mt-64" pageTitle="Blogs" pageSubTitle="ぶろぐ">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {blogs.map((blog) => (
              <CardItem
                key={blog.slug}
                title={blog.title}
                summary={blog.summary}
                date={blog.date}
                image={blog.coverImage}
                slug={blog.slug}
              />
            ))}

            {/* <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem /> */}

            {/* <CardListItem />
            <CardListItem />
            <CardListItem /> */}
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
