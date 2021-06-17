import Image from "next/image";
import dayjs from "dayjs";

import ArticleContent from "components/ArticleContent";
import ArticleDetailLayout from "layout/articleDetailLayout";
import { getAllBlogs, getBlogBySlug, urlFor } from "lib/api";

const BlogDetail = ({ blog }) => {
  return (
    <ArticleDetailLayout>
      <div className="-mt-40 sm:-mt-72">
        <div className="container mx-auto w-11/12 text-center md:p-5 xl:max-w-5xl mt-8 sm:-mt-8">
          <div className="-mr-2 text-center sm:mr-0 md:p-10">
            <Image
              width={820}
              height={400}
              className="inline-block w-full max-w-5xl max-h-96 rounded-md object-cover object-center"
              src={urlFor(blog.coverImage).height(600).url()}
              alt="blog"
            />
          </div>
          <div className="-ml-2 -mt-12 text-left sm:-mt-28 sm:mr-0 relative">
            <div className="block">
              <p className="inline-block px-4 py-3 max-w-md text-gray-800 text-xl font-bold bg-white border-2 border-gray-800 rounded-md sm:px-6 sm:py-5 sm:text-2xl md:text-3xl lg:max-w-3xl lg:text-5xl">
                {blog.title}
              </p>
            </div>
            <div className="block">
              <p className="text-md inline-block px-3 py-2 text-gray-800 font-medium bg-white border-2 border-t-0 border-gray-800 rounded-b-md sm:text-xl md:text-3xl">
                {dayjs(blog.date).format("YYYY/MM/DD")}
              </p>
            </div>
          </div>
        </div>

        <section className="body-font mt-5 p-5 text-gray-600">
          <div className="container mx-auto md:px-20 xl:max-w-5xl">
            <dl className="flex items-center border-b-2 border-gray-800 pb-2 mb-5 justify-end">
              <dd className="mr-2">{blog.author.name}</dd>
              <dt className="">
                <Image
                  width={40}
                  height={40}
                  className="rounded-full object-cover object-center"
                  src={blog.author.avatar}
                  alt="blog"
                />
              </dt>
            </dl>
          </div>
          <div className="container mx-auto pb-24 md:px-20 xl:max-w-5xl">
            {blog.content && <ArticleContent content={blog.content} />}
          </div>
        </section>
      </div>
    </ArticleDetailLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((b) => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: true,
  };
}
export default BlogDetail;
