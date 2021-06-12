import Image from "next/image";

const CardListItem = () => {
  return (
    <div className="px-5 py-6 lg:px-20">
      <div className="mx-auto bg-white border rounded-lg shadow-xl">
        <div className="flex flex-row items-center rounded-lg">
          <div className="h-full items-center hidden w-full px-5 lg:p-0 sm:flex lg:w-auto">
            <Image
              src="https://dummyimage.com/720x400"
              alt="placeholder"
              className="rounded-lg max-h-56"
              width={504}
              height={280}
            />
          </div>
          <div className="flex flex-col w-full text-gray-500 lg:ml-4 p-5">
            <p className="mt-4 mb-3 text-xs font-semibold tracking-widest text-black uppercase lg:mt-0 title-font">
              {" "}
              タイトル
            </p>
            <p className="mb-3 text-base leading-relaxed text-gray-500">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト{" "}
            </p>
            <p className="text-right">2020 6月</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListItem;
