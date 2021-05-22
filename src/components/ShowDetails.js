import React from "react";

const column = ["title", "comedian", "views", "likes", "dislikes", "date"];

function ShowDetails(props) {
  return (
    <div>
      {column.map((y) => (
        <div>{props.showData[y]}</div>
      ))}
    </div>
  );
}

export default ShowDetails;
