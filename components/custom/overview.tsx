import { motion } from "framer-motion";
import Link from "next/link";

import { VercelIcon, RagieLogo } from "./icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-[500px] mt-20 mx-4 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="border rounded-lg p-6 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
        <div className="flex justify-center mb-4 text-zinc-900 dark:text-white">
          <VercelIcon size={20} />
          <span className="mx-4">+</span>
          <RagieLogo size={20} />
        </div>
        <div>
          <p>This is an open-source RAG Chatbot template built with Ragie and the Next.js AI SDK by Vercel. It uses GPT4-o to help you generate responses from your data source.</p>
          <br />
          <p>
            You can learn more about how to self-host by visiting the{' '}
            <Link
              className="font-medium underline underline-offset-4"
              href="https://dphenomenal.com/blog/building-a-rag-chatbot"
              target="_blank"
            >
              Docs
            </Link>
            .
          </p>
        </div>
      </div>
    </motion.div>
  );
};
