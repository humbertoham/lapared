import styled from "styled-components";

export const Wrapper = styled.div`
        
       background-color: var(--black);
        height: 100px;
         
`;

export const Content = styled.div`
    padding-top: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
    color: var(--white);
    text-align:center;
    font-family: 'Poppins', sans-serif;
     p{
        font-size: 0.8rem;
    }
`;

export const Link = styled.a`
    color: var(--white);
    padding: 0px 8px;
`;
