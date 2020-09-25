import React from "react";
import Loader from "react-loader";
import "./App.css";
import useFetchJoke from "./useFetchJoke";

function App() {
  const { data, isLoading, error, refetch } = useFetchJoke();

  if (error) {
    return <h1>An error occured.</h1>;
  }

  return (
    <div className="app">
      <div className="title">
        <h1>
          <em>Random</em>
          Joke <br /> Generator
        </h1>
      </div>
      <div className="joke-block">
        <div className="joke-card">
          <Loader loaded={!isLoading}>
            <p className="joke-text">{data}</p>
          </Loader>
        </div>
        <button type="button" onClick={refetch} className="joke-button">
          Get another joke
        </button>
      </div>
      <footer className="footer">
        <p> <span role="img" aria-label="construction icon">👷🏼‍♀</span> Site Built Designed by <em>Clarisse Damon</em> @2020</p>
      </footer>
    </div>
  );
}

export default App;
