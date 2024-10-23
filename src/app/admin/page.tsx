"use client"

import ListOfBlogs from "./_listofblogs/ListOfBlogs";

const Admin = () => {
    return (
        <>
            <p className="text-[1.3em]">Admin Panel</p>
            <div className="mt-5">
                <p className="">List of Posts</p>
                <ListOfBlogs />
            </div>
        </>
    )
}

export default Admin;