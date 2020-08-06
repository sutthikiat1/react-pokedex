import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokedex from "./components/Pokedex";
import CardPokemon from "./components/CardPokemon";
import { Context } from "./hooks/DataProvider";

function App() {
  const [openPokedex, setOpenPokedex] = useState(false);
  const { myPokedexs, listPokemons, setListPokemons } = useContext(Context);

  useEffect(() => {}, [myPokedexs]);

  function pokedex() {
    if (myPokedexs.length > 0) {
      return myPokedexs.map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <CardPokemon
              pokemon={pokemon}
              isOpenPokedex={true}
              listPokemons={listPokemons}
              setListPokemons={setListPokemons}
            />
          </div>
        );
      });
    }
  }

  return (
    <>
      <div className="root">
        <div className="title">
          <h1>My Pokedex</h1>
        </div>
        <Pokedex open={openPokedex} setOpen={setOpenPokedex} />
        <div className="mypokedex">{pokedex()}</div>
        <div className="footer">
          <button className="add-pokemon" onClick={() => setOpenPokedex(true)}>
            +
          </button>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/sutthikiat1"
          target="_blank"
          rel="noopener noreferrer"
        >
          sutthikiat &nbsp;
        </a>
        X
        <a
          href="https://github.com/sutthikiat1"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp; Pokedex by Appman.
        </a>
      </footer>
    </>
  );
}

export default App;
