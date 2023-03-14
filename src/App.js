import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function App() {
  const [allPokemonData, setAllPokemonData] = useState([]);
  const [pokemonData, setPokemonData] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const getAllPokemonData = async () => {
    const res = await fetch(pokemonData);
    const data = await res.json();
    setPokemonData(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemonData((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemonData();
  }, []);

  return (
    <div className="app-container">
      <h1 className="heading">Pokemon App</h1>

      <div className="wrapper">
        <div className="subwrapper">
          {allPokemonData.map((pokemon, index) => (
            <Pokemon
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              height={pokemon.height}
              weight={pokemon.weight}
              stat1={pokemon.stats[0].stat.name}
              stat2={pokemon.stats[1].stat.name}
              stat3={pokemon.stats[2].stat.name}
              stat4={pokemon.stats[3].stat.name}
              stat5={pokemon.stats[4].stat.name}
              stat6={pokemon.stats[5].stat.name}
              bs1={pokemon.stats[0].base_stat}
              bs2={pokemon.stats[1].base_stat}
              bs3={pokemon.stats[2].base_stat}
              bs4={pokemon.stats[3].base_stat}
              bs5={pokemon.stats[4].base_stat}
              bs6={pokemon.stats[5].base_stat}
            />
          ))}
        </div>
        <button className="load-more" onClick={() => getAllPokemonData()}>
          load more
        </button>
      </div>
    </div>
  );
}

export default App;
