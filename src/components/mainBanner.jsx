import React from 'react'
import styled from 'styled-components'
import {Search} from '@styled-icons/boxicons-regular/Search'
/*
- Alguns estilos estão duplicados, verificar a possibilidade de herança nesses casos.
- Remover margin do search banner e width deve ser 100%.
- colocar dois elementos dentro do search banner (um pro icon e outro pra input)
- placeholder deve ser aplicado sobre um elemento input.
- Remover line-height de TitleInformationBanner
*/



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
box-shadow: rgba(0, 0, 0, 0.452)  2px 2px 5px;
`

const TitleInformationBanner = styled.h1`
padding: 24px;
padding-top: 5px;
font-family: SuisseWorks,Georgia,Times,times new roman,serif,apple color emoji,segoe ui emoji,segoe ui symbol;
font-weight: 700;
font-size: 3.8rem;
letter-spacing: -.05rem;
`
const TextInformationBanner = styled.p`
font-family: sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
font-weight: 400;
line-height: 1.4;
font-size: 1.6rem;

`
const SearchBanner = styled.div`
display: flex;
align-items: center;
flex: 1;
min-width: 18rem;
height: 4.8rem;
border: 1px solid #1c1d1f;
background-color: #f7f9fa;
font-family: sf pro text,-apple-system,BlinkMacSystemFont,Roboto,segoe ui,Helvetica,Arial,sans-serif,apple color emoji,segoe ui emoji,segoe ui symbol;
font-weight: 400;
line-height: 1.4;
font-size: 1.6rem;
color: black;
padding-left: 10px;
/*width: 100%;*/
`
const SearchBannerIcon = styled(Search)`
    height: 20px;
    min-width: 20px;
    margin: 0px 12px;

`
const SearchBannerInput = styled.input`
    flex:1;
    background: transparent;
    border: 0px;
    height: 100%;
    outline: none;
    overflow: hidden;
`

export default function MainBanner(){
    return (
        <BackgroundWrapper>
            <InformationBanner>
                <TitleInformationBanner>
                    Cursos a partir de R$22,90 cada
                    <TextInformationBanner><p>Aproveite a promoção Amor ao aprendizado até 18 de 
                        agosto para comprar os principais cursos por menos.</p></TextInformationBanner>
                    <SearchBanner>                        
                        <SearchBannerInput placeholder="O que você quer aprender?"></SearchBannerInput>
                        <SearchBannerIcon></SearchBannerIcon>             
                     
                       
                    </SearchBanner>

                </TitleInformationBanner>               
            </InformationBanner>          
        </BackgroundWrapper>


    )

}