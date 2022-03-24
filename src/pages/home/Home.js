import React from 'react'
import styled from 'styled-components'
import BannerNews from '../../components/bannerNews/BannerNews'
import ImgSlider from '../../components/slider/ImgSlider'
import Services from '../../components/services/Services'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'

export const Home = () => {
  return (
    <>
    <Header/>
    <HomeContainer className='home-container'>
    <ImgSlider className= 'imgslider'/>
      <ContainerTop className='top-home-container'>
        {/* <p className='small-text-home'>CONSCIENCIA</p> */}
        <div className='container-text'>
        <h1 className='motivational-text-home'>Toma el control de tu mente</h1>
        <p className='small-text-home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        </div>
        
        <ContainerButtonHome>
            <Link className='conocenos' href="/quienes-somos">
                <span style={{fontWeight: "700"}}>CONÓCENOS</span>
            </Link>
            <Link className='registro' href="/registro">
                <span style={{fontWeight: "700"}}>CREA TU CUENTA</span>
            </Link>
        </ContainerButtonHome>
      </ContainerTop>
      
      {/* <BannerNews/> */}
      <ContainerServices>
        <Services/>
        <Services/>
      </ContainerServices>
    </HomeContainer>
    <Footer/>
    </>
  )
}

const HomeContainer = styled.div`
// background-color: #e0cdcd
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
// top: 40px;
padding: 0 calc(3.5vw + 5px);
`

const ContainerTop = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto ; 
width: 100%;
padding: 20px 0;
.container-text{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50em;
}
h1{
  font-size: 70px;
  display:flex;
  align-items: center;
  justify-content: flex-start;
  color: #3c1642 ;
  text-align: center; 
}

p{
  font-size: 20px;
  display:flex;
  align-items: center;
  justify-content: flex-start;
  color: #3c1642 ;
  text-align: center;
  
}

// @media (min-width: 1201px) {

// }

@media (min-width: 1025px) and (max-width: 1200px) {
  h1{
    font-size: 60px;
  }
  p{
    padding: 0 10%;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  h1{
    font-size: 50px;
  }
  p{
    padding: 0 15%;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  h1{
    font-size: 30px;
  }
  p{
    font-size: 16px;
    padding: 0 20%;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  h1{
    font-size: 20px;
  }
  p{
    font-size: 12px; 
    padding: 0 30%;
  }
}
`
const ContainerButtonHome = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 20px 0;
width:100%;
font-size: 20px;
@media (min-width: 1201px) {
  .conocenos {
    margin-right: 20px;
  }
  .registro {
    margin-left: 20px;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .conocenos {
    margin-right: 20px;
  }
  .registro {
    margin-left: 20px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px ;

  .conocenos {
    margin-right: 20px;
  }
  .registro {
    margin-left: 20px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  font-size: 14px;
  margin-top: 20px ;
  .conocenos {
    margin-right: 20px;
  }
  .registro {
    margin-left: 20px;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  font-size: 12px;
  margin-top: 20px ;
  .conocenos {
    margin-right: 20px;
  }
  .registro {
    margin-left: 20px;
  }
}  
`
const Link =styled.a`
  text-decoration: none;
  background-color: #bfd8bd;
  color: #3c1642;
  border-radius: 14px;
  margin: 0 auto;
  padding:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  
  -webkit-box-shadow: 0 8px 6px -6px #3c1642;
	   -moz-box-shadow: 0 8px 6px -6px #3c1642;
	        box-shadow: 0 8px 6px -6px #3c1642;

  &:hover{
  background-color: #3c1642;
  color: #edeec9;
  }
}
   
`

const ContainerServices = styled.div`
margin-bottom: 50px;
@media (max-width: 768px) {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
`