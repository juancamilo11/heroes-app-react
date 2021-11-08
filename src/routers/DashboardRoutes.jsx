import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import DcScreen from "../pages/dc/DcScreen";
import HeroScreen from "../pages/heroes/HeroScreen";
import MarvelScreen from "../pages/marvel/MarvelScreen";
import SearchScreen from "../pages/search/SearchScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
