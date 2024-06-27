import React, { useState, useEffect } from "react";
import { ResultCard } from "./ResultCard";
import axios from "axios";

//Api key
// const API_KEY = '2c26da707873ee2f69605b9fdaa8b0f8';
// console.log(2c26da707873ee2f69605b9fdaa8b0f8);
export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  //Making a api request
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "2c26da707873ee2f69605b9fdaa8b0f8",
          query: query,
          language: "en-US",
          page: 1,
          include_adult: true,
        },
      })
      .then((res) => {
        console.log(res);
        setResults(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={query}
              onChange={(e) => {
                e.preventDefault();
                setQuery(e.target.value);
              }}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
