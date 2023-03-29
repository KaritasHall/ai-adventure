import Head from "next/head";
import styles from "@/styles/index.module.css";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { CreateCompletionResponse } from "openai";

export default function Game() {
  const { isLoading, error, data } = useQuery<CreateCompletionResponse>(
    ["openaiFetch"],
    async () => {
      const res = await fetch("/api/generate");
      return res.json();
    },
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  console.log(data);

  return (
    <>
      <Head>
        <title>AI adventure</title>
        <meta name="description" content="AI text adventure game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/blog">Blog</Link>
        <h3>AI adventure</h3>
        {data?.choices.map((choice, index) => (
          <p key={index}>{choice?.text}</p>
        ))}
      </main>
    </>
  );
}
