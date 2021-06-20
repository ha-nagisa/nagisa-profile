import ContactForm from "components/contactForm";
import LowerPageLayout from "layout/lowerPageLayout";

const Contact = () => {
  return (
    <LowerPageLayout wrapperClass="-mt-64" pageTitle="Contact" pageSubTitle="お問い合わせ">
      <section className="text-gray-600 body-font pt-16">
        <div className="container px-5 pb-24 mx-auto flex justify-center">
          <div className="bg-white w-full shadow-lg rounded-lg p-8 sm:p-16 lg:mx-8 lg:max-w-5xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </LowerPageLayout>
  );
};

export default Contact;
