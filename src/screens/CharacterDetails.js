import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import Loader from "../assets/images/loader.svg";
import CharacterFacts from "../components/CharacterFacts";
import ErrorBoundry from "../components/ErrorBoundry";
import { getData, getEpisodes } from "../services";
import { getCharacterIdfromUrl } from "../utils";
const CharacterDetails = () => {
  const characterId = Number(getCharacterIdfromUrl(useParams().characterId));

  const [episodes, setEpisodes] = useState();

  const {
    data: character,
    isLoading,
    isError,
  } = useQuery("character", () => getData(`character/${characterId}`));

  const characterName = character?.name;

  useEffect(() => {
    async function getData() {
      const episodes = await getEpisodes(character?.episode);
      setEpisodes(episodes);
    }
    if (character?.episode) getData();
  }, [character?.episode]);

  const { data: location, isLocationLoading } = useQuery(
    "location",
    () => getData(`location/?name=${character?.location.name}`),
    {
      enabled: !!characterName,
    }
  );

  if (isError) return <h1 className="app-error">Error loading the content</h1>;
  return (
    <ErrorBoundry>
      {isLoading && isLocationLoading ? (
        <div className="app-loader">
          <img src={Loader} alt="Loading" className="app-loaderImage" />
        </div>
      ) : (
        <div className="container">
          <div className="characterDetails-banner">
            <img
              className="characterDetails-bannerImage"
              alt={character?.name}
              src={character?.image}
            />
            <img
              className="characterDetails-bannerImage--backdrop"
              alt={character?.name}
              src={character?.image}
            />
          </div>
          <section className="characterDetails-content">
            <header className="characterDetails-header">
              <h1 className="characterDetails-name">{character?.name}</h1>
              <div className="characterDetails-attr">
                <Badge>{character?.status}</Badge>
                <Badge>{character?.species}</Badge>
                <Badge>{character?.gender}</Badge>
              </div>
            </header>
            {character && (
              <CharacterFacts
                character={character}
                location={location?.data?.results[0]}
              />
            )}
            <section>
              <h3 className="characterDetails-sectionTitle">
                Episodes {character?.name} appeared in
              </h3>
              <ul className="characterDetails-episodeList">
                {episodes?.map((episode, i) => (
                  <li key={i}>
                    ({episode.episode}) - {episode.name}
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </div>
      )}
    </ErrorBoundry>
  );
};

export default CharacterDetails;
