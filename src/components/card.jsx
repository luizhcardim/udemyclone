import React from 'react'
import styled from 'styled-components'

const Image = styled.img `
width: 240px;
height: 135px;
background-color: red;
`

const Name = styled.h1`
    font-family: sf pro display,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1.6rem;
    width: 240px;
    height: 135px;
`
const Teacher = styled.h2 `
    font-family: sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.2rem;
`


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <Image></Image>
            <Name>Curso de JavasCript do Básico ao Avançado 2021</Name>
            <Teacher>Luiz Otávio Miranda</Teacher>

        </div>
    )
}