import React, {useEffect} from "react";
import { Content, Wrapper, Text, Box} from "./About.styles";
import Aos from "aos";
import "aos/dist/aos.css" 
const About = () =>{
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return(
    <Wrapper id="about">
        <Content  data-aos="fade-right">
            <Text>
                <h1>acerca de nosotros</h1>
                <p>somos un studio de web design, que espera ir construyendo un portafolio y una reputación por la atención al detalle con sus clientes. nuestra misión es poder ayudar al cliente a transmitir sus ideas a una página web. </p>
            </Text>
            <Box>
            </Box>
            </Content >
            <Content data-aos="fade-right">
                <Box  >
            </Box>
            <Text className="right">
                <h1>experiencia</h1>
                <p>2 años y medio de formación en diseño de páginas web, usando tecnologías como: </p>
                <p>• html </p>
                <p>• css</p>
                <p>• javascript</p>
                <p>• mongodb</p>
                <p>• authentication</p>
                <p>• nodejs</p>
                <p>• react</p>
            </Text>
            </Content >
            <Content  data-aos="fade-right">
            <Text>
                <h1>objetivos</h1>
                <p>facilitar el acceso a las personas su propia página web, con un diseño que sea de su agrado, y poder satisfacer las necesidades del cliente para que tenga una buena experiencia con nostros.</p>
            </Text>
            <Box>
            </Box>
            </Content>
    </Wrapper>



);
};


export default About;