import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../contexts/searchContext";
import Axios from "axios";

const ShowMovie = () => {
  const { details } = useContext(SearchContext);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rated, setRated] = useState("");
  const [released, setReleased] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [plot, setPlot] = useState("");
  const [poster, setPoster] = useState("");

  useEffect(() => {
    Axios.get(
      `http://www.omdbapi.com/?t=${details}&plot=full&apikey=4aa60b1b`
    ).then((response) => {
      setTitle(response.data.Title);
      setYear(response.data.Rated);
      setRated(response.data.Title);
      setReleased(response.data.Released);
      setRuntime(response.data.Runtime);
      setGenre(response.data.Genre);
      setDirector(response.data.Director);
      setPlot(response.data.Plot);
      setPoster(response.data.Poster);
    });
  });

  return (
    <div>
      <h2>{title}</h2>
      <h3>Ano: {year}</h3>
      <h3>Runtime: {runtime}</h3>
      <h3>Released Date: {released}</h3>
      <h3>Genre: {genre}</h3>
      <h3>Director: {director}</h3>
      <img src={poster} alt="poster do filme" />
      <h3>Rating: {rated}</h3>
      <p>{plot}</p>
    </div>
  );
};

export default ShowMovie;
