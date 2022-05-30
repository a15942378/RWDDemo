import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Botton'

const Title = styled.h2`
font-size:${prop => prop.theme.fontxxl} ;
text-transform: capitalize;
width:80% ;
${prop => prop.theme.text};
align-self: flex-start ;

span{
    text-transform:uppercase ;
    /* 可以自行更換字型 */
    font-family: ''; 
}
.textBlue{
    color:blue ;
}
.textOrange{
    color:orange ;
}
.textRed{
    color:red ;
}
`
const SubTitle = styled.h3`
font-size:${prop => prop.theme.fontlg} ;
text-transform:capitalize ;
color:${prop =>`rgba(${prop.theme.textRgba},0.6)`} ;
font-weight:600 ;
margin-bottom:1rem ;
width:80% ;
align-self:flex-start ;
`

const ButtonContiner = styled.div`
width:80% ;
align-self:flex-start ;
`

const TextWriter = () => {
  return (
    <>
    <Title>
        沒有Steven的世界是如此空虛
        <Typewriter
        options={{
            autoStart: true,
            loop: true
        }}
            onInit={(typewriter) => {
                typewriter
                .typeString(`<span class='textBlue'>我想你也是這樣想吧</sapn>`)
                .pauseFor(200)
                .deleteAll()
                .typeString(`<span class='textRed'>快加入Steven的NFT宇宙吧</sapn>`)
                .pauseFor(200)
                .deleteAll()
                .start();
            }}
        />
    </Title>
    <SubTitle>
        相信你能理解的
    </SubTitle>
    <ButtonContiner>
        <Button text={'探索Steven'} link={'#about'}>

        </Button>
    </ButtonContiner>
    </>
  )
}

export default TextWriter