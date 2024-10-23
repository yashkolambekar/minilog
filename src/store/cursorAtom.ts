import { atom } from "recoil";

interface CursorType {
  border: string;
  bg: string;
  size: string;
  boxShadow: string
}

const cursorInitState : CursorType = {
    border: "border-[rgba(255,255,255,0.5)]",
    bg: "bg-transparent",
    size: "w-4 h-4",
    boxShadow: ""
  }

const cursorAtom = atom<CursorType>({
  key: "cursorAtom", 
  default: cursorInitState,
});

export type {CursorType};
export {cursorInitState};
export default cursorAtom;
