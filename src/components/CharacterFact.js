import React from "react";

const CharacterFact = ({ label, data }) => {
  return (
    <li className="characterDetails-fact">
      <small>{label}</small>
      <span>{data}</span>
    </li>
  );
};

export default CharacterFact;
