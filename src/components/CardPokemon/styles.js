import styled from "styled-components";

export const DivCardPokemon = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #f3f4f7;
  margin-top: 20px;
  box-shadow: 2px 2px 8px #d5d6dc;
  border-radius: 5px;
  max-width: ${(props) => (props.isOpenPokedex ? "97%" : "100%")};
  &:hover {
    .pokemon-detail {
      .pokemon-name {
        .btn-remove-pokemon {
          display: block;
        }
      }
    }
  }

  .pokemon-img {
    max-width: 150px;
    padding: 10px;
    text-align: center;
    img {
      width: 100%;
    }
  }

  .pokemon-detail {
    padding-left: 15px;
    width: 100%;

    .pokemon-name {
      font-family: "Gaegu", cursive !important;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 24px;
      }

      .btn-remove-pokemon {
        display: none;
        font-size: 20px;
        border: none;
        outline: none;
        background: none;
        margin-right: 10px;
        color: #dc7777;
        font-family: "Atma", cursive !important;
      }
    }

    .detail {
      display: flex;
      align-items: center;

      .title {
        width: 100px;
        text-align: left;
      }

      .img-cute {
        width: 10%;
        padding-bottom: 10px;
      }
    }
  }
`;

export const ProgressValuePokemon = styled.div`
  margin-left: 20px;
  height: 24px;
  width: 50%;
  background: #e4e4e4;
  border-radius: 50px;
  margin-right: 20px;

  .value {
    width: ${(props) => (props.value ? props.value : "50%")};
    border-radius: 50px;
    background: #f3701a;
    height: 24px;
  }
`;
