import Head from "next/head";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { createClient } from "@root/prismicio";
import { components } from "@root/slices";
import { Layout } from "@/components/prismic-components/Layout";
import { Bounded } from "@/components/prismic-components/Bounded/Bounded";
import { Heading } from "@/components/prismic-components/Heading/Heading";
import { HorizontalDivider } from "@/components/prismic-components/HorizontalDivider/HorizontalDivider";
import {
  articleContainer,
  articleDate,
  articleTitle,
  blogDate,
  blogLink,
  blogTitle,
  latestPostsContainer,
  latestPostsHeading,
  latestPostsList,
  latestPostsSection,
} from "./styles.css";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const LatestArticle = ({ article }: { article: any }) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <li>
      <h1 className={blogTitle}>
        <PrismicLink document={article}>
          <PrismicText field={article.data.title} />
        </PrismicLink>
      </h1>
      <p className={blogDate}>{dateFormatter.format(date ?? undefined)}</p>
    </li>
  );
};

const Article = ({ article, latestArticles, navigation, settings }: any) => {
  const date = prismicH.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <Layout
      withHeaderDivider={false}
      withProfile={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>
          {prismicH.asText(article.data.title)} |{" "}
          {prismicH.asText(settings.data.name)}
        </title>
      </Head>
      <Bounded>
        <PrismicLink href="/blog" className={blogLink}>
          &larr; Back to articles
        </PrismicLink>
      </Bounded>
      <article>
        <Bounded className={articleContainer}>
          <h1 className={articleTitle}>
            <PrismicText field={article.data.title} />
          </h1>
          <p className={articleDate}>
            {dateFormatter.format(date ?? undefined)}
          </p>
        </Bounded>
        <SliceZone slices={article.data.slices} components={components} />
      </article>
      {latestArticles.length > 0 && (
        <Bounded>
          <div className={latestPostsSection}>
            <HorizontalDivider />
            <div className={latestPostsContainer}>
              <Heading size="2xl" className={latestPostsHeading}>
                Latest articles
              </Heading>
              <ul className={latestPostsList}>
                {latestArticles.map((article: any) => (
                  <LatestArticle key={article.id} article={article} />
                ))}
              </ul>
            </div>
          </div>
        </Bounded>
      )}
    </Layout>
  );
};

export default Article;

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData });

  const article = await client.getByUID("article", params.uid);
  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      article,
      latestArticles,
      navigation,
      settings,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return {
    paths: articles.map((article) => prismicH.asLink(article)),
    fallback: false,
  };
}
