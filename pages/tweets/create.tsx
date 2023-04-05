import useMutation from "../lib/client/useMutation";
import { NextPage } from "next";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import router from "next/router";

interface CreateForm {
  email: string;
  userName: string;
  password: string;
}

interface MutationResult {
  ok: boolean;
  error?: string;
}

const Login: NextPage = () => {
  const [create, { loading, data, error }] =
    useMutation<MutationResult>("/api/user/create");
  const { register, handleSubmit, reset } = useForm<CreateForm>();
  const onValid = (data: CreateForm) => {
    create(data);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push("/login");
    }
    reset();
  }, [data, router]);
  const loginClick = () => {
    router.push("/login");
  };
  console.log(data, error);
  return (
    <div className="bg-violet-500  h-screen w-screen px-6 flex flex-col justify-center gap-7">
      <div>
        <svg viewBox="0 0 22 22" className="fill-white w-14 pb-3 ml-2">
          <g>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </g>
        </svg>
        <h1 className="font-bold text-3xl text-white">
          계정이 없으신가요? 지금 가입하세요!
        </h1>
      </div>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="flex flex-col gap-5 pt-5">
          <input
            id="userName"
            required
            {...register("userName")}
            type="text"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-300 focus:border-amber-300"
            placeholder="userName"
          />
          <input
            id="email"
            required
            {...register("email")}
            type="text"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-300 focus:border-amber-300"
            placeholder="email"
          />
          {!data?.ok ? (
            <span className="text-sm tracking-widest text-orange-500 font-semibold">
              {data?.error}
            </span>
          ) : null}
          <input
            id="password"
            required
            {...register("password")}
            type="text"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-300 focus:border-amber-300"
            placeholder="password"
          />

          <input
            type="submit"
            value="가입하기"
            className="appearance-none w-full px-3 py-2 text-white tracking-widest font-semibold bg-amber-400 border border-amber-400 rounded-md shadow-sm focus:ring-amber-300 focus:border-amber-300"
          />
        </div>
      </form>
      <div>
        <h2 className="mt-10 text-white">이미 계정이 있으신가요?</h2>
        <button
          className="appearance-none w-full mt-2 py-2 px-3 text-white tracking-widest font-semibold bg-amber-400 border border-amber-400 rounded-md shadow-sm focus:ring-amber-300 focus:border-amber-300"
          onClick={loginClick}
        >
          로그인
        </button>
      </div>
    </div>
  );
};
export default Login;
