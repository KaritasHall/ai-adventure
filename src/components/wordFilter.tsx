import { useRef, useEffect } from "react";
import { you, flicker, glow, rustle } from "@/styles/game.css";

const targetWords = [
  "flicker",
  "flickering",
  "flickers",
  "flickered",
  "glow",
  "glowing",
  "glows",
  "glowed",
  "you",
  "You",
  "rustle",
  "rustling",
];

const wordStyleMap: Record<string, string> = {
  flicker: flicker,
  flickering: flicker,
  flickers: flicker,
  flickered: flicker,
  you: you,
  You: you,
  glow: glow,
  glowing: glow,
  glows: glow,
  glowed: glow,
  rustle: rustle,
  rustling: rustle,
};

interface WordWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function WordFilter({ children, className }: WordWrapperProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const paragraph = paragraphRef.current;
    if (!paragraph) return;

    const words = paragraph.textContent?.split(" ") ?? [];
    const newParagraph = document.createElement("p");
    words.forEach((word) => {
      let newElement: HTMLElement | Text;

      if (targetWords.includes(word)) {
        newElement = document.createElement("span");
        newElement.className = wordStyleMap[word] ?? "";
        newElement.textContent = word;
      } else {
        newElement = document.createTextNode(word);
      }

      newParagraph.appendChild(newElement);

      if (word !== words[words.length - 1]) {
        newParagraph.appendChild(document.createTextNode(" "));
      }
    });

    if (paragraph) {
      paragraph.innerHTML = newParagraph.innerHTML;
    }
  }, []);

  return (
    <p className={className} ref={paragraphRef}>
      {children}
    </p>
  );
}
