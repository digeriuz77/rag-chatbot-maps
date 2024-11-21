"use client";


import { Attachment, Message } from "ai";
import { useChat } from "ai/react";
import Link from "next/link";
import { useState } from "react";

import { Message as PreviewMessage } from "@/components/custom/message";
import { useScrollToBottom } from "@/components/custom/use-scroll-to-bottom";

import DotsLoader from "./dot-loader";
import { BotIcon, RagieLogo } from "./icons";
import { MultimodalInput } from "./multimodal-input";
import { Overview } from "./overview";

export function Chat({
  id,
  initialMessages,
}: {
  id: string;
  initialMessages: Array<Message>;
}) {
  const { messages, handleSubmit, input, setInput, append, isLoading, stop } =
    useChat({
      body: { id },
      initialMessages,
      onFinish: () => {
        window.history.replaceState({}, "", `/chat/${id}`);
      },
    });

  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  const [attachments, setAttachments] = useState<Array<Attachment>>([]);
  return (
    <div className="flex flex-row justify-center pb-4 md:pb-8 h-dvh bg-background">
      <div className="flex flex-col justify-between items-center gap-4">
        <div
          ref={messagesContainerRef}
          className="flex flex-col gap-4 h-full w-dvw items-center overflow-y-scroll"
        >
          {messages.length === 0 && <Overview />}

          {messages.map((message) => (
            <PreviewMessage
              key={message.id}
              role={message.role}
              content={message.content}
              attachments={message.experimental_attachments}
              toolInvocations={message.toolInvocations}
            />
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex gap-4 px-4 w-full md:w-[500px] md:px-0 first-of-type:pt-20">
              <div className="size-[24px] shrink-0 text-zinc-400">
                <BotIcon />
              </div>
              <DotsLoader />
            </div>
          )}

          <div
            ref={messagesEndRef}
            className="shrink-0 min-w-[24px] min-h-[24px]"
          />
        </div>

        <form className="flex flex-row gap-2 mb-8 sm:mb-0 relative items-end w-full md:max-w-[500px] max-w-[calc(100dvw-32px) px-4 md:px-0">
          <MultimodalInput
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            stop={stop}
            attachments={attachments}
            setAttachments={setAttachments}
            messages={messages}
            append={append}
          />
        </form>
      </div>
      <div className=" absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-sm text-dark  dark:text-white">
        <Link
          href="https://ragie.ai/?utm_source=rag-chatbot"
          className="flex gap-2 cursor-pointer items-center "
        >
          <RagieLogo/>
          <p>Powered by Ragie</p>
        </Link>
      </div>
    </div>
  );
}
