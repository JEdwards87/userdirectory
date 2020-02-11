import React from "react";
import "./styles.css";
import people from "./dataBig";
import PersonCard from "./personcard";

export default function App() {
  return (
    <div className="App">
      {people.map(person => {
        return (
          <PersonCard
            first={person.first}
            last={person.last}
            email={person.email}
          />
        );
      })}
      ;<h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
