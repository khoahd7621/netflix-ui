import React from "react";
import FooterContainer from "../containers/footer";
import { FaqsContainer } from "../containers/fqs";
import { JumbotronContainer } from "../containers/jumbotron";

const Home = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
