import React from 'react'
import styled from 'styled-components'
import GIF from '../../assets/Home GIF.gif'

const VideoContiner = styled.div`
width:100% ;

img{
    width:100% ;
    height:auto ;
}

`

const CoverVideo = () => {
  return (
    <VideoContiner>
        <img src={GIF} alt='' />
    </VideoContiner>
  )
}

export default CoverVideo