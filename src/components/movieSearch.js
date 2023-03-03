import { useContext, useRef, useEffect } from "react";
import { SearchContext } from "../contexts/searchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieSearch = () => {
  const { search, setSearch, setResponseSearch, setResponseError } =
    useContext(SearchContext);
  const navigate = useNavigate();
  const ref = useRef(null);

  const HandleSubmit = (e) => {
    setSearch(e.target.search.value);
    e.preventDefault();
    ref.current.value = "";
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&plot=full&apikey=4aa60b1b`)
      .then((response) => {
        setResponseSearch(response.data.Search);
        if (response.data.Response !== "undefined")
          setResponseError(response.data.Response);
      });
  }, [search, setResponseSearch, setResponseError]);

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          ref={ref}
          id="searchInput"
          type="text"
          name="search"
          placeholder="Search..."
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MovieSearch;
