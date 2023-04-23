import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { getExcerpt } from "@/lib/getExcerpt";
import { dateFormatter } from "@/lib/dateFormatter";
import { Heading } from "@/components/prismic-components/Heading/Heading";
import { dateText, excerptText, listItem, overview } from "./article.css";

export const Article = ({ article }: { article: any }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);

  return (
    <li className={listItem}>
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
