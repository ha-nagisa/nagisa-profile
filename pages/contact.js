import LowerPageLayout from "layout/lowerPageLayout";

const Contact = () => {
  return (
    <LowerPageLayout wrapperClass="-mt-64" pageTitle="Contact" pageSubTitle="お問い合わせ">
      <section className="text-gray-600 body-font pt-16">
        <div className="container px-5 pb-24 mx-auto flex justify-center">
          <div className="bg-white w-full shadow-lg rounded-lg p-8 sm:p-16 lg:mx-8 lg:max-w-5xl">
            <form action="">
              <div className="sm:flex items-center mb-8">
                <label
                  for="name"
                  className="block w-32 mr-6 font-bold text-gray-800 text-left sm:inline-block sm:text-right"
                >
                  名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="山田太郎"
                  className="flex-1 pl-1 py-3 border-b-2 border-gray-400 focus:border-yellow-500 
                text-gray-800 placeholder-gray-400 outline-none w-full sm:w-auto"
                />
              </div>

              <div className="sm:flex items-center mb-8">
                <label
                  for="mail"
                  className="block w-32 mr-6 font-bold text-gray-800 text-left sm:inline-block sm:text-right"
                >
                  メール
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  placeholder="○○○○@example.com"
                  className="flex-1 pl-1 py-3 border-b-2 border-gray-400 focus:border-yellow-500 
                      text-gray-800 placeholder-gray-400 outline-none w-full sm:w-auto"
                />
              </div>

              <div className="sm:flex items-start mb-8">
                <label
                  for="content"
                  className="block w-32 mr-6 font-bold text-gray-800 text-left pb-3 sm:inline-block sm:text-right sm:p-0"
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows="8"
                  className="flex-1 pl-1 pb-3 border-b-2 border-gray-400 focus:border-yellow-500 
                      text-gray-800 placeholder-gray-400 outline-none w-full sm:w-auto"
                  placeholder=""
                ></textarea>
              </div>

              <div className="text-right">
                <button className="py-3 px-8 bg-yellow-500 text-white font-bold rounded-lg border-2 hover:bg-white hover:text-yellow-500 hover:border-yellow-500">
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </LowerPageLayout>
  );
};

export default Contact;
