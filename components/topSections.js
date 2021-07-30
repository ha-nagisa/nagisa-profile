import Image from "next/image";
import Link from "next/link";

const TopSections = () => {
  return (
    <section>
      <div className="h-full">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-white h-full px-16 py-6">
            <div>
              <Image src="/blog.png" width="155px" height="auto" className="w-40 -ml-4" />
              <h1 className="text-green-800 font-semibold text-7xl">Blogs</h1>
              <p className="text-green-800 mt-3">
                自分の知識のアウトプットや趣味について記事を書いていこうと考えています。これからタグの機能やコメント機能なども追加していくつもりです！もし、自分の記事に間違え等あった場合、教えていただけると幸いです。
              </p>
              <Link href="/blogs">
                <a className="inline-block my-6 border-2 border-green-800 font-bold py-2 px-4 rounded-lg uppercase text-green-800 text-sm  shadow-2xl hover:bg-green-800 hover:text-white ">
                  View the Blogs
                </a>
              </Link>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-gray-800 h-full px-16 py-6">
            <div>
              <Image src="/work.png" width="155px" height="auto" />
              <h1 className="text-white font-semibold text-7xl">Works</h1>
              <p className="text-white mt-3">
                これまでの自分の制作物を記載していこうと考えています。まだ、制作物としては少ないですがこれからコツコツと技術の向上のためにも増やしていきます。
              </p>
              <Link href="/works">
                <a className="inline-block my-6 border-2 border-white bg-gray-800  text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-2xl hover:bg-white hover:text-gray-800">
                  View the works
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-yellow-500 h-full px-16 py-6">
            <div>
              <Image width="155px" height="auto" src="/Nagisa.png" className="w-40 -ml-4" />
              <h1 className="text-white font-semibold text-7xl">About</h1>
              <p className="text-white mt-3">
                自分についてのちょっとした自己紹介のページになります。少しでも興味を持って下さったら見ていただけると！
              </p>
              <Link href="/about">
                <a className="inline-block my-6 border-2 border-white bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-2xl hover:bg-white hover:text-yellow-500">
                  About me
                </a>
              </Link>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xxl:col-span-6 bg-green-800 h-full px-16 py-6">
            <div>
              <Image src="/mail.png" width="155px" height="auto" className="" />
              <h1 className="text-white font-semibold text-7xl">Contact</h1>
              <p className="text-white mt-3">
                お問い合わせページになりなります。気になる点や用件があった場合、こちらのフォームもしくはメールアドレスからお問い合わせいただけると幸いです。
              </p>
              <Link href="/contact">
                <a className="inline-block my-6 border-2 border-white bg-green-800  text-white font-bold py-2 px-4 rounded-lg uppercase text-sm  shadow-2xl hover:bg-white hover:text-green-800">
                  Contact me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSections;
