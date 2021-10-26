import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth: 1280px;
    --white: #ffffff;
    --black: #020202;
    --blue: #0466C9;
    --green: #03A062;
    --lightBlue: #9dd6ff;
    --red: #931220;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    font-family: 'Poppins', sans-serif;
}
*{
    box-sizing: border-box;

}

body{
    margin: 0;
    padding: 0;

    #html{
        color:#e34c26;
    }
    #css{
        color:#2965f1;
    }
    #js{
        color:#f0db4f;
    }
    #nodejs{
        color:#68a063;
    }
    #react{
        color:#61DBFB;
    }
    .Icon{
        display: block;
        margin: auto;
    }
    .container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  justify-content: center;
  margin: auto;
}
.right{
    float: right;
}
span{
    display: block;
}

.primero{
     animation: zoomin 1s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
}
.segundo{
    animation: zoomin 2s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
}
.tercero{
    animation: zoomin 3s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
}
.hei{
    height: 300px;
     @media (max-width: 700px) {
            height: 0;
  }
}
    hr{
    height: 0.1px;
    width: 100%;
    background-color: var(--white);
    margin: none;
    }
    .foot{
        padding-bottom: 20px;
    }
    .menu{
        display: none;
         @media (max-width: 768px) {
            display: flex;
  }
    }

    h1{
        font-size: 2rem;
        font-weight: 600;
        color: var(--black);

    }
    h3{
        font-size: 1.1rem;
        font-weight: 600;
    }
    p{
        font-size: 1rem;
        color: var(---white);
    }
}
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animated-title {
  color:var(--white);
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vmin;
  margin: auto;
  display: block;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: var(--fontSuperBig);
  padding: 0;
  position: absolute;
  @media (max-width: 768px) {
             font-size: var(--fontBig);
  }
}
.animated-title > div div span {
  display: block;
}
.animated-title > div.text-top {
  border-bottom: 1vmin solid var(--white);
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
  color: var(--white);
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
