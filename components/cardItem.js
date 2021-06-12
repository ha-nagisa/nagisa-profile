import Image from "next/image";

const CardItem = () => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          height="360px"
          width="720px"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">タイトル</h1>
          <p className="leading-relaxed mb-3">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <div className="text-right">
            <a className="inline-block md:mb-2 lg:mb-0">2020 6月</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
