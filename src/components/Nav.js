import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { buildMenu } from "../utils/utils";

export const NavLinkList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.url}>
          <NavLink to={`/${item.url}`} exact>
            {item.title}
          </NavLink>
          {item.subPages && <NavLinkList items={item.subPages} />}
        </li>
      ))}
    </ul>
  );
};

class Nav extends Component {
  menu = buildMenu(this.props.itemsById, this.props.items);
  render() {
    return (
      <nav>
        <NavLinkList items={this.menu} />
      </nav>
    );
  }
}

export default withRouter(Nav);
