const TopBanar = () => {
  return (
    <section className="h-screen px-12 sm:px-24 flex items-center relative">
      <div className="grid grid-cols-12 gap-6 ">
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xxl:col-span-12">
          <div className="w-full">
            <h1 className="text-7xl sm:text-8xl lg:text-8xl xl:text-9xl text-white font-bold my-8">
              Welcome To
              <br />
              NAGISA<span className="text-yellow-500">-PROFILE</span>
            </h1>
            <p className="text-xl text-white font-semibold ">
              自分のことを知ってもらうためにこのサイトを作成しました！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanar;
