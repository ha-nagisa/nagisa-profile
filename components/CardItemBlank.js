const CardItemBlank = () => {
  return (
    <div className="p-4 w-full md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-md overflow-hidden animate-pulse">
        <div className="w-full h-40 bg-gray-400 object-cover object-center md:h-36 lg:h-48" />
        <div className="p-6">
          <h1 className="title-font mb-3 text-gray-900 text-lg font-medium bg-gray-400">　</h1>
          <p className="mb-3 leading-relaxed bg-gray-400">
            　 <br />
            　 <br />　
          </p>
          <div className="text-right">
            <a className="inline-block bg-gray-400 md:mb-2 lg:mb-0">　　　　　　　</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemBlank;
