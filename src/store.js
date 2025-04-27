import { atom } from "recoil";

export const currentSectionsState = atom({
    key: "currentSectionsState",
    default: 1,
  });

export const navTextColorState = atom({
    key: "navTextColorState",
    default: "#111",
});