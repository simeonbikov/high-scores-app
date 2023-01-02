import React from "react";

const HighScoresCountryTable = (props) => {
    return (
      <div className="Sub-table" key="key">
        <h2>HIGH SCORES: {props.name}</h2>
        <div className="Table-country-scores">
          {props.scores
            .map((player, index) => {
              return (
                <div className="Table-score-line" key={index}>
                  <div className="Table-cell">{player.n.toUpperCase()}</div>
                  <div className="Table-cell Fonts-red">{player.s}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
}

export default HighScoresCountryTable;
