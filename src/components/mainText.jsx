import React from 'react'
import styled from 'styled-components'




const titleText = styled.h1`
font-family: SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol;
font-weight: 700;
font-size: 3.2rem;
line-height: 1.25;
letter-spacing: -.05rem;
background-color: blue;
`
const subText = styled.p`

font-family: SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol;
font-weight: 400;
line-height: 1.4;
font-size: 1.9rem;

`

export default function MainText(){
    return(
        <div>
            <titleText><h1>Uma ampla seleção de cursos</h1></titleText>
            <subText><p>Escolha entre 155.000 cursos em vídeo online com novas adições publicadas mensalmente</p></subText>
        </div>

    )
}