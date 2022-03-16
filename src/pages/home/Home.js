import React from 'react'
import styled from 'styled-components'
import BannerNews from '../../components/bannerNews/BannerNews'
import ImgSlider from '../../components/slider/ImgSlider'
import Services from '../../components/services/Services'

export const Home = () => {
  return (
    
    <HomeContainer className='home-container'>
      
      <ContainerTop className='top-home-container'>
        <p className='small-text-home'>CONSCIENCIA</p>
        <h1 className='motivational-text-home'>Toma el control de tu mente</h1>
        <p className='small-text-home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        <ContainerButtonHome>
            <a href="">
                <span>CONÓCENOS</span>
            </a>
            <a href="">
                <span>CREA TU CUENTA</span>
            </a>
        </ContainerButtonHome>
      </ContainerTop>
      <ImgSlider/>
      <BannerNews/>
      <Services/>

      
      
        
      
      home
      


    </HomeContainer>
  )
}

const HomeContainer = styled.div`
// background-color: #e0cdcd
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 40px;
padding: 0 calc(3.5vw + 5px);
`

const ContainerTop = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
// background-color: #e0cdcd
// padding-top: 50px ;
margin: auto ;


h1{
  font-size: 70px;
  // padding-bottom:  10px;
}
`

const ContainerButtonHome = styled.div`
margin-top: 3%;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
// padding: 1%;

  a{
    text-decoration: none;
    margin-right: 20px;
    background-color: #ffc05c;
    border-radius: 14px;
    padding:10px;
    position: relative;
    
    &:hover{
    background-color: #3c096c;
    color: #e0cdcd;
    }
    

`

