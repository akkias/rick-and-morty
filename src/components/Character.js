import React from "react";
import { Link } from "react-router-dom";
import slug from "slug";
import Badge from "./Badge";

const Character = ({ character }) => {
  return (
    <article className="character">
      <Link to={`character/${slug(character.name)}-${character.id}`}>
        <figure className="character-imageWrapper">
          <div className="character-coverImage">
            <img
              alt={character.name}
              src={character.image}
              className="character-image"
            />
          </div>
          <div className="character-attributes">
            <Badge>{character.status}</Badge>
            <Badge>{character.species}</Badge>
            <Badge>{character.gender}</Badge>
          </div>
        </figure>
        <div
          className={`character-description character-description--${character.status.toLowerCase()}`}
        >
          <h3 className="character-descriptionTitle">
            <span
              title={character.status}
              className={`character-status character-status--${character.status.toLowerCase()}`}
            />
            {character.name}
          </h3>
          <div className="character-meta">
            <span>
              Appeared in:{" "}
              <strong>
                {character.episode.length}{" "}
                {character.episode.length > 1 ? "episodes" : "episode"}
              </strong>
            </span>
            <span>
              Origin: <strong>{character.origin.name}</strong>
            </span>
            <span>
              Resident: <strong>{character.location.name}</strong>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Character;
