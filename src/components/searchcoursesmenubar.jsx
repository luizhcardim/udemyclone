import React from 'react'
import styled from 'styled-components'

const SearchCoursesMenubarWrapper = styled.div`
    flex-grow: 1;
    min-width: 18rem;
    height: 4.8rem;
    border: 1px solid #1c1d1f;
    border-radius: 9999px;
    background-color: #f7f9fa;
    margin: 0 1.2rem;
`

export default function SearchCoursesMenubar() {
    return (
        <SearchCoursesMenubarWrapper></SearchCoursesMenubarWrapper>
    )
}
