import React, { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueMessage, setValueMessage] = useState("");

  const handleChangeName = (e) => {
    setValueName(() => e.target.value);
  };
  const handleChangeEmail = (e) => {
    setValueEmail(() => e.target.value);
  };
  const handleChangeMessage = (e) => {
    setValueMessage(() => e.target.value);
  };

  const [state, handleSubmit] = useForm("contactForm");

  const notify = () =>
    toast.success(" お問い合わせありがとうございます。メールは正常に送信されました。後ほど確認いたします。", {
      style: {
        border: "1px solid #ffffff",
        padding: "16px",
        color: "#ffffff",
        background: "#1F2937",
      },
      iconTheme: {
        primary: "#F59E0B",
        secondary: "#ffffff",
      },
    });

  useEffect(() => {
    if (state.succeeded) {
      setValueName("");
      setValueEmail("");
      setValueMessage("");
      notify();
    }
  }, [state.succeeded]);
  // エラーの配列をオブジェクトに変換
  const errorObject = state.errors.reduce((result, current, index) => {
    result[current.field] = current.field;
    return result;
  }, {});

  return (
    <form onSubmit={handleSubmit}>
      <div className="items-center sm:flex">
        <label
          htmlFor="name"
          className="block mr-6 w-32 text-left text-gray-800 font-bold sm:inline-block sm:text-right"
        >
          名前
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="山田太郎"
          className="placeholder-gray-400 flex-1 pl-1 py-3 w-full text-gray-800 border-b-2 border-gray-400 focus:border-yellow-500 outline-none sm:w-auto"
          value={valueName}
          onChange={handleChangeName}
        />
      </div>
      <p className="text-right text-red-300">{errorObject.name ? "名前を入力してください。" : null}</p>

      <div className="items-center mt-8 sm:flex">
        <label
          htmlFor="email"
          className="block mr-6 w-32 text-left text-gray-800 font-bold sm:inline-block sm:text-right"
        >
          メール
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="○○○○@example.com"
          className="placeholder-gray-400 flex-1 pl-1 py-3 w-full text-gray-800 border-b-2 border-gray-400 focus:border-yellow-500 outline-none sm:w-auto"
          value={valueEmail}
          onChange={handleChangeEmail}
        />
      </div>
      <p className="text-right text-red-300">{errorObject.email ? "メールアドレスを入力してください。" : null}</p>

      <div className="items-start mt-8 sm:flex">
        <label
          htmlFor="message"
          className="block mr-6 pb-3 w-32 text-left text-gray-800 font-bold sm:inline-block sm:p-0 sm:text-right"
        >
          メッセージ
        </label>
        <textarea
          id="message"
          name="message"
          rows="8"
          className="placeholder-gray-400 flex-1 pb-3 pl-1 w-full text-gray-800 border-b-2 border-gray-400 focus:border-yellow-500 outline-none sm:w-auto"
          placeholder=""
          value={valueMessage}
          onChange={handleChangeMessage}
        ></textarea>
      </div>
      <p className="text-right text-red-300">{errorObject.message ? "メッセージを入力してください。" : null}</p>

      <div className="mt-8 text-right">
        <button
          className={`px-8 py-3 text-white font-bold  border-2 rounded-lg ${
            state.submitting
              ? "bg-yellow-200 cursor-default border-yellow-200"
              : "hover:text-yellow-500 hover:bg-white bg-yellow-500 border-yellow-500"
          }`}
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "送信中..." : "送信"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
