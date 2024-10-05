"use client";

import { FlexContainer } from "@cs-magic/react/components/flex-container";
import { cn } from "@cs-magic/shadcn/lib/utils";
import { Button } from "@cs-magic/shadcn/ui/button";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

import NeuroraLogoSVG from "@assets/branding/assistant/assistant_logo.svg";

export default function HomePage() {
  return (
    // <BackgroundLines>
    <FlexContainer
      orientation={"vertical"}
      className={cn(
        "!gap-8 transition",
        "ease-in", // todo: ease-* 是啥, ref: https://tailwindcss.com/docs/transition-timing-function
        "duration-1000",
        // "duration-[3s]", // todo: why duration with arbitrary value not works
      )}
    >
      <h2 className={"text-4xl gradient-1 text-center "}>
        Your AI Knowledge Companion
      </h2>

      <div
        className={
          "text-md sm:text-2xl text-center w-full sm:w-[1080px] text-[rgb(161,161,161)]"
        }
      >
        <p>
          Neurora empowers{" "}
          <Link
            href={"https://www.youtube.com/watch?v=5sMBhDv4sik"}
            className={"underline"}
          >
            thinkers
          </Link>{" "}
          with smart{" "}
          <Link
            href={"https://en.wikipedia.org/wiki/Personal_knowledge_management"}
            className={"underline"}
          >
            PKM
          </Link>{" "}
          tools,
          <br /> turning scattered pieces into brilliant insights.
        </p>
      </div>

      <div>
        <Button
          className={
            "py-6 px-8 text-2xl rounded-2xl focus:text-primary-foreground"
          }
          onClick={() => {
            console.log("clicked");
            toast("todo");
          }}
        >
          Join Waitlist
        </Button>
      </div>

      <NeuroraLogoSVG color={"hsl(206, 75%, 49%)"} width={256} height={256} />

      {/*<div className={"bg-indigo-500 w-full h-20"} />*/}
    </FlexContainer>
    // </BackgroundLines>
  );
}
