import React from "react";
import DefaultPage from "./DefaultPage";
import { itemsById } from "../data/data";

const AnotherPage = () => {
  return (
    <DefaultPage items={itemsById} id="3">
      Custom component here
    </DefaultPage>
  );
};

export default AnotherPage;
