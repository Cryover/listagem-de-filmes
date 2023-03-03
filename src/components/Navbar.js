import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieSearch from "./movieSearch";
import { SearchContext } from "../contexts/searchContext";

const Navbar = () => {
  const { setSearch } = useContext(SearchContext);

  const HandleSearchReset = () => {
    setSearch("");
  };

  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link to="/" onClick={HandleSearchReset}>
            Home
          </Link>
        </li>
      </ul>
      <MovieSearch />
    </nav>
  );
};

export default Navbar;
