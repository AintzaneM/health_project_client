

import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import Services from '../../components/services/Services'

export const AboutUs = () => {
  return (
      <>
      <Header/>
        <AboutUsContainer className='about-container'>
            <ContainerTop className='top-about-container'>
                {/* <img src="/pedestrians.jpg"/> */}
                
                    <p>¿Qué es XXXXXXXX?</p>
                    <p className="drivers">
                        <strong><span className="drivers-items"></span></strong>
                    </p>
            </ContainerTop>
            <ContainerTextAboutUs className='text-about'>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </ContainerTextAboutUs>
              
                <ContainerCirclesAboutUs className='about-container-circles' >
                    <Services className='about-wrap-text'>
                        
                    </Services>
                </ContainerCirclesAboutUs> 

        </AboutUsContainer>
        <Footer/>
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
p{
    
    font-size: 70px;
    margin-bottom: 20px;
}
.drivers{
    font-size: 30px;
}

.drivers-items {
    font-size: 30px;
    color: #3c096c;
    background-color: #ffc05c;
    border-radius: 4px;
    padding: 6px;
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

`

const ContainerTextAboutUs = styled.div`
display: grid; 
grid-template-columns: 1fr 1fr; 
grid-template-rows: 1fr; 
gap: 0px 40px; 
margin: 20px 0;


`
const ContainerCirclesAboutUs = styled.div`


`

const Wrap = styled.div`


`