import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import Badge from "../components/Badge";
import CharacterFacts from "../components/CharacterFacts";
import ErrorBoundry from "../components/ErrorBoundry";
import { getEpisodes } from "../services";
import { getCharacterIdfromUrl } from "../utils";
const CharacterDetails = () => {
  const characterId = Number(getCharacterIdfromUrl(useParams().characterId));
  const [episodes, setEpisodes] = useState();

  const queryClient = useQueryClient();
  const character = queryClient
    .getQueryData("characters")
    .results.find((details) => details.id === characterId);
  const location = queryClient
    .getQueryData("locations")
    .results.find((details) => details.name === character.location.name);

  useEffect(() => {
    async function getData() {
      const episodes = await getEpisodes(character.episode);
      setEpisodes(episodes);
    }
    getData();
  }, [character.episode]);

  return (
    <ErrorBoundry>
      <div className="container">
        <div className="characterDetails-banner">
          <img
            className="characterDetails-bannerImage"
            alt={character.name}
            src={character.image}
          />
          <img
            className="characterDetails-bannerImage--backdrop"
            alt={character.name}
            src={character.image}
          />
        </div>
        <section className="characterDetails-content">
          <header className="characterDetails-header">
            <h1 className="characterDetails-name">{character.name}</h1>
            <div className="characterDetails-attr">
              <Badge>{character.status}</Badge>
              <Badge>{character.species}</Badge>
              <Badge>{character.gender}</Badge>
            </div>
          </header>
          <CharacterFacts character={character} location={location} />
          <section>
            <h3 className="characterDetails-sectionTitle">
              Episodes {character.name} appeared in
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
    </ErrorBoundry>
  );
};

export default CharacterDetails;
