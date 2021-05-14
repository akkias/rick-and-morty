import React from "react";
import CharacterFact from "./CharacterFact";

const CharacterFacts = ({ character, location }) => {
  const appearance = character.episode.length > 1 ? "episodes" : "episode";
  return (
    <ul className="characterDetails-facts">
      <CharacterFact
        label="Appeared in"
        data={`${character.episode.length} ${appearance}`}
      />
      <CharacterFact label="Origin" data={character.origin.name} />
      <CharacterFact label="Resident" data={character.location.name} />
      <CharacterFact
        label="Dimensions"
        data={location?.dimension || "unknown"}
      />
      <CharacterFact
        label="Population"
        data={location ? location.residents.length : "unknown"}
      />
    </ul>
  );
};

export default CharacterFacts;
