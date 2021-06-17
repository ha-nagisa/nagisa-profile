const CardItemListBlank = () => {
  return (
    <div className="px-5 py-6 w-full lg:px-20">
      <div className="mx-auto bg-white border rounded-lg shadow-md animate-pulse">
        <div className="flex flex-row items-center rounded-lg">
          <div className="w-90% max-w-310 max-h-257 min-h-235 h-20vw xl:max-w-355 hidden items-center px-5 bg-gray-400 rounded-lg sm:flex lg:p-0">
            <div className="max-h-56 bg-green-400 rounded-lg" />
          </div>
          <div className="flex flex-col p-5 w-full text-gray-500 lg:ml-4">
            <p className="title-font mb-3 mt-4 w-1/4 text-black text-xs font-semibold tracking-widest bg-gray-400 uppercase lg:mt-0">
              {" "}
              　　　　　　
            </p>
            <p className="mb-3 text-gray-500 text-base leading-relaxed bg-gray-400">
              　<br />
              　<br />
            </p>
            <p className="ml-auto w-1/4 text-right bg-gray-400">　　　　</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemListBlank;
