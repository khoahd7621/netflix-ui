import React from "react";
import { useContent } from "../hooks";

const Browse = () => {
  // We need the series and the films
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  console.log(films);
  // We need slides
  // pass it to the browse container
  return <div>Browse</div>;
};

export default Browse;
