import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../contexts/searchContext";

const MovieList = () => {
  const { search, responseSearch, setDetails, responseError } =
    useContext(SearchContext);

  const IsUndefined = (response) => {
    if (response === "False" && search !== "") {
      return <h2>Movie not Found</h2>;
    } else {
      return (
        <div>
          {responseSearch &&
            responseSearch.map((movie, index) => {
              return (
                <div key={index}>
                  <Link
                    to={`/movie/${movie.Title}`}
                    onClick={() => {
                      setDetails(movie.Title);
                    }}
                  >
                    <img src={movie.Poster} alt="Poster"></img>
                  </Link>
                  <br></br>
                  <h2>{movie.Title}</h2>
                </div>
              );
            })}
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Movies</h1>
      {IsUndefined(responseError)}
    </div>
  );
};

export default MovieList;
