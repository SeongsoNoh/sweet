import { Tweet, User } from "@prisma/client";
import moment from "moment";
import Link from "next/link";
import { useEffect } from "react";
import useSWR from "swr";

interface TweetWithCount extends Tweet {
  _count: {
    favs: number;
    answers: number;
  };
  user: User;
  updateAt: Date;
}

interface TweetResponse {
  ok: boolean;
  tweets: TweetWithCount[];
}

export default function Tweets() {
  const { data, mutate } = useSWR<TweetResponse>("/api/tweet");
  useEffect(() => {
    mutate();
  });
  return (
    <div className="h-full flex flex-col divide-y">
      {data?.tweets?.map((tweet) => (
        <div
          key={tweet.id}
          className="p-4 border-t border-solid flex space-x-5"
        >
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"
              alt=""
              className="rounded-full w-12 h-12"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex space-x-3 items-center">
              <Link href={`/profile`} legacyBehavior>
                <span className="font-medium text-lg">
                  {tweet.user.userName}
                </span>
              </Link>
              <span className="font-normal text-sm text-gray-500">
                {moment(tweet.updateAt).format("YYYY.MM.DD")}
              </span>
            </div>

            <div>
              <Link href={`/tweets/${tweet.id}`} legacyBehavior>
                <a className="">{tweet.content}</a>
              </Link>
              <div className="mt-5 flex space-x-4">
                <div className="flex space-x-2 items-center">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-6 h-6 stroke-violet-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    ></path>
                  </svg>
                  <span>{tweet?._count?.answers}</span>
                </div>
                <div className="flex space-x-2 items-center">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-6 h-6 stroke-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    ></path>
                  </svg>
                  <span>{tweet?._count?.favs}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
