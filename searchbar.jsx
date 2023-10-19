import "./searchbar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const nav = useNavigate();

    async function handleClick(event)
    {
        try
        {
            nav('/plans');
            console.log("Redirected to plans")
        }
        catch(error)
        {
            console.log("Not able to redirect:", error.message)
        }
    }

    return(
    <div className="Search_bar"> 
        <p>DEVDeakin</p>   
        <input type="search" placeholder='search' />
        <p>Post</p>
        <p>Login</p>
    </div>
    );
};

export default SearchBar;