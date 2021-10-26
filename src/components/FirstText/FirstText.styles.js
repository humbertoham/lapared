import styled from "styled-components";

export const Wrapper = styled.div`
        
       background-color: var(--black);
        height: 650px;
        position: relative;
        @media (max-width: 768px) {
             height: 500px;
  }
        
`;

export const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;


`;


export const Text = styled.div`
    padding: 70px 0;
    position: relative;
    max-width: 700px;
    font-family: 'Poppins', sans-serif;
            animation:slide-top 2s ;
    @keyframes slide-top {
  0% {
    -webkit-transform: translateY(200px);
            transform: translateY(200px);
  }
  100% {
    -webkit-transform: translateY(0px);
            transform: translateY(0px);
  }
}
   
    h1{
        font-size: var(--fontSuperBig);
        color: var(--white);
        @media screen and (max-width: 720px){
            font-size: var(--fontBig);
            text-align:center;
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
        padding: 20px 0px;

    }
    .animated-title {
  color: #222;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vmin;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: 12vmin;
  padding: 2vmin 0;
  position: absolute;
}
.animated-title > div div span {
  display: block;
}
.animated-title > div.text-top {
  border-bottom: 1vmin solid #000;
  top: 0;
}
.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: #767676;
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}

`;