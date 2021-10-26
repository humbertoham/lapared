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
