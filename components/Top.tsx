import { motion, useCycle } from "framer-motion";
import React from "react";
import { BsPerson, BsX } from "react-icons/bs";
import Mypage from "./Mypage";
import { useRouter } from "next/router";

const sidebar = {
  open: {
    clipPath: `circle(2200px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Top() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const router = useRouter();
  const homeClick = () => {
    router.push("/");
  };
  return (
    <>
      <div className="h-14 w-full relative flex justify-between items-center p-2 border-b">
        <div onClick={() => toggleOpen()} className="cursor-pointer">
          {isOpen ? <BsX size={32} /> : <BsPerson size={32} />}
        </div>
        <h2
          className="text-violet-500 font-bold flex justify-center cursor-pointer"
          onClick={homeClick}
        >
          Sweet
          <svg viewBox="0 0 22 22" className="fill-violet-500 w-5">
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </h2>
        <div></div>
      </div>
      <div>
        {isOpen ? (
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="absolute z-10 w-full h-screen"
          >
            <motion.div className="w-full bg-white h-full" variants={sidebar}>
              <Mypage toggle={isOpen} />
            </motion.div>
          </motion.div>
        ) : null}
      </div>
    </>
  );
}
