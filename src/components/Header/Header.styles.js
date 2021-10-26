import styled from "styled-components";


export const LogoN = styled.img`
    width: 200px;
    
    @media screen and (max-width: 500px){

        width:150px;
    }

`;


export const MenuLink = styled.a`
  margin: 18px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: 2px solid var(--green);
  border-radius: 35px;
  color: var(--white);
  transition: all 0.3s ease-in;
  font-size: var(--fontMed);
  &:hover {
    
    transform: scale(1.3);
    transition-timing-function: ease-in-out;
  }
  @media (max-width: 768px) {
    border: none;
    color:var(--green);
  }
`;

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: var(--black);
  top: 0;
  left: 0;
  right: 0;
  font-family: 'Poppins', sans-serif;
`;

export const Logo = styled.a`
  margin-top: 1.5rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    border-radius: 50%;
    background: var(--green);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;