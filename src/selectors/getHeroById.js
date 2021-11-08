import heroes from "../data/heroes";

const getHeroById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

export default getHeroById;
