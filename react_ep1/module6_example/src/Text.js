import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("");
    useEffect(() => {
        //call when component mounts, when first come to the webpage
        //whenever re-renders, will be called again

        return () => {
            //called when unmount
            //can do dome clean up in this stage
        };

        //[] can specify what stage changes to act on
    }, []);

    return (
        <div>
            <input onChange={(event) => {
                setText(event.target.value);
            }}></input>

            <h1>{text}</h1>
        </div>

    );
}