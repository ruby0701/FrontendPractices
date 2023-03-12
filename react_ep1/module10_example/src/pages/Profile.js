import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react";
import { AppContext } from "../App"


export const Profile = () => {
    const { userName, setUserName } = useContext(AppContext);

    return <div>profile, user is {userName}
        <ChangeProfile setUserName={setUserName}></ChangeProfile>
    </div>;
};