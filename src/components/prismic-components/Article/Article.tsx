import { PrismicLink, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import { getExcerpt } from "@/lib/getExcerpt";
import { findFirstImage } from "@/lib/findFirstImage";
import { dateFormatter } from "@/lib/dateFormatter";
import { Heading } from "@/components/prismic-components/Heading/Heading";
import {
  dateText,
  excerptText,
  imgContainer,
  listItem,
  overview,
} from "./article.css";

export const Article = ({ article }: { article: any }) => {
  const featuredImage =
    (prismicH.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  return (
    <li className={listItem}>
      <PrismicLink document={article} tabIndex={-1}>
        <div className={imgContainer}>
          {prismicH.isFilled.image(featuredImage) && (
            <PrismicNextImage field={featuredImage} fill={true} />
          )}
        </div>
      </PrismicLink>
      <div className={overview}>
        <Heading as="h2">
          <PrismicLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicLink>
        </Heading>
        <p className={dateText}>{dateFormatter.format(date ?? undefined)}</p>
        {excerpt && <p className={excerptText}>{excerpt}</p>}
      </div>
    </li>
  );
};
