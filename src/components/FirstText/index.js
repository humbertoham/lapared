import React, {useEffect} from "react";
import { Content, Wrapper, Text} from "./FirstText.styles";
import Aos from "aos";
import "aos/dist/aos.css" 

const FirstText = () =>{

    useEffect(() => {

        Aos.init({duration: 2000});

    }, []);


    return (
    <Wrapper>
        <Content>
            <div class="animated-title">
                <div class="text-top">
                    <div>
                            <span>el único</span>
                             <span>web development studio</span>
                        </div>
                                </div>
                                <div class="text-bottom">
                            <div>que no usa mayúsculas</div>
                                    </div>
                                                </div>
            </Content>
    </Wrapper>
);



};


export default FirstText;