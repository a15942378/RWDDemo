import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoText = styled.h1`
font-family: 'Microsoft JhengHei';
font-size: ${prop => prop.theme.fontxxl};
transition:all 0.2s ease;

&:hover{
    transform: scale(1.1);
}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to='/'>
            Logo
        </Link>
    </LogoText>
  )
}

export default Logo