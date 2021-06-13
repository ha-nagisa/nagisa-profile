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
          <Image width={600} height={300} src={urlFor(asset.url).height(600).fit("max").url()} alt={alt} />
        </div>
      );
    },
  },
};

const ArticleContent = ({ content }) => {
  return <BlockContent serializers={serializers} blocks={content} />;
};

export default ArticleContent;
