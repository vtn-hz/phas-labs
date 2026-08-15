"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Message = { from: "cliente" | "bot"; text: string };

const MESSAGE_DELAY_MS = 1400;
const TYPING_DELAY_MS = 900;
const LOOP_PAUSE_MS = 2400;

function ChatBubble({ from, text }: Message) {
  return (
    <div
      className={cn(
        "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
        from === "cliente"
          ? "self-start bg-muted text-foreground"
          : "self-end bg-accent text-accent-foreground",
      )}
    >
      {text}
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex max-w-[80%] items-center gap-1 self-end rounded-2xl bg-accent px-4 py-3">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-foreground [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-foreground [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent-foreground" />
    </div>
  );
}

export function AnimatedChatDemo({ transcript }: { transcript: Message[] }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const messageDelay = reducedMotion ? 0 : MESSAGE_DELAY_MS;
    const typingDelay = reducedMotion ? 0 : TYPING_DELAY_MS;
    const loopPause = reducedMotion ? 0 : LOOP_PAUSE_MS;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function playFrom(index: number) {
      if (cancelled) return;
      if (index >= transcript.length) {
        timeouts.push(
          setTimeout(() => {
            if (cancelled) return;
            setVisibleCount(0);
            setTyping(false);
            playFrom(0);
          }, loopPause),
        );
        return;
      }

      const message = transcript[index];
      const isBot = message.from === "bot";

      timeouts.push(
        setTimeout(() => {
          if (cancelled) return;
          if (isBot) setTyping(true);
        }, 0),
      );

      timeouts.push(
        setTimeout(
          () => {
            if (cancelled) return;
            setTyping(false);
            setVisibleCount(index + 1);
            timeouts.push(setTimeout(() => playFrom(index + 1), messageDelay));
          },
          isBot ? typingDelay : 0,
        ),
      );
    }

    timeouts.push(setTimeout(() => playFrom(0), 0));

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [transcript]);

  return (
    <div className="flex flex-col gap-3">
      {transcript.slice(0, visibleCount).map((message, index) => (
        <ChatBubble key={index} {...message} />
      ))}
      {typing && <TypingBubble />}
    </div>
  );
}
