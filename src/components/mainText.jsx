import React from 'react'
import styled from 'styled-components'



const TitleText = styled.h1`
font-family: SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol;
font-weight: 700;
font-size: 1.6rem;
line-height: 1.25;
letter-spacing: -.05rem;
padding-left: 18px;
padding-top: 10px;
`
const SubText = styled.p`

font-family: sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
font-weight: 400;
line-height: 1.4;
font-size: 1.9rem;
padding-left: 18px;



`

export default function MainText(){
    return(
        <div>
            <TitleText><h1>Uma ampla seleção de cursos</h1></TitleText>
            <SubText><p>Escolha entre 155.000 cursos em vídeo online com novas adições publicadas mensalmente</p></SubText>
        </div>

    )
}