import BlockContent from "@sanity/block-content-to-react";
import HilightCode from "components/HighlightCode";
import Image from "next/image";
import { urlFor } from "lib/api";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return <HilightCode language={language}>{code}</HilightCode>;
    },
    image: ({ node: { asset, alt, position = "center" } }) => {
      return (
        <div
          className={
            position === "left" || position === "right"
              ? `float-${position} max-w-1/2 ${position === "right" ? "ml-5" : "mr-5"} mb-0.5 text-center`
              : "mb-2.5 text-center"
          }
        >
          <Image width={865} height={500} src={urlFor(asset.url).height(500).fit("max").url()} alt={alt} />
        </div>
      );
    },
    block(props) {
      switch (props.node.style) {
        case "h1":
          return <h1 className="sm:text-3xl text-2xl font-bold my-1">{props.children}</h1>;
        case "h2":
          return <h2 className="sm:text-2xl text-xl font-bold my-1">{props.children}</h2>;
        case "h3":
          return <h3 className="sm:text-xl text-lg font-bold my-1">{props.children}</h3>;
        case "h4":
          return <h4 className="sm:text-lg text-base font-bold my-1">{props.children}</h4>;
        case "li":
          return <li className="">{props.children}</li>;
        case "a":
          return <a className="underline">{props.children}</a>;
        case "blockquote":
          return <blockquote className="">{props.children}</blockquote>;
        case "normal":
          return <p className="is-family-secondary is-size-5">{props.children}</p>;
        default:
          return <p className="is-family-secondary">{props.children}</p>;
      }
    },
  },
};

const ArticleContent = ({ content }) => {
  return <BlockContent serializers={serializers} blocks={content} />;
};

export default ArticleContent;
