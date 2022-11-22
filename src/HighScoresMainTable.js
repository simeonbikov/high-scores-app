import React from "react";
import HighScoresCountryTable from "./HighScoresCountryTable";
import allCountryScores from "./scores";

const HighScoresMainTable = () => {
  return (
    <div className="Table">
      <h1>High Scores per Country</h1>
      {allCountryScores
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((country, index) => {
          return (
              <HighScoresCountryTable
                key={index}
                name={country.name}
                scores={country.scores}
              />
          );
        })}
    </div>
  );
};

export default HighScoresMainTable;
