import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/prismic-components/Bounded/Bounded";
import { imgCaption, imgContainer } from "./image.css";

// todo: define slice type
const Image = ({ slice }: { slice: any }) => {
  const image = slice.primary.image;

  return (
    <Bounded as="section" size={slice.variation === "wide" ? "widest" : "base"}>
      <figure className={imgContainer}>
        {prismicH.isFilled.image(image) && (
          <div>
            <PrismicNextImage field={image} sizes="100vw" className="w-full" />
          </div>
        )}
        {prismicH.isFilled.richText(slice.primary.caption) && (
          <figcaption className={imgCaption}>
            <PrismicRichText field={slice.primary.caption} />
          </figcaption>
        )}
      </figure>
    </Bounded>
  );
};

export default Image;
