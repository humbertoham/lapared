import styled from "styled-components";

export const Wrapper = styled.div`
         padding: 0px 75px 75px 75px;
       background-color: var(--green);
        box-sizing: border-box;
         @media screen and (max-width: 720px){
            padding: 0px 75px 75px 75px;
         }

`;

export const Content = styled.div`

   ::after{ content: "";
  display: table;
  clear: both;
   }
`;
export const Box = styled.div`
    float: left;
  width: 33.33333%;
  padding: 25px;
  @media screen and (max-width: 720px){

        width: auto;
        float: none;
        padding: 0px;
    }

`;

export const Text = styled.div`
    float: left;
  width: 66.66666%;
  padding: 25px;
    font-family: 'Poppins', sans-serif;
    max-width: 500px;
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
        color: var(--white);
        @media screen and (max-width: 720px){
            font-size: var(--fontBig);

        }

    }
    p{
        color:var(--white);
        font-size: var(--fontMed);
        flex-wrap: nowrap;
        @media screen and (max-width: 720px){
            font-size: var(--fontSmall);
            
        }

    }

    @media screen and (max-width: 720px){

        width: auto;
        float: none;

    }

`;