import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { ImagesResponse } from "openai";
import { randomError } from "@/lib/error-messages";
import { errorMessage, generatedImage } from "@/styles/game.css";
import { LoadingImage } from "./loadingImage";
import { useState } from "react";

export default function DalleImg({ imagePrompt }: { imagePrompt?: string }) {
  const { data, isError, isLoading } = useQuery<ImagesResponse>(
    [imagePrompt],
    async () => {
      const res = await fetch("/api/img", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: imagePrompt,
        }),
      });

      return res.json();
    },
    {
      // this prevents the query from running when imagePrompt is undefined
      // feature of react-query
      enabled: !!imagePrompt,
      refetchOnWindowFocus: false,
    }
  );

  const [fadeOut, setFadeOut] = useState(false);

  if (isLoading) return <LoadingImage fadeout={fadeOut} />;

  console.log("Fading out:", fadeOut);

  if (isError) {
    console.log(randomError[Math.floor(Math.random() * randomError.length)]);
    return <LoadingImage fadeout={fadeOut} />;
  }

  console.log("this is:", data);
  console.log("component mounted");

  return (
    <div>
      {data && data.data && data.data[0]?.url && (
        <Image
          src={data.data[0]?.url}
          className={generatedImage}
          alt="AI generated image of scene"
          width={200}
          height={200}
          priority={true}
          onLoad={() => {
            console.log("Image loaded"), setFadeOut(true);
          }}
        />
      )}
    </div>
  );
}
