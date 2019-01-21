import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import { getItemById } from "../utils/utils";
import { itemsById } from "../data/data";
import { find as _find } from "lodash";

const SubPages = ({ item }) => {
  const parentItem = _find(itemsById, { subPages: [item.id] });
  const ids = item.subPages
    ? item.subPages
    : parentItem
    ? parentItem.subPages
    : null;
  const pages = ids && ids.map(item => getItemById(itemsById, item));
  return (
    <div>
      <h4>More</h4>
      <ul className="page-menu">
        {parentItem && (
          <li>
            <Link to={`${parentItem.url}`}>Level up</Link>
          </li>
        )}
        {pages &&
          pages.map(item => (
            <li key={item.url}>
              <NavLink to={`/${item.url}`} exact>
                {item.title}
              </NavLink>
            </li>
          ))}
        <Route
          path="*"
          render={({ match }) =>
            match.url !== "/" && (
              <li>
                <Link to="/">Back home</Link>
              </li>
            )
          }
        />
      </ul>
    </div>
  );
};

export default SubPages;
