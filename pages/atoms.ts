import { atom } from "recoil";

const isDarkMode =
  typeof window !== "undefined" ? sessionStorage.getItem("isDarkMode") : null;

export const themeState = atom<boolean>({
  key: "themeState",
  default: isDarkMode === "true" ? true : false,
});

export const clickedState = atom<null>({
  key: "clickedState",
  default: null,
});
