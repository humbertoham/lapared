import React from "react";
import { Content, Wrapper, Text, CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  CardButton, Page, Overlay, Tec} from "./Portfolio.styles";
  import LaPared from "../../images/laparedpage.jpeg"
  import JGGlobal from "../../images/jgglobal.jpeg"
const Portfolio = () =>(

    <Wrapper id="portfolio">
        <Content>
            <Text>
                <h1>portafolio</h1>
                
            </Text>
            <div className="container">
            <CardWrapper>
        <CardHeader>
          <CardHeading>jg global</CardHeading>
          <Page src={JGGlobal}/>
          <Overlay>
            <Tec href="https://developer.mozilla.org/es/docs/Web/CSS">css</Tec>
           <Tec  href="https://developer.mozilla.org/es/docs/Web/JavaScript">js</Tec>
            <Tec href="https://reactjs.org/">react</Tec>
            </Overlay>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>www.jgglobal.mx</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton href="https://jgglobal.mx">visitar</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      </div>
            <div className="container">
            <CardWrapper>
        <CardHeader>
          <CardHeading>la pared</CardHeading>
          <Page src={LaPared}/>
          <Overlay>
            <Tec href="https://developer.mozilla.org/es/docs/Web/CSS">css</Tec>
           <Tec  href="https://developer.mozilla.org/es/docs/Web/JavaScript">js</Tec>
            <Tec href="https://reactjs.org/">react</Tec>
            </Overlay>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>www.lapared.lol</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton href="https://lapared.lol">visitar</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      </div>
            </Content>
    </Wrapper>




);


export default Portfolio;