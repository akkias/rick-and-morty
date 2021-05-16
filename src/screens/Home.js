import React from "react";
import { useQuery } from "react-query";
import Character from "../components/Character";
import Loader from "../assets/images/loader.svg";
import { getData } from "../services";
import ErrorBoundry from "../components/ErrorBoundry";

const Characters = () => {
  const { data, isLoading, isError } = useQuery("characters", () =>
    getData("character")
  );

  if (isError) return <h1 className="app-error">Error loading the content</h1>;
  return (
    <div className="container">
      {isLoading ? (
        <div className="app-loader">
          <img src={Loader} alt="Loading" className="app-loaderImage" />
        </div>
      ) : (
        <section className="characters">
          {data?.results?.map((character) => (
            <ErrorBoundry key={character.id}>
              <Character character={character} />
            </ErrorBoundry>
          ))}
        </section>
      )}
    </div>
  );
};

export default Characters;
