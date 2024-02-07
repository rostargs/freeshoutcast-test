import React from "react";
import Hero from "../components/Home/Hero";
import Start from "../components/Home/Start";
import Abilities from "../components/Home/Abilities";
import Questions from "../components/Home/Questions";

const Home = () => {
  return (
    <>
      <Hero />
      <Abilities />
      <Start />
      <Questions />
    </>
  );
};

export default Home;
