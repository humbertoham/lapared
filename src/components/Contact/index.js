import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Content, Wrapper, Text, Message} from "./Contact.styles";
const Contact = () =>(

    <Wrapper id="contact">
        <Content className="foot">
            <Text>
                <h1>contactanos</h1>
            </Text>
            <Message href="https://www.facebook.com/laparedlol"> <FontAwesomeIcon icon={(faFacebookF)}/> enviar mensaje </Message>
            <Message href="https://www.instagram.com/laparedlol"> <FontAwesomeIcon icon={(faInstagram)}/> enviar mensaje </Message>
            <Message href="https://www.twitter.com/laparedlol" > <FontAwesomeIcon icon={(faTwitter)}/> enviar mensaje </Message>
            </Content>
    </Wrapper>




);


export default Contact;