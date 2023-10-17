import { Pokemon } from "../pokemons";
import Card from "./Card";
import styles from "./Main.module.css";

export default function Main() {
  console.log(Pokemon);
  const typesOfPokemons = Object.keys(Pokemon);
  console.log(typesOfPokemons);

  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Lista de pokemons</h1>
        <div className={styles.cardContainer}>
          {typesOfPokemons.map((type) => (
            <Card key={type} data={Pokemon[type]} type={type} />
          ))}
        </div>
      </div>
    </>
  );
}
