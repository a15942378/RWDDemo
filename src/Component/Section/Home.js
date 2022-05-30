import React from 'react'
import styled from 'styled-components'
import TextWriter from '../TextWriter'
import CoverVideo from './CoverVideo'
import RoundTextBlack from '../../assets/Rounded-Text-Black.png'
import { keyframes } from 'styled-components'

const Section = styled.section`
min-height:${prop => `calc(100vh - ${prop.theme.navHeight})`} ;
width:100vw ;
position:relative ;
background-color: ${prop => prop.theme.body};
`

const Container = styled.div`
width:75% ;
min-height:80vh ;
margin:0 auto ;
/* background-color:lightblue ; */
display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width:50% ;
height:100% ;
display: flex;
flex-direction:column ;
justify-content: center;
align-items: center;
`

const rotate = keyframes`
100%{
  transform: rotate(1turn) ;
}
`

const Round = styled.div`
position:absolute ;
bottom:2rem ;
right:90% ;
width:6rem ;
height:6rem ;
border: 1px solid ${prop=> prop.theme.text};
border-radius:50% ;

img{
  width:100% ;
  height:auto ;
  animation: ${rotate} 6s linear infinite reverse;
}
`

const Circle = styled.span`
width: 3rem;
height:3rem ;
display:flex ;
justify-content: center;
align-items: center;
border-radius:50% ;

position:absolute ;
top:50% ;
left:50% ;
transform:translate(-50%,-50%) ;

background-color: ${prop => prop.theme.text};
color: ${prop => prop.theme.body};
font-size: ${prop => prop.theme.fontxl};
`



const Home = () => {
  return (
    <Section>
      <Container>
        <Box><TextWriter /></Box>
        <Box><CoverVideo /></Box>
      </Container>

      <Round>
        <Circle>
          &#x2193; {/* 箭頭的Hex Code */}
        </Circle>
        <img src={RoundTextBlack} alt='NTF' />
      </Round>
    </Section>
  )
}

export default Home