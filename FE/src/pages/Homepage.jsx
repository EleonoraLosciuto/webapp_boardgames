import { useEffect } from "react";
import axios from "axios";

const Homepage = () => {
    // useEffect for fetching data from backend - dependency array is empty as we only call the DB on mounting
    useEffect(() => {
        axios.get('http://localhost:3000/boardgames')
            .then((res) => (console.log("boardgames index: ", res.data)))
            .catch((err) => (console.error("fetching data error: ", err)));
    }, [])

    return (
        <div className="dashboard">
            DASHBOARD GIOCHI
        </div>
    )
}

export default Homepage;