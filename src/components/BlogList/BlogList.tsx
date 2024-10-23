"use client";

import { RecoilRoot } from "recoil";
import BlogListItem from "./BlogListItem/BlogListItem";
import CustomCursor from "../CustomCursor/CustomCursor";

function BlogList() {
  interface blogListItem {
    title: string;
    date: string;
  }

  let listOfBlogs: Array<blogListItem> = [
    {
      title: "Initialisation",
      date: "July 3, 2024",
    },
    {
      title: "Taking some Ls",
      date: "July 4, 2024",
    },
    {
      title: "Actions are Supreme",
      date: "July 6, 2024",
    },
    {
      title: "Un-understandable",
      date: "July 8, 2024",
    },
    {
      title: "Rap mentality",
      date: "July 12, 2024",
    },
    {
      title: "Most Successful Person in my life",
      date: "July 23, 2024",
    },
    {
      title: "3 am thoughts",
      date: "August 8, 2024",
    },
    {
      title: "Group-work",
      date: "August 13, 2024",
    },
    {
      title: "Working without proper plans is bullshit",
      date: "August 25, 2024",
    },
    {
      title: "Punctual",
      date: "August 30, 2024",
    },
    {
      title: "Fighting Brain Rot",
      date: "October 8, 2024",
    },
  ];

  listOfBlogs = listOfBlogs.reverse();

  return (
    <>
      <RecoilRoot>
      <CustomCursor />
        <div className="flex  flex-col mt-10">
          {listOfBlogs.map((i) => {
            return <BlogListItem key={i.title} data={i} />;
          })}
        </div>
      </RecoilRoot>
    </>
  );
}

export default BlogList;
