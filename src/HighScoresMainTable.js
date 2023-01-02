import { useState } from "react";
import HighScoresCountryTable from "./HighScoresCountryTable";
import allCountryScores from "./scores";

const HighScoresMainTable = () => {
  const sortedCountriesAlphabet = allCountryScores.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  const [countries, setCountries] = useState(sortedCountriesAlphabet);
  const [sorted, setSorted] = useState(true);

  function sortScores() {
    if (sorted) {
      countries.map((country) => country.scores.sort((a, b) => b.s - a.s));
      setCountries(countries);
      setSorted(false);
    } else {
      countries.map((country) => country.scores.sort((a, b) => a.s - b.s));
      setCountries(countries);
      setSorted(true);
    }
  }
  return (
    <>
      <button className="btn" onClick={sortScores}>
        Sort ↑↓
      </button>
      <div className="Table">
        <h1>High Scores per Country</h1>
        {countries.map((country) => {
          return (
            <HighScoresCountryTable
              key={country.name}
              name={country.name}
              scores={country.scores}
            />
          );
        })}
      </div>
    </>
  );
};

export default HighScoresMainTable;
