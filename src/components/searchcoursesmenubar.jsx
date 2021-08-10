import React from 'react'
import styled from 'styled-components'
import {Search} from '@styled-icons/boxicons-regular/Search'


const SearchCoursesMenubarWrapper = styled.div`
display: flex;
align-items: center;
flex: 1;
min-width: 18rem;
height: 4.8rem;
border: 1px solid #1c1d1f;
border-radius: 9999px;
background-color: #f7f9fa;
margin: 0 1.2rem;
`

const SearchIcon = styled(Search)`
    height: 20px;
    min-width: 20px;
    margin: 0px 12px;
`

const SearchInput = styled.input`
    flex:1;
    background: transparent;
    border: 0px;
    height: 100%;
    outline: none;
    overflow: hidden;
`


export default function SearchCoursesMenubar() {
    return (
        <SearchCoursesMenubarWrapper>
            <SearchIcon></SearchIcon>
            <SearchInput placeholder="Procure por qualquer coisa"></SearchInput>
        </SearchCoursesMenubarWrapper>
    )
}
