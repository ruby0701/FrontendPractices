import { useState } from "react"
import { useContext } from "react";
import { AppContext } from "../App"

export const ChangeProfile = () => {
    const { setUserName } = useContext(AppContext);
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            <input onChange={(event) => {
                setNewUsername(event.target.value);
            }}>

            </input>
            <button
                onClick={() => {
                    setUserName(newUsername);
                }}>Change username</button>
        </div>
    );
};