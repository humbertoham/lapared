import React, { useEffect } from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  CardButton,
  Text
} from './Cards.styles';

import Aos from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"
const Cards = () => {

    useEffect(() => {

        Aos.init({duration: 2000});

    }, []);

return(
  <div>
   <Text>
                <h1>tecnologías que usamos</h1>
      </Text>
  <div className="container">
      <CardWrapper data-aos="fade-up">
        <CardHeader>
          <CardHeading>html</CardHeading>
          <FontAwesomeIcon id="html" className="Icon" icon={(faHtml5)} size="6x" />
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>hypertext markup language</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton href="https://developer.mozilla.org/es/docs/Web/HTML">saber más</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      <CardWrapper data-aos="fade-up">
        <CardHeader>
          <CardHeading>css</CardHeading>
          <FontAwesomeIcon id="css" className="Icon" icon={(faCss3Alt)} size="6x" />
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>cascading style sheets</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton href="https://developer.mozilla.org/es/docs/Web/CSS">saber más</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      <CardWrapper data-aos="fade-up">
        <CardHeader>
          <CardHeading>js</CardHeading>
          <FontAwesomeIcon id="js" className="Icon" icon={(faJsSquare)} size="6x" />
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>javascript</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton href="https://developer.mozilla.org/es/docs/Web/JavaScript">saber más</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      <CardWrapper data-aos="fade-up">
        <CardHeader>
          <CardHeading>node.js</CardHeading>
          <FontAwesomeIcon id="nodejs" className="Icon" icon={(faNodeJs)} size="6x" />
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>java runtime environment</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton href="https://nodejs.org/es/about/">saber más</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      <CardWrapper data-aos="fade-up">
        <CardHeader>
          <CardHeading>react</CardHeading>
          <FontAwesomeIcon id="react" className="Icon" icon={(faReact)} size="6x" />
        </CardHeader>
        <CardBody>
          <CardFieldset>
            <CardOptionsNote>javascript library</CardOptionsNote>
          </CardFieldset>
          <CardFieldset>
            <CardButton href="https://reactjs.org/">saber más</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
      </div>
      </div>
      );
};

export default Cards;