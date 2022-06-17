import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selectionFilter";

const Browse = () => {
  // Series and the films
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  console.log(films);
  // Slides
  const slides = selectionFilter({ series, films });
  console.log(slides);
  // pass it to the browse container
  return <div>Browse</div>;
};

export default Browse;
