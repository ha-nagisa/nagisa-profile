import { urlFor } from "lib/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const CardItem = ({ title, summary, date, image, slug }) => {
  const router = useRouter();
  return (
    <div className="p-4 md:w-1/3">
      <Link href={`${router.pathname}/${slug}`}>
        <a className="transform block cursor-pointer h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-2xl duration-300">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            height={360}
            width={720}
            src={urlFor(image).height(360).crop("center").fit("clip").url()}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
            <p className="leading-relaxed mb-3">{summary}</p>
            <div className="text-right">
              <a className="inline-block md:mb-2 lg:mb-0">{date}</a>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
export default CardItem;
