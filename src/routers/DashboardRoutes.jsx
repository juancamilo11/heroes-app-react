import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import DcScreen from "../pages/dc/DcScreen";
import HeroScreen from "../pages/heroes/HeroScreen";
import MarvelScreen from "../pages/marvel/MarvelScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
