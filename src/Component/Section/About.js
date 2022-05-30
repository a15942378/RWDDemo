import React from 'react'
import styled from 'styled-components'
import CardSwap from '../CardSwap'
import Button from '../Botton'
import { ThemeProvider } from 'styled-components'
import {dark} from '../../style/Themes';

const Section = styled.section`
width:100% ;
min-height:100vh ;
margin:0 auto ;
background-color: ${prop => prop.theme.text} ;
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
const Title = styled.h2`
font-size:${prop => prop.theme.fontxxl} ;
text-transform: capitalize;
width:80% ;
color: ${prop => prop.theme.body};
align-self: flex-start ;
margin:0 auto ;
`

const SubText = styled.p`
font-size:${prop => prop.theme.fontlg} ;
width:80% ;
color: ${prop => prop.theme.body};
align-self: flex-start ;
margin:1rem auto ;
font-weight:400 ;
`

const SubTextLight = styled.p`
font-size:${prop => prop.theme.fontmd} ;
width:80% ;
color: ${prop => `rgba(${prop.theme.bodyRgba},0.6)`};
align-self: flex-start ;
margin:1rem auto ;
font-weight:400 ;
`

const ButtonContiner = styled.div`
width:80% ;
align-self:flex-start ;
margin:1rem auto ;
`

const About = () => {
  return (
    <Section>
      <Container>
        <Box><CardSwap /></Box>
        <Box>
          <Title>
            關於我們與Steven的起源故事
          </Title>
          <SubText>
            也許你還不知道Steven這個人
            但是你遲早會知道的
          </SubText>
          <SubTextLight>
            因為他是YYDS 我們有多達200+以上的種類供您選擇 是不是心動了 別再猶豫趕快加入我們的Discord獲得第一手資訊吧
          </SubTextLight>
          <ButtonContiner>
            <ThemeProvider theme={dark}>
              <Button text={'加入Steven Discord吧'} link='#'>
              </Button>
            </ThemeProvider>
          </ButtonContiner>
        </Box>
      </Container>
    </Section>
  )
}

export default About