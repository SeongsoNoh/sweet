import { motion } from "framer-motion";
import React from "react";
import MyTweet from "@components/MyTweet";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function Mypage({ toggle }) {
  return toggle ? (
    <motion.div
      className="absolute w-full h-full p-3 flex flex-col"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* <motion.button
        className="border border-gray-300 py-1 px-3 rounded-lg text-violet-500 font-semibold"
        variants={item}
      >
        + New Tweet
      </motion.button> */}
      <MyTweet />
    </motion.div>
  ) : null;
}
