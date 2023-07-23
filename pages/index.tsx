import useUser from "@lib/client/useUser";
import { Tweet } from "@prisma/client";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useMutation from "@lib/client/useMutation";
import router from "next/router";
import Tweets from "@components/Tweets";
import Layout from "@components/Layout";

interface UploadTweet {
  content: string;
}

interface UploadTweetMutaite {
  ok: boolean;
  tweet: Tweet;
}

const Home: NextPage = () => {
  const {} = useUser();

  const { register, handleSubmit, reset } = useForm<UploadTweet>();
  const [uploadTweet, { data: uploadTweetData }] =
    useMutation<UploadTweetMutaite>("/api/tweet");
  const onValid = (validForm: UploadTweet) => {
    uploadTweet(validForm);
  };
  useEffect(() => {
    if (uploadTweetData?.ok) {
      reset();
    }
  }, [uploadTweetData, router]);

  return (
    <div>
      <div className="flex flex-col h-screen ">
        <Layout />
        <div className="flex h-full">
          <div className="flex flex-col w-full relative z-0">
            <form
              onSubmit={handleSubmit(onValid)}
              className="pb-2 bg-violet-50 "
            >
              <div className="pt-6 w-full flex flex-col ">
                <input
                  type="text"
                  placeholder="무슨 일이 일어나고 있나요?"
                  className=" p-5 h-32 bg-violet-50 cursor-pointer"
                  id="content"
                  {...register("content")}
                />
                <input
                  className="appearance-none m-2 py-2 px-3 text-gray-800 bg-amber-300 border-amber-300 rounded-2xl focus:ring-amber-300 focus:border-amber-300 cursor-pointer"
                  type="submit"
                  value="트윗하기"
                />
              </div>
            </form>
            <Tweets />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
