import { useContext } from "react";
import { AppContext } from "../App"
import { useQuery } from "@tanstack/react-query"
import Axios from "axios";
export const Home = () => {
    const { userName } = useContext(AppContext);
    const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    if (isError) {
        return <h1>There has been an error!</h1>
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return <h1>This is the home page, and user is {userName} <p>{data?.fact}</p>
        <button onClick={refetch}>
            Update Data
        </button>
    </h1>;
};