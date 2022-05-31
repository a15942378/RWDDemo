import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Botton'
import { connect } from '../web3/internal'

const Section = styled.section`
width: 100vw;
background-color: ${prop => prop.theme.body};
`
const Navbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
width: 85%;
height: ${prop => prop.theme.navHeight};
margin: 0 auto;
`

const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
`
const MenuItem = styled.li`
margin: 0 1rem;
color: ${prop => prop.theme.text};
cursor: pointer;

&::after{
  content:'' ;
  display: block;
  width: 0%;
  height:2px ;
  background: ${prop => prop.theme.text};
  transition: width 0.3s ease;
}

&:hover::after{
  width:100% ;
}
`

const Navigation = () => {
  return (
    <Section>
      <Navbar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button text='連接錢包' link='https://www.google.com/' onclick={connect} />
      </Navbar>
    </Section>
  )
}

export default Navigation