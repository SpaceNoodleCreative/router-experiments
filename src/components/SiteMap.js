import React from "react";
import DefaultPage from "./DefaultPage";
import Nav from "./Nav";
import { itemsById } from "../data/data";

const SiteMap = () => {
  return (
    <DefaultPage items={itemsById} id="12">
      <Nav itemsById={itemsById} items={["0", "1", "2", "3"]} />
    </DefaultPage>
  );
};

export default SiteMap;
