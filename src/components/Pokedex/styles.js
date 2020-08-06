import styled from "styled-components";

export const DivModal = styled.div`
  width: 100%;
  .search-pokemon {
    position: relative;
    input {
      font-size: 28px;
      width: 100%;
      height: 50px;
      border: 1px solid #e6e6e6;
    }
  }
  .search-icon {
    position: absolute;
    right: 0;
    top: 0;
    img {
      width: 50px;
    }
  }
`;

export const DivListCard = styled.div`
  overflow: auto;
`;
