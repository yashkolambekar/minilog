"use client";

import { useEffect, useState } from "react";

const NewPost = () => {

    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");

    useEffect(() => {
        let newTitle = title;
        newTitle = newTitle.toLowerCase()
        newTitle = newTitle.replace(/[^a-z-\s]+/g, "");
        newTitle = newTitle.replaceAll(/\s/g, "-");
        newTitle = newTitle.replaceAll(/-$/g, "");
        setSlug(newTitle);
    }, [title]);


    return (
        <>
            <p className="text-[1.3em]">New Post</p>
            <div className="mt-10">
                <div>
                    <p className="opacity-50 text-[0.7em]">Title</p>
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                        
                    }} className="bg-[#1d1d1d] mt-1 py-2 px-3 w-full rounded" type="text" value={title}/>
                </div>
                <div className="mt-5">
                    <p className="opacity-50 text-[0.7em]">Slug</p>
                    <input onChange={(e) => {
                        setSlug(e.target.value);
                    }} className="bg-[#1d1d1d] mt-1 py-2 px-3 w-full rounded" type="text" value={slug} />
                </div>
            </div>
        </>
    )
}

export default NewPost;
