import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'

// Secion 排版
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
`

// Title
const Title = styled.h1`
  font-size: ${prop => prop.theme.fontxxl};
  text-transform: capitalize;
  color: ${prop => prop.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${prop => prop.theme.text};
  width: fit-content;
`

const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${prop => prop.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // 字卡左右分開
  &>*:nth-child(2n + 1) {
    justify-content: start;

    div {
      // 圓角
      border-radius: 50px 0 50px 0;
      text-align: right;
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }
  
  // 字卡左右分開
  &>*:nth-child(2n) {
    justify-content: end;

    div {
      // 反向圓角
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
`

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${props => props.theme.text};
`

const Box = styled.p`
  height: fit-content;
  background-color: ${props => props.theme.carouselColor};
  color: ${props => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${props => props.theme.text};
`

const SubTitle = styled.span`
  display: block;
  font-size: ${props => props.theme.fontxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
`;

const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};
font-weight: 400;
margin: 0.5rem 0;
`;

const RoadMapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const RoadMap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  // 把dom加入陣列
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();

    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: '0',
        },
        {
          y: '-30%',

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers: true,
          }
        }
      )
    });

    return () => {

    };
  }, [])

  // <Item>&nbsp;</Item> 這行是讓第一格字卡被擠下去用的
  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem addToRef={addToRefs} title="第一次接觸Steven" subtext="被他的魅力所吸引..." />
          <RoadMapItem addToRef={addToRefs} title="誤解Steven" subtext="誤以為Steven是沒料仔" />
          <RoadMapItem addToRef={addToRefs} title="恍然大悟" subtext="發現Steven好像才是默默做事的人" />
          <RoadMapItem addToRef={addToRefs} title="追隨Steven" subtext="迷上Steven" />
          <RoadMapItem addToRef={addToRefs} title="發現Steven的更多事蹟" subtext="原來Steven真的是神" />
        </Items>
      </Container>
    </Section>
  )
}

export default RoadMap