"use client";

import { useEffect } from "react";

const CommonFunctions = () => {

    let pathName = window.location.pathname;

    useEffect(() => {
        if(pathName === "/"){
            document.body.style.cursor = "none";
        }
    })

     

    return (
        <>

        </>
    )
}

export default CommonFunctions;