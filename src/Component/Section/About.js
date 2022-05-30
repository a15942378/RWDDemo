import React from 'react'
import styled from 'styled-components'
import CardSwap from '../CardSwap'


const Section = styled.section`
width:100% ;
min-height:100vh ;
margin:0 auto ;
background-color: ${prop => prop.theme.text} ;
color: ${prop => prop.theme.body} ;
display: flex;
justify-content: center;
align-items: center;
position:relative ;
`
const Container = styled.div`
width:75% ;
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

const About = () => {
  return (
    <Section>
      <Container>
        <Box><CardSwap /></Box>
        <Box>B</Box>
      </Container>
    </Section>
  )
}

export default About