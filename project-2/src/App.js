import "./App.css";
import React from "react";
import Heroes from "./components/data.json";

export default function App() {
  return (
    <div className="App">
      <h1>Dota 2</h1>
      <div className="posts">
        {Heroes.heroes.map((hero, index) => {
          return (
            <>
              <img src={hero.image}></img>
              <h4>{hero.name}</h4>
              <p>Primary Attribute: {hero.primaryAttribute}</p>
              <p>Attack Type: {hero.attackType}</p>
              <p key={index}>Role(s): {hero.Role} </p>
            </>
          );
        })}
      </div>
    </div>
  );
}
