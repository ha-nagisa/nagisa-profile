import CardItem from "components/cardItem";
import CardListItem from "components/cardListItem";
import LowerPageLayout from "layout/lowerPageLayout";
import { getAllWorks } from "lib/api";

const Works = ({ works }) => {
  return (
    <LowerPageLayout wrapperClass="-mt-64" pageTitle="Works" pageSubTitle="制作物">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {works.map((work) => (
              <CardItem
                key={work.slug}
                title={work.title}
                summary={work.summary}
                date={work.date}
                image={work.coverImage}
                slug={work.slug}
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

export default Works;

export async function getStaticProps() {
  const works = await getAllWorks();
  return {
    props: {
      works,
    },
  };
}
