import cursorAtom, { cursorInitState, CursorType } from "@/store/cursorAtom";
import { useSetRecoilState } from "recoil";

interface blogListItem {
  title: string;
  date: string;
}

function BlogListItem({ data }: { data: blogListItem }) {

  const cursorHoverState : CursorType = {
    // border: "border-[rgba(255,255,255,0.5)]",
    border: "border-transparent",
    bg: "bg-[rgba(255,255,255,0.13)]",
    size: "w-4 h-4",
    boxShadow: "shadow-[0_0px_50px_10px_rgba(255,255,255,0.6)]"
  };

  const setCursorState = useSetRecoilState(cursorAtom);

  const addHoverState = () => {
    setCursorState(cursorHoverState);
  };

  const removeHoverState = () => {
    setCursorState(cursorInitState);
  };

  return (
      <div
        onMouseEnter={addHoverState}
        onMouseLeave={removeHoverState}
        className="flex flex-col md:flex-row md:gap-2 w-fit items-start md:items-end opacity-50 hover:opacity-100 py-3"
      >
        <p>{data.title}</p>
        <p className="text-[0.6em] opacity-50 align-text-bottom">{data.date}</p>
      </div>
  );
}

export default BlogListItem;
