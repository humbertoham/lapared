import React, { useEffect } from "react";
import { Content, Wrapper, Text, Box } from "./Information.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const Information = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Content data-aos="fade-up">
        <Text>
          <h1>¿por qué elegirnos?</h1>
          <p>
            ofrecemos soluciones web, y móviles orientadas a negocios. nuestras
            soluciones se traducen en en diseños llamativos al pedido del
            cliente, y que siempren buscan la satisfacción de este mismo.
          </p>
        </Text>
        <Box>
          <FontAwesomeIcon className="ab" icon={faThumbsUp} size="10x" />{" "}
        </Box>
      </Content>
      <Content data-aos="fade-up">
        <Text>
          <h1>soluciones para tu negocio</h1>
          <p>
            antes de iniciar tu proyecto, te asesoramos para determinar cuales
            herramientas se adaptan mejor a tus necesidades. estamos orgullosos
            de proveer herramientas web personalizadas que otras agencias no
            tienen y que ayudan a los negocios a ahorrar en costos
            administrativos, operativos y de publicidad.
          </p>
        </Text>
        <Box>
          {" "}
          <FontAwesomeIcon className="ab" icon={faBuilding} size="10x" />
        </Box>
      </Content>
    </Wrapper>
  );
};

export default Information;
