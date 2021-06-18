import { urlFor } from "lib/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const CardListItem = ({ title, summary, date, image, slug }) => {
  const router = useRouter();
  return (
    <div className="px-5 py-6 lg:px-20">
      <Link href={`${router.pathname}/${slug}`}>
        <a className="transform block mx-auto bg-white border rounded-lg shadow-md hover:scale-105 hover:shadow-2xl duration-300">
          <div className="flex flex-row items-center rounded-lg">
            <div className="h-full items-center hidden w-full px-5 lg:p-0 sm:flex lg:w-auto">
              <Image
                src={urlFor(image).height(360).crop("center").fit("clip").url()}
                alt="placeholder"
                className="rounded-lg max-h-56"
                width={504}
                height={360}
              />
            </div>
            <div className="flex flex-col w-full text-gray-500 lg:ml-4 p-5">
              <p className="mt-4 mb-3 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font">
                {" "}
                {title}
              </p>
              <p className="mb-3 text-base leading-relaxed text-gray-500">{summary} </p>
              <p className="text-right">{dayjs(date).format("YYYY/MM/DD")}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CardListItem;
