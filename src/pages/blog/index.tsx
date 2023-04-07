import Head from "next/head";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "@root/prismicio";
import { Layout } from "@/components/prismic-components/Layout";
import { Bounded } from "@/components/prismic-components/Bounded/Bounded";
import { Article } from "@/components/prismic-components/Article/Article";
import { indexArticleList } from "./styles.css";

const Index = ({ articles, navigation, settings }: any) => {
  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Head>
        <title>{prismicH.asText(settings.data.name)}</title>
      </Head>
      <Bounded size="widest">
        <ul className={indexArticleList}>
          {articles.map((article: any) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </Bounded>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData });

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return {
    props: {
      articles,
      navigation,
      settings,
    },
  };
}
