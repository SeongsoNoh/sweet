import useUser from "@lib/client/useUser";
import { Tweet, User } from "@prisma/client";
import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import useSWR from "swr";
import Layout from "@components/layout";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useMutation from "@lib/client/useMutation";
import router from "next/router";

interface TweetWithCount extends Tweet {
  _count: {
    favs: number;
    comments: number;
  };
  user: User;
  updateAt: Date;
}

interface TweetResponse {
  ok: boolean;
  tweets: TweetWithCount[];
}

interface UploadTweet {
  content: string;
}

interface UploadTweetMutaite {
  ok: boolean;
  tweet: Tweet;
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<TweetResponse>("/api/tweet");
  const { register, handleSubmit, reset } = useForm<UploadTweet>();
  const [uploadTweet, { loading: uploadTweetLoading, data: uploadTweetData }] =
    useMutation<UploadTweetMutaite>("/api/tweet");
  const onValid = (validForm: UploadTweet) => {
    // if (!uploadTweetLoading) return;
    uploadTweet(validForm);
    console.log(validForm);
  };
  useEffect(() => {
    if (uploadTweetData?.ok) {
      // router.push(`/tweet/${uploadTweetData.tweet.id}`);
      reset();
      // router.push("/");
      location.reload();
    }
  }, [uploadTweetData, router]);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex ">
        <Layout hasTabBar></Layout>
        <div className="flex flex-col w-full">
          <div className="bg-white h-12 w-full max-w-xl text-lg px-3 font-medium  fixed text-gray-800 border-b top-0  flex items-center">
            <span className="">홈</span>
          </div>
          <form onSubmit={handleSubmit(onValid)}>
            <div className="pt-12  w-full flex flex-col ">
              <input
                type="text"
                placeholder="무슨 일이 일어나고 있나요?"
                className=" p-5 h-32"
                {...register("content")}
              />
              <input
                className="appearance-none m-2 py-2 px-3 text-gray-800 bg-amber-300 border-amber-300 rounded-2xl focus:ring-amber-300 focus:border-amber-300 cursor-pointer"
                type="submit"
                value="트윗하기"
              />
            </div>
          </form>
          <div className="mt-6 h-full border flex flex-col divide-y">
            {data?.tweets?.map((tweet) => (
              <div
                key={tweet.id}
                className="p-4 border-b border-solid flex space-x-5"
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
                    <span className="font-normal text-base text-gray-500">
                      {tweet.updateAt}
                    </span>
                  </div>

                  <div className="">
                    <Link href={`/tweets/${tweet.id}`} legacyBehavior>
                      <a className="">{tweet.content}</a>
                    </Link>
                    <div className="mt-5 flex space-x-2">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        ></path>
                      </svg>
                      <span>{tweet?._count?.comments}</span>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
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
            ))}
          </div>
        </div>
      </div>
    </div>
    // </Layout>
  );
};
export default Home;
