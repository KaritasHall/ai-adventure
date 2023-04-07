import * as prismicH from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";

import { Bounded } from "@/components/prismic-components/Bounded/Bounded";
import { text } from "./text.css";

// todo: define slice type
const Text = ({ slice }: { slice: any }) => {
  return (
    <Bounded as="section">
      {prismicH.isFilled.richText(slice.primary.text) && (
        <div className={text}>
          <PrismicRichText field={slice.primary.text} />
        </div>
      )}
    </Bounded>
  );
};

export default Text;
