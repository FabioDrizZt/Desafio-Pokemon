import PowerList from "./PowerList";

const CardBackgroundColor = (type) => {
  switch (type) {
    case "fire":
      return { borderColor: "#5A0E1A", bgColor: "#B3001B" };
    case "water":
      return { borderColor: "#255C99", bgColor: "#7EA3CC" };
    case "rock":
      return { borderColor: "#262626", bgColor: "#C6C6C6" };
    default:
      break;
  }
};

const getColors = (type) => {
  const { borderColor, bgColor } = CardBackgroundColor(type);
  const styles = {
    backgroundColor: `${bgColor}`,
    border: `3px solid ${borderColor}`,
    display: "flex",
    flexDirection: "column",
    width: "200px",
    borderRadius: "20px",
    justifyContent: "space-evenly",
  };
  return styles;
};

export default function Card({ data, type }) {
  console.log(data);
  return (
    <div>
      {data.map((pokemon) => (
        <div key={pokemon.id} style={getColors(type)}>
          <h2>{pokemon.pokemonName}</h2>
          <img src={pokemon.avatar} alt={pokemon.pokemonName} />
          {pokemon.power && <PowerList list={pokemon.power} />}
        </div>
      ))}
    </div>
  );
}
