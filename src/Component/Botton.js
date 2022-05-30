import React from 'react'
import styled from 'styled-components'


const Btn = styled.button`
display:inline-block;
background-color: ${prop => prop.theme.text};
color: ${prop => prop.theme.body};
outline:none ;
border:none ;
font-size: ${prop => prop.theme.fontsm};
padding:0.9rem 2.5rem;
border-radius:50px;
cursor: pointer;
position: relative ;
transition:all 0.2s ease;

&:hover{
    transform:scale(0.9) ;
}

&::after{
    content: '';
    position:absolute ;
    top:50% ;
    left:50% ;
    transform: translate(-50%,-50%) scale(0);
    border: 2px solid ${prop => prop.theme.text};
    border-radius:50px ;
    width:100% ;
    height:100% ;
    transition:all 0.2s ease;
}
&:hover::after{
    transform: translate(-50%,-50%) scale(1);
    padding: 0.3rem;
}
`

const Botton = ({text,link}) => {
  return (
    <Btn>
        <a href={link} target='_blank' rel='noreferrer'>{text}</a>
    </Btn>
  )
}

export default Botton