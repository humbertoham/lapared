import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 0px 24px 24px;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 35px;
  width: 300px;
  z-index: 1;
`;
export const Text = styled.div`
    font-family: 'Poppins', sans-serif;
      margin: auto;
  width: 50%;
  padding: 10px;  

    h1{
        font-size:3rem ;
        font-weight: 700;
        color: var(--black);
        text-align: center;
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

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const CardHeading = styled.h1`
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 0px;
  }

  &:last-of-type {
    text-align: center;
  }
`;


export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  font-size: var(--smallFont);
  text-align: center;
`;


export const CardButton = styled.a`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: var(--green);
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;
