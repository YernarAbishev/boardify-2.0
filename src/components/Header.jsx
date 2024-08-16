import { useState } from "react";
import logo from "../assets/images/header-logo.svg";
import searchIcon from "../assets/images/search.svg";
import {useNavigate, Link} from "react-router-dom"
import { HOME_PAGE, SEARCH_PAGE } from "../utils/consts";

function Header() {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        navigate(SEARCH_PAGE, {state: {query}});
    }


    return (
        <header className="header">
            <div className="container header-row">
                <Link to={HOME_PAGE} className="logo">
                    <img src={logo} alt="Header logo" />
                </Link>
                <form onSubmit={handleSearch} className="search-bar">
                    <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" placeholder="Найдите что угодно..." className="search" />
                    <button className="btn is-success">
                        <img src={searchIcon} alt="Search icon" />
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Header;