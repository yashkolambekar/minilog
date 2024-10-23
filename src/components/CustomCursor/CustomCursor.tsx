"use client";

import { useEffect, useRef } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import cursorAtom from "@/store/cursorAtom";

function CustomCursor() {
  const cursorDiv = useRef<HTMLDivElement | null>(null);

  const data = useRecoilValue(cursorAtom);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorDiv.current) {
        cursorDiv.current.style.left = `${e.clientX}px`;
        cursorDiv.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <RecoilRoot>
        <div
          ref={cursorDiv}
          className={`hidden md:block ${data.boxShadow} ${data.size} ${data.bg} ${data.border} border-2 rounded-full fixed pointer-events-none transition ease-in-out duration-100`}
          style={{ position: "fixed" }}
        ></div>
      </RecoilRoot>
    </>
  );
}

export default CustomCursor;
