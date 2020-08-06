import React, { useContext } from "react";
import { DivCardPokemon, ProgressValuePokemon } from "./styles";
import { Context } from "../../hooks/DataProvider";

import {
  CalculateHp,
  CalculateStrength,
  CalculateWeakness,
  CalculateDamage,
  CalculateHappiness,
} from "../../helper/calculate";
import ImgCute from "../../cute.png";

function Index(props) {
  const { isOpenPokedex, pokemon, type, listPokemons, setListPokemons } = props;
  const { myPokedexs, setMyPokedexs } = useContext(Context);
  const { name, imageUrl, hp, attacks, weaknesses } = pokemon;
  const calHp = hp && hp !== "None" ? CalculateHp(hp) : 0;
  const calStrength = attacks ? CalculateStrength(attacks) : 0;
  const calWeakness = weaknesses ? CalculateWeakness(weaknesses) : 0;
  const calDamage = attacks ? CalculateDamage(attacks) : 0;
  const calHappiness = CalculateHappiness(calHp, calDamage, calWeakness, name);
  var poke_happiness = Array.from(Array(Math.floor(calHappiness)).keys());

  function addPokedex(pokemon) {
    if (type === "add") {
      let array = [pokemon];
      setMyPokedexs([...myPokedexs, ...array]);
      let listPokemonArr = listPokemons;
      listPokemonArr.splice(
        listPokemonArr.findIndex((e) => e.id === pokemon.id),
        1
      );
      setListPokemons(listPokemonArr);
    } else {
      let array = [pokemon];
      setListPokemons([...listPokemons, ...array]);
      let myPokedexsArr = myPokedexs;
      myPokedexsArr.splice(myPokedexs.findIndex((e) => e.id === pokemon.id), 1);
      setMyPokedexs(myPokedexsArr);
    }
  }

  return (
    <DivCardPokemon isOpenPokedex={isOpenPokedex}>
      <div className="pokemon-img">
        <img src={imageUrl} alt="pokemon" />
      </div>
      <div className="pokemon-detail">
        <div className="pokemon-name">
          <h2>{name}</h2>
          <button
            onClick={() => addPokedex(pokemon)}
            className="btn-remove-pokemon"
          >
            {type === "add" ? "Add" : "X"}
          </button>
        </div>
        <div className="detail">
          <div className="title">
            <h4>HP</h4>
          </div>
          <ProgressValuePokemon value={`${calHp}%`}>
            <div className="value"></div>
          </ProgressValuePokemon>
        </div>
        <div className="detail">
          <div className="title">
            <h4>STR</h4>
          </div>
          <ProgressValuePokemon value={`${calStrength}%`}>
            <div className="value"></div>
          </ProgressValuePokemon>
        </div>
        <div className="detail">
          <div className="title">
            <h4>WEAK</h4>
          </div>
          <ProgressValuePokemon value={`${calWeakness}%`}>
            <div className="value"></div>
          </ProgressValuePokemon>
        </div>
        <div className="detail">
          {poke_happiness.map((index) => {
            return (
              <img
                key={index}
                className="img-cute"
                src={ImgCute}
                alt="pokemon-happiness"
              />
            );
          })}
        </div>
      </div>
    </DivCardPokemon>
  );
}

export default Index;
