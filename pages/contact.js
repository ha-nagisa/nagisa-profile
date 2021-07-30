import { NextSeo } from "next-seo";

import ContactForm from "components/contactForm";
import LowerPageLayout from "layout/lowerPageLayout";

const Contact = () => {
  return (
    <>
      <NextSeo
        title="contact | nagisa-profile"
        description="Hayami Nagisaのお問い合わせページになります。質問等ありましたらフォームから入力をお願いいたします。"
        canonical="https://nagisa-profile.com/contact"
        openGraph={{
          type: "article",
          url: "https://nagisa-profile.com/contact",
          title: "contact | nagisa-profile",
          description:
            "Hayami Nagisaのお問い合わせページになります。質問等ありましたらフォームから入力をお願いいたします。",
          images: [
            {
              url: "https://nagisa-profile.com/ogp.png",
              alt: "nagisa-profile",
            },
          ],
        }}
        twitter={{
          handle: "@sora_pi_2",
          site: "@sora_pi_2",
          cardType: "summary_large_image",
        }}
      />
      <LowerPageLayout wrapperClass="-mt-64" pageTitle="Contact" pageSubTitle="お問い合わせ">
        <section className="text-gray-600 body-font pt-16">
          <div className="container px-5 pb-24 mx-auto flex justify-center">
            <div className="bg-white w-full shadow-lg rounded-lg p-8 sm:p-16 lg:mx-8 lg:max-w-5xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </LowerPageLayout>
    </>
  );
};

export default Contact;
