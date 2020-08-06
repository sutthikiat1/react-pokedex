import React, { useEffect, useState, useContext } from "react";
import Modal from "react-modal";
import { DivModal, DivListCard } from "./styles";
import CardPokemon from "../CardPokemon";
import axios from "axios";
import { Context } from "../../hooks/DataProvider";
import ImgSearch from "../../search.png";
import ImgPickachuCry from "../../pikachu-cry.png";

const customStyles = {
  overlay: {
    backgroundColor: "#000000a3",
  },
  content: {
    width: "800px",
    height: "600px",
    top: "50%",
    left: "49%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Index = (props) => {
  const { listPokemons, setListPokemons, myPokedexs } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const { open, setOpen } = props;

  useEffect(() => {
    Modal.setAppElement("body");
    (async function() {
      const response = await axios(`${process.env.REACT_APP_API}/api/cards`);
      const { data } = response;
      setListPokemons(data.cards);
    })();
  }, []);

  useEffect(() => {}, [listPokemons]);

  const toggle = () => setOpen(false);

  async function getPokemon() {
    try {
      const response = await axios(
        `${process.env.REACT_APP_API}/api/cards?limit=20&name=${inputValue}`
      );
      const { data } = response;
      let result = [];
      myPokedexs.map((myPokemon) => {
        return data.cards.filter((card) => {
          if (card.id === myPokemon.id) result.push(card);
          return card.id === myPokemon.id;
        });
      });

      var result2 = [],
        found;
      for (var i = 0; i < data.cards.length; i++) {
        found = false;
        for (var j = 0; j < result.length; j++) {
          if (data.cards[i].id === result[j].id) {
            found = true;
            break;
          }
        }
        if (!found) {
          result2.push(data.cards[i]);
        }
      }
      setListPokemons(result2);
    } catch (e) {
      console.log(e);
    }
  }

  function onKeyDown(event) {
    if (event.key === "Enter") {
      getPokemon();
    }
    if (inputValue.length === 1 && event.keyCode === 8) {
      getPokemon();
    }
  }

  function pokedex() {
    if (listPokemons.length > 0) {
      return listPokemons.map((pokemon, index) => {
        return (
          <CardPokemon
            pokemon={pokemon}
            key={pokemon.id}
            type={"add"}
            listPokemons={listPokemons}
            setListPokemons={setListPokemons}
          />
        );
      });
    } else {
      return (
        <div style={{ marginTop: 50, textAlign: "center" }}>
          <h1>
            <img
              src={ImgPickachuCry}
              alt="ImgPickachuCry"
              width="10%"
              style={{ borderRadius: "50%", border: "4px solid #474446" }}
            />{" "}
            Pokemon not found 404 !
          </h1>
        </div>
      );
    }
  }

  return (
    <Modal
      onRequestClose={toggle}
      style={customStyles}
      isOpen={open}
      contentLabel="Example Modal"
    >
      <DivModal>
        <div className="search-pokemon">
          <input
            placeholder="Find Pokemon"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <div onClick={() => getPokemon()} className="search-icon">
            <img src={ImgSearch} alt="search" />
          </div>
        </div>

        <DivListCard>{pokedex()}</DivListCard>
      </DivModal>
    </Modal>
  );
};

export default Index;
