import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const SearchContext = createContext([]);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState("");
  const [responseSearch, setResponseSearch] = useState([]);
  const [responseDetails, setResponseDetails] = useState();
  const { path } = useParams();
  const [responseError, setResponseError] = useState();

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        details,
        setDetails,
        responseSearch,
        setResponseSearch,
        responseDetails,
        setResponseDetails,
        responseError,
        setResponseError,
        path,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
