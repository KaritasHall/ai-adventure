import "@/styles/vanilla-global.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  blogThemePeach,
  blogThemePurple,
  blogThemeRoseGarden,
  blogThemeWarm,
} from "@/styles/themes.css";
import { useState, useEffect, useMemo } from "react";
import Head from "next/head";

const queryClient = new QueryClient();

const blogThemes = ["peach", "roseGarden", "purple", "warm"];

const getThemeFromSessionStorage = () => {
  if (typeof window !== "undefined") {
    const theme = sessionStorage.getItem("blogTheme");
    return theme ? JSON.parse(theme) : null;
  }
  return null;
};

const setThemeInSessionStorage = (theme: string) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("blogTheme", JSON.stringify(theme));
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(blogThemes[0]);

  useEffect(() => {
    const sessionTheme = getThemeFromSessionStorage();

    if (sessionTheme) {
      setTheme(sessionTheme);
    } else {
      const newTheme =
        blogThemes[Math.floor(Math.random() * blogThemes.length)];
      setThemeInSessionStorage(newTheme);
      setTheme(newTheme);
    }
  }, []);

  const activeTheme = useMemo(() => {
    if (theme === "peach") return blogThemePeach;
    if (theme === "roseGarden") return blogThemeRoseGarden;
    if (theme === "purple") return blogThemePurple;
    if (theme === "warm") return blogThemeWarm;

    return blogThemePeach;
  }, [theme]);
  console.log({ theme, activeTheme });

  return (
    <>
      <Head>
        <title>AI Adventure</title>
        <meta name="description" content="AI text adventure game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FF69B4" />

        <link rel="icon" href="/crystal-ball.png" />
      </Head>
      <div className={activeTheme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </div>
    </>
  );
}
