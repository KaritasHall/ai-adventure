import Head from "next/head";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  ChatCompletionRequestMessage,
  CreateChatCompletionResponse,
} from "openai";
import { useEffect, useMemo, useState, useRef } from "react";
import { Loading } from "@/lib/loading";
import { randomError } from "@/lib/error-messages";
import { WordFilter } from "@/components/wordFilter";

import {
  defaultTheme,
  forestTheme,
  mansionTheme,
  abandonedTheme,
  caveTheme,
} from "@/styles/themes.css";

import {
  mainSection,
  blogLink,
  gameContent,
  gameTitle,
  playerInput,
  assistant,
  user,
  loadingMessage,
  typePrompt,
  playerInputContainer,
  header,
  latestAssistantMessage,
} from "@/styles/game.css";

import DalleImg from "@/components/dalleImg";

// This is the game loop
// We first send the inital prompt to the API and render the opening scenario
// Then we wait for the user to input a response
// Then we send the user's response along with the dialogue history to the API
// Then we fetch and render the API's response

export default function Game() {
  // States for loading, error and theme
  const [randomLoading, setRandomLoading] = useState<string>(Loading[0]);
  const [errorMessage, setErrorMessage] = useState<string>(randomError[0]);
  const [currentTheme, setCurrentTheme] = useState<string>(defaultTheme);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setErrorMessage(
      randomError[Math.floor(Math.random() * randomError.length)]
    );
  }, []);

  // The main states we need to keep track of:
  // - The user's latest input (the most recent response from the user)
  // - The dialogue history (defined as ChatCompletionRequestMessage from the openai package)
  // - The latest story teller dialogue (the most recent response from the API)
  const [userInput, setUserInput] = useState<string>("");
  const [dialogueHistory, setDialogueHistory] = useState<
    ChatCompletionRequestMessage[]
  >([]);
  const [latestStoryTellerDialogue, setLatestStoryTellerDialogue] =
    useState<ChatCompletionRequestMessage>();

  // Taking the first two sentences of the latest story teller dialogue
  // Storing it in a variable so we can use it as a prompt for the image generation
  const imagePrompt = useMemo(() => {
    if (dialogueHistory.length) {
      const promptSplit = dialogueHistory[0]?.content.split(".");
      if (!promptSplit) return "";
      if (promptSplit.length < 2) {
        return `${promptSplit[0]}.`;
      }

      return `${promptSplit[0]}.${promptSplit[1]}.`;
    } else {
      const promptSplit = latestStoryTellerDialogue?.content.split(".");
      if (!promptSplit) return "";
      if (promptSplit.length < 2) {
        return `${promptSplit[0]}.`;
      }

      return `${promptSplit[0]}.${promptSplit[1]}.`;
    }
  }, [dialogueHistory, latestStoryTellerDialogue]);

  console.log("image prompt:", imagePrompt);

  // Generate a new random loading message when the latest story teller dialogue changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    setRandomLoading(Loading[Math.floor(Math.random() * Loading.length)]);
  }, [latestStoryTellerDialogue]);

  // We use the dialogue history to create a string that we can use as a key for the query
  // This way, we can refetch the query when the dialogue history changes
  const dialogueHistoryString = useMemo(() => {
    return dialogueHistory.map((dialogue) => `${dialogue.content}`).join(". ");
  }, [dialogueHistory]);

  // We use the dialogue history string as a key for the query
  const { isLoading, error } = useQuery<CreateChatCompletionResponse>(
    [dialogueHistoryString],
    async () => {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: dialogueHistory,
        }),
      });
      return res.json();
    },
    // If the query is successful, we set the latest story teller dialogue to the first choice
    // choices (data.choices) is an array of ChatCompletionRequestMessage
    {
      onSuccess: (data) => {
        if (data.choices.length === 0) {
          console.log("empty:", data);
          return;
        }

        setLatestStoryTellerDialogue(data.choices[0].message);
      },
      refetchOnWindowFocus: false,
    }
  );

  // The handleUserInput function is called when the user types in the input field
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  // The handleSubmit function is called when the user clicks the submit button
  // It adds the user's input and the latest story teller dialogue to the dialogue history
  // It then resets the user input and the latest story teller dialogue
  const handleSubmit = async () => {
    if (userInput === "") return;
    if (latestStoryTellerDialogue) {
      setDialogueHistory((prevDialogueHistory) => [
        ...prevDialogueHistory,
        latestStoryTellerDialogue,
        { role: "user", content: userInput },
      ]);
    }
    setLatestStoryTellerDialogue(undefined);
    setUserInput("");
  };

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  // Scrollable div for the game content
  const divRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the div when the latest story teller dialogue changes
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [latestStoryTellerDialogue]);

  // Themes for the game - we switch between themes based on the latest story teller dialogue
  useEffect(() => {
    let dialogue = latestStoryTellerDialogue?.content;
    if (dialogue === undefined) {
      dialogue = dialogueHistory[dialogueHistory.length - 2]?.content;
    }
    if (dialogue?.includes("forest")) {
      setCurrentTheme(forestTheme);
    }
    if (dialogue?.includes("mansion")) {
      setCurrentTheme(mansionTheme);
    }
    if (dialogue?.includes("abandoned castle")) {
      setCurrentTheme(abandonedTheme);
    }
    if (dialogue?.includes("cave")) {
      setCurrentTheme(caveTheme);
    }
  }, [latestStoryTellerDialogue, dialogueHistory]);

  console.log(currentTheme);
  console.log(latestStoryTellerDialogue);

  return (
    <>
      <Head>
        <title>AI Adventure</title>
        <meta name="description" content="AI text adventure game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${mainSection} ${currentTheme}`}>
        <>
          <nav className={header}>
            <h3 className={gameTitle}>AI Adventure</h3>

            <Link href="/blog" className={blogLink}>
              Blog
            </Link>
          </nav>

          <DalleImg imagePrompt={imagePrompt} />

          <div className={gameContent} ref={divRef}>
            <>
              {dialogueHistory.map(({ content, role }, index) => (
                <WordFilter
                  key={index}
                  className={role === "user" ? user : assistant}
                >
                  {content}
                </WordFilter>
              ))}
              {latestStoryTellerDialogue && (
                <WordFilter
                  key={latestStoryTellerDialogue.content}
                  className={
                    latestStoryTellerDialogue.role === "user"
                      ? user
                      : latestAssistantMessage
                  }
                >
                  {latestStoryTellerDialogue.content}
                </WordFilter>
              )}
              {isLoading && <p className={loadingMessage}>{randomLoading}</p>}
              {error && <p className={errorMessage}>{errorMessage}</p>}
            </>
            {latestStoryTellerDialogue && (
              <div className={playerInputContainer}>
                <p className={typePrompt}>&gt;</p>
                <input
                  type="text"
                  value={userInput}
                  onChange={handleUserInput}
                  className={playerInput}
                  autoFocus={true}
                  onKeyDown={handleKeyPress}
                />
              </div>
            )}
          </div>
        </>
      </main>
    </>
  );
}
