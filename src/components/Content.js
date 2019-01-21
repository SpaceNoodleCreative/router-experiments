import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import DefaultPage from "./DefaultPage";
import AnotherPage from "./AnotherPage";
import SiteMap from "./SiteMap";
import PageNotFound from "./PageNotFound";
import { map as _map } from "lodash";

const Content = ({ items }) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/another-page" exact component={AnotherPage} />
      <Route path="/sitemap" exact component={SiteMap} />
      {_map(items, item => (
        <Route
          exact
          key={item.id}
          path={`/${item.url}`}
          render={() => <DefaultPage items={items} id={item.id} />}
        />
      ))}
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Content;
