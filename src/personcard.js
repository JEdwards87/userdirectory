import React from "react";

export default function personCard(props) {
  return (
    <div>
      <p>{props.first}</p>
      <p>{props.last}</p>
      <p>{props.email}</p>
    </div>
  );
}
