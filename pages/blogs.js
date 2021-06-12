import CardItem from "components/cardItem";
import CardListItem from "components/cardListItem";
import LowerPageLayout from "layout/lowerPageLayout";
import Image from "next/image";

const Blogs = () => {
  return (
    <LowerPageLayout wrapperClass="-mt-64" pageTitle="Blogs" pageSubTitle="ぶろぐ">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />

            <CardListItem />
            <CardListItem />
            <CardListItem />
          </div>
        </div>
      </section>
    </LowerPageLayout>
  );
};

export default Blogs;
