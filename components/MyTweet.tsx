import { Tweet } from "@prisma/client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import useSWR from "swr";
import moment from "moment";
import router from "next/router";

interface TweetResponse {
  ok: boolean;
  tweets: Tweet[];
}
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
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
export default function MyTweet() {
  const { data, mutate } = useSWR<TweetResponse>("/api/tweet/myTweet");
  useEffect(() => {
    mutate();
  });
  console.log(data?.tweets);
  return (
    <motion.div
      className="h-full p-4 flex flex-col gap-4 rounded-lg "
      variants={container}
    >
      {data?.tweets.length !== 0 ? (
        data?.tweets?.map((tweet) => (
          <motion.div
            key={tweet.id}
            className="py-5 px-3 flex text-sm cursor-pointer border-violet-100 border-2 rounded-lg bg-violet-100 justify-between items-center"
            variants={item}
            whileHover={{ scale: 1.03 }}
            onClick={() => router.replace(`/tweets/${tweet.id}`)}
          >
            <p>{tweet.content}</p>
            <span className="text-violet-500 text-xs">
              {moment(tweet.updateAt).format("YYYY.MM.DD")}
            </span>
          </motion.div>
        ))
      ) : (
        <p className="text-center text-violet-600">
          작성한 트윗이 존재하지 않습니다.
        </p>
      )}
    </motion.div>
  );
}
