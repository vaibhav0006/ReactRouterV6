import React from "react";
import { Link } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
    <Common/>      
      <Link to="/">Home</Link><br/><br/>

      <Link to="/About">About</Link><br/><br/>

      <Link to="/Contact">Contact</Link><br/><br/>
      <section>
        <h1>Home Page Only</h1>
      </section>
    </>
  );
};

export default Home;
