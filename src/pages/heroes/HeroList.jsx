import React, { useMemo } from "react";
import getHeroesByPublisher from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <ul className="card-columns animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </ul>
  );
};

export default HeroList;
