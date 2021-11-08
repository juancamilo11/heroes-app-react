import heroes from "../data/heroes";

export default getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
