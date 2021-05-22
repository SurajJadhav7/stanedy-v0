import React from "react";
import shows from "../shows";
import ShowDetails from "./ShowDetails";

function Show() {
  return (
    <div>
      {shows.map((x) => (
        <ShowDetails showData={x} />
      ))}
    </div>
  );
}

export default Show;
