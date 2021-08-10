import React from 'react'
import styled from 'styled-components'

const BackgroundWrapper = styled.div`
color: blue;
padding: 20px;
position: relative;

background-image: url("https://img-c.udemycdn.com/notices/web_banner/image_udlite/ee6280b5-7b68-4d38-a0c4-a61714010aff.jpg");
height: 340px;
`
const InformationBanner = styled.div`
background-color: white;
font-family: sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
color: black;
height: 276px;
width: 416px;
position: absolute;
left: 4.8rem;
top: 6.4rem;
max-width: 44rem;
`

const TitleInformationBanner = styled.h1`
padding: 24px;
font-family: SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol;
font-weight: 700;
font-size: 3.8rem;
line-height: 1.25;
letter-spacing: -.05rem;
`
const TextInformationBanner = styled.p`
font-family: sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
font-weight: 400;
line-height: 1.4;
font-size: 1.6rem;

`
const SearchBanner = styled.div`
width: 30px;
height: 30px;
background-color: blue;
`

export default function MainBanner(){
    return (
        <BackgroundWrapper>
            <InformationBanner>
                <TitleInformationBanner>
                    Cursos a partir de R$22,90 cada
                    <TextInformationBanner><p>Aproveite a promoção Amor ao aprendizado até 18 de agosto para comprar os principais cursos por menos.</p></TextInformationBanner>
                </TitleInformationBanner>               
            </InformationBanner>           
        </BackgroundWrapper>

    )

}