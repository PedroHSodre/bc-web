import styled from "styled-components";

export const Container = styled.div``;

export const NavbarContent = styled.div`
  height: 100%;
  width: 80px;
  background: linear-gradient(180deg, #2a6cb9 0%, rgba(42, 108, 185, 0.3) 30%);
  z-index: 1;
  text-align: center;
  padding: 20px 0;
`;

export const Header = styled.div`
  background: rgba(217, 217, 217, 0.05);
  width: 100%;
  height: 70px;
  position: absolute;
  padding: 0 100px;
  display: flex;
  align-items: center;
`;

export const Hamburguer = styled.div``;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-items: center;
  height: 100%;

  div {
    cursor: pointer;
  }
`;
