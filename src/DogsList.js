import React from "react";
import { NavLink } from "react-router-dom";


import whiskey from "./images/whiskey.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import tubby from "./images/tubby.jpg";


function DogsList({ dogs }) {    
    return (
        <div className="dogs-boxes">
        {dogs.map(d => (
            <div key={d.id} className="box">
                <NavLink to={`/dogs/${d.name}`} activeClassName="active">
                <img className="dogs" src={d.src} alt={d.name} />
                </NavLink>
                <div><b>{d.name}</b></div>
            </div>
        ))}
    </div>
    );
}      

DogsList.defaultProps = {
    dogs: [
      {
        id: 0,
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        id: 1,
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        id: 2,
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        id: 3,
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }


export default DogsList;