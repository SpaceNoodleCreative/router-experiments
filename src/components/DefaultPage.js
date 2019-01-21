import React from "react";
import { getItemById } from "../utils/utils.js";
import SubPages from "./SubPages.js";

const DefaultPage = ({ items, id, children }) => {
  const item = getItemById(items, id);
  return (
    <article>
      <h1>{item.title}</h1>
      <p>Page content: content of {item.url}</p>
      {children}
      <SubPages item={item} />
    </article>
  );
};

export default DefaultPage;
