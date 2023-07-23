import Layout from "@components/Layout";
import useMutation from "@lib/client/useMutation";
import useUser from "@lib/client/useUser";
import { cls } from "@lib/client/utils";
import { Answer, Tweet, User } from "@prisma/client";
import moment from "moment";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsTrash } from "react-icons/bs";
import useSWR from "swr";

interface AnswerWithUser extends Answer {
  user: User;
}

interface TweetWithUser extends Tweet {
  user: User;
  answers: AnswerWithUser[];
  _count: {
    answers: number;
    favs: number;
  };
}

interface TweetDetailResponse {
  ok: boolean;
  tweet: TweetWithUser;
  isLiked: boolean;
}

interface AnswerForm {
  answer: string;
}

interface AnswerResponse {
  ok: boolean;
  response: Answer;
}

const TweetDetail: NextPage = () => {
  const { user } = useUser();
  const router = useRouter();
  const { data, mutate } = useSWR<TweetDetailResponse>(
    router.query.id ? `/api/tweet/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/tweet/${router.query.id}/fav`);
  const onFavClick = () => {
    if (!data) return;
    mutate((prev) => prev && { ...prev, isLiked: !data.isLiked }, false);
    toggleFav({});
  };
  const [sendAnswer, { data: answerData }] = useMutation<AnswerResponse>(
    `/api/tweet/${router.query.id}/answers`
  );
  const { register, handleSubmit, reset } = useForm<AnswerForm>();
  const onValid = (form: AnswerForm) => {
    sendAnswer(form);
  };
  const [deleteBtn] = useMutation(`/api/tweet/${router.query.id}/delete`);

  const deleteClick = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteBtn({});
      alert("삭제되었습니다.");
      router.push("/");
    } else {
      alert("취소되었습니다.");
    }
  };

  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset, mutate]);

  return (
    <div className="flex flex-col">
      <Layout />
      <div className="w-full space-y-7">
        <div className="flex p-4 space-x-7 items-center fixed border-b w-full h-12 bg-white">
          <div onClick={() => router.back()}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              ></path>
            </svg>
          </div>
          <span className="font-extrabold text-xl">트윗</span>
        </div>
        <div className="pt-8 px-6">
          <div className="flex justify-between mt-2 items-center">
            <div className="flex space-x-4">
              <img
                src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"
                alt=""
                className="rounded-full w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="font-bold">{data?.tweet?.user?.userName}</span>
                <span className="font-normal text-base text-gray-500">
                  계정닉네임
                </span>
              </div>
            </div>
            {user?.id === data?.tweet.user.id ? (
              <div onClick={deleteClick} className="cursor-pointer">
                <BsTrash size={20} />
              </div>
            ) : null}
          </div>
          <div className="mt-5 flex flex-col space-y-4">
            <div>{data?.tweet?.content}</div>
            <div className="text-slate-600">
              {moment(data?.tweet?.createAt).format("YYYY.MM.DD")}
            </div>
            <div className="border-t py-4 px-3 flex space-x-2 justify-between">
              <div className="flex space-x-2 items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  ></path>
                </svg>
                <span>{data?.tweet?._count?.answers}</span>
              </div>
              <div className="flex space-x-2 items-center">
                <button
                  onClick={onFavClick}
                  className={cls(
                    "rounded-md flex items-center justify-center hover:bg-gray-100",
                    data?.isLiked
                      ? "text-red-500 hover:text-red-600"
                      : "text-gray-400 hover:text-gray-500"
                  )}
                >
                  <svg
                    className="h-6 w-6 "
                    fill={data?.isLiked ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <span>{data?.tweet?._count?.favs}</span>
              </div>
              <div className="flex space-x-2 items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onValid)}>
            <div className="border-y py-6 flex space-x-2 justify-between items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"
                alt=""
                className="rounded-full w-12 h-12"
              />
              <textarea
                cols={35}
                rows={3}
                required
                className="p-3 border-none focus:border-none w-full"
                placeholder="답글을 남겨보세요."
                {...register("answer")}
              />
              <input
                className="appearance-none m-2 py-2 px-5 text-gray-800 bg-amber-300 border-amber-300 rounded-3xl focus:ring-amber-300 focus:border-amber-300 cursor-pointer"
                type="submit"
                value="답글"
              />
            </div>
          </form>
          <div className="my-5 space-y-5">
            {data?.tweet?.answers?.map((answer) => (
              <div
                key={answer.id}
                className="border-b border-solid flex space-x-5 pb-5"
              >
                <img
                  src="https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_400x400.jpg"
                  alt=""
                  className="rounded-full w-12 h-12"
                />
                <div className="flex justify-between gap-3 w-full items-center">
                  <div className="flex flex-col ">
                    <div className="flex space-x-3 items-center">
                      {/* <Link href={`/profile`} legacyBehavior> */}
                      <div>
                        <span className="font-medium text-lg">
                          {answer?.user?.userName}
                        </span>
                      </div>
                      {/* </Link> */}
                      <span className="font-normal text-base text-gray-500">
                        {moment(answer?.createAt).format("YYYY.MM.DD")}
                      </span>
                    </div>
                    <div className="">{answer.answer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetDetail;
