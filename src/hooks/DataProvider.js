import React, { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [myPokedexs, setMyPokedexs] = useState([]);
  const [listPokemons, setListPokemons] = useState([]);

  return (
    <Context.Provider
      value={{ myPokedexs, setMyPokedexs, listPokemons, setListPokemons }}
    >
      {children}
    </Context.Provider>
  );
};
