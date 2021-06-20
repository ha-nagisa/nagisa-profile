import Image from "next/image";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Link from "next/link";

import ArticleContent from "components/ArticleContent";
import ArticleDetailLayout from "layout/articleDetailLayout";
import { getAllWorks, getWorkBySlug, urlFor } from "lib/api";
import PreviewAlert from "components/PreviewAlert";

const BlogDetail = ({ work, preview }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-green-800 opacity-75 flex flex-col items-center justify-center">
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
        <h2 className="text-center text-white text-xl font-semibold">読み込んでいます。</h2>
        <p className="w-1/3 text-center text-white">少々お待ちください！</p>
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={`${work.title} | nagisa-profile`}
        description={`${work.summary}`}
        canonical={`https://nagisa-profile.com/blogs/${work.slug}`}
        openGraph={{
          type: "article",
          url: `https://nagisa-profile.com/blogs/${work.slug}`,
          title: `${work.title} | nagisa-profile`,
          description: `${work.summary}`,
          images: [
            {
              url: urlFor(work.coverImage).height(600).url(),
              alt: `${work.title}`,
            },
          ],
        }}
        twitter={{
          handle: "@sora_pi_2",
          site: "@sora_pi_2",
          cardType: "summary_large_image",
        }}
      />
      <ArticleDetailLayout>
        <div className="-mt-40 sm:-mt-72">
          <div className="container mx-auto w-11/12 text-center md:p-5 xl:max-w-5xl mt-8 sm:-mt-8">
            <div className="-mr-2 text-center sm:mr-0 md:p-10">
              <Image
                width={820}
                height={400}
                className="inline-block w-full max-w-5xl max-h-96 rounded-md object-cover object-center image-border border-gray-800"
                src={urlFor(work.coverImage).height(600).url()}
                alt="blog"
              />
            </div>
            <div className="-ml-2 -mt-12 text-left sm:-mt-28 sm:mr-0 relative">
              <div className="block">
                <p className="inline-block px-4 py-3 max-w-md text-gray-800 text-xl font-bold bg-white border-2 border-gray-800 rounded-md sm:px-6 sm:py-5 sm:text-2xl md:text-3xl lg:max-w-3xl lg:text-5xl">
                  {work.title}
                </p>
              </div>
              <div className="block">
                <p className="text-md inline-block px-3 py-2 text-gray-800 font-medium bg-white border-2 border-t-0 border-gray-800 rounded-b-md sm:text-xl md:text-3xl">
                  {dayjs(work.date).format("YYYY/MM/DD")}
                </p>
              </div>
            </div>
          </div>

          <section className="body-font p-5 text-gray-600">
            <div className="container mx-auto md:px-20 xl:max-w-5xl">
              <div className="text-right border-b-2 border-gray-800 pb-2 mb-5 ">
                <Link href="/about">
                  <a className="inline-block">
                    <div className="mr-2 inline-block align-middle">{work.author.name}</div>
                    <div className="inline-block align-middle">
                      <Image
                        width={40}
                        height={40}
                        className="rounded-full object-cover object-center"
                        src={work.author.avatar}
                        alt="blog"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="container mx-auto pb-24 md:px-20 xl:max-w-5xl">
              {preview ? <PreviewAlert /> : null}
              {work.content && <ArticleContent content={work.content} />}
            </div>
          </section>
        </div>
      </ArticleDetailLayout>
    </>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const work = await getWorkBySlug(params.slug, preview);
  return {
    props: { work, preview },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const works = await getAllWorks();
  const paths = works?.map((b) => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: true,
  };
}
export default BlogDetail;
