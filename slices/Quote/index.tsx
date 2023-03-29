import * as prismicH from "@prismicio/helpers";
import { PrismicText } from "@prismicio/react";

import { Bounded } from "@/components/prismic-components/Bounded";

// todo: define slice type
const Quote = ({ slice }: { slice: any }) => {
  return (
    <Bounded as="section" size="wide">
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <div className="font-serif text-3xl italic leading-relaxed">
          &ldquo;
          <PrismicText field={slice.primary.quote} />
          &rdquo;
          {prismicH.isFilled.keyText(slice.primary.source) && (
            <> &mdash; {slice.primary.source}</>
          )}
        </div>
      )}
    </Bounded>
  );
};

export default Quote;
