import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { getItemById } from "../utils/utils";

const MainMenu = ({ itemsById, items }) => {
  const menuItems = items.map(item => getItemById(itemsById, item));
  return (
    <nav className="main-menu">
      <ul>
        {menuItems.map(item => (
          <li key={item.url}>
            <NavLink to={`/${item.url}`} exact>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(MainMenu);
