

import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import Services from '../../components/services/Services'

export const AboutUs = () => {
  return (
    <>
      <Header />
      <AboutUsContainer className='about-container'>
        <ContainerTop className='top-about-container'>
          <span className='title-about'>¿Qué es XXXXXXXX?</span>

          <ContainerTextAboutUs className='text-about'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </ContainerTextAboutUs>
          
            {/* <img src="/pedestrians.jpg"/> */}

          
            <p className="drivers">
              <strong><span className="drivers-items"></span></strong>
            </p>
          </ContainerTop>


        <ContainerCirclesAboutUs className='about-container-circles' >
          <hr className='space-about'></hr>
          <Services className='about-wrap-text'>

          </Services>
          <Services></Services>
          
        </ContainerCirclesAboutUs>

      </AboutUsContainer>
      <Footer />
      {/* <ContainerBottom>
                <p>bottom</p>
                
                
            
            </ContainerBottom> */}
    </>
  )
}




const AboutUsContainer = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
padding: 0 calc(3.5vw + 5px);
`

const ContainerTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #3c1642;
span{
    font-size: 70px;
    margin: 20px auto;
    padding: 40px 0 0px 0;
    text-align: center;
}

p{
  text-align: justify;
}
.drivers{
  margin: 10px auto 30px auto  ;
  padding: 30px 0;
}

.drivers-items {
    font-size: 70px;
    color: #3c1642;
    background-color: #bfd8bd;
    border-radius: 14px;
    padding: 20px;
    align-items: center;
}

.drivers-items:after {
    content: "";
    animation: drivers-items 2s linear infinite;
}

@keyframes drivers-items {
    0% {
      content: "educación emocional";
    }
    60% {
      content: "blablabla";
    }
    100% {
      content: "lorem ipsum";
    }
}


@media (min-width: 1025px) and (max-width: 1200px) {
  span {
    font-size: 60px;
  }
  .drivers-items{
    font-size: 60px;
  }
  
}

@media (min-width: 769px) and (max-width: 1024px) {
  span {
    font-size: 50px;
  }
  .drivers-items{
    font-size: 50px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  span {
    font-size: 40px;
  }
  .drivers-items{
    font-size: 35px;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  span {
    font-size: 30px;
  }
  .drivers-items{
    font-size: 20px;
  }
}
 

`

const ContainerTextAboutUs = styled.div`
display: grid; 
grid-template-columns: 1fr 1fr; 
grid-template-rows: 1fr; 
gap: 0px 40px; 
margin: 10px 10px;

@media (min-width: 0px) and (max-width: 768px) {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}


`
const ContainerCirclesAboutUs = styled.div`
hr {
  background-color: #3c1642;
  height: 3px; 
  border: 0; 
  margin-bottom: 60px;

}


  



`

const Wrap = styled.div`


`