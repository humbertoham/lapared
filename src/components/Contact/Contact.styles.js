import styled from "styled-components";

export const Wrapper = styled.div`
        
       background-color: var(--white);
        
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;


`;

export const Text = styled.div`
    position: relative;
   font-family: 'Poppins', sans-serif;
   text-align:center ;
    animation:slide-top 1s ;
    @keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
}
   
    h1{
        font-size: var(--fontSuperBig);
        color: var(--black);
        @media screen and (max-width: 720px){
            font-size: var(--fontBig);

        }

    }
    p{

        font-size: var(--fontMed);

        @media screen and (max-width: 720px){
            font-size: var(--fontSmall);

        }

    }

    @media screen and (max-width: 720px){

        max-width: 100%;

    }

`;

export const Message = styled.a`
  display: block;
  margin: 20px auto;
  width: 300px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: var(--black);
  border: 2px solid var(--green);
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  text-align:center;
  font-family: 'Poppins', sans-serif;
  &:hover {
    background-color: var(--green);
    color:var(--white);
  }
`;