import React from "react";

const PageNotFound = ({ match }) => {
  const url = match.url.substring(1);
  return (
    <article>
      <h1>Page {url} not found</h1>
      <p>Page {url} doesn't exist</p>
    </article>
  );
};

export default PageNotFound;
