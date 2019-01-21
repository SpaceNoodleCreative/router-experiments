import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainMenu from "./MainMenu";
import Content from "./Content";
import { itemsById } from "../data/data";

const Main = () => {
  return (
    <Router>
      <main>
        <MainMenu itemsById={itemsById} items={["0", "1", "2", "3"]} />
        <Content items={itemsById} />
        <Route path="/home" exact render={() => <Redirect to="/" />} />
      </main>
    </Router>
  );
};

export default Main;
