import React from "react";

const columns = ["title", "Comedian", "views", "likes", "dislikes", "date"];

function Column() {
  return (
    <div>
      {columns.map((x) => (
        <div className="columnName">{x}</div>
      ))}
    </div>
  );
}

export default Column;
