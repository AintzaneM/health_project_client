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
    <ImgSlider classNamec= 'imgslider'/>
      <ContainerTop className='top-home-container'>
        {/* <p className='small-text-home'>CONSCIENCIA</p> */}
        <div className='container-text'>
        <h1 className='motivational-text-home'>Toma el control de tu mente</h1>
        <p className='small-text-home'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        </div>
        
        <ContainerButtonHome>
            <a className='conocenos' href="/quienes-somos">
                <span>CONÓCENOS</span>
            </a>
            <a className='registro' href="/registro">
                <span>CREA TU CUENTA</span>
            </a>
        </ContainerButtonHome>
      </ContainerTop>
      
      <BannerNews/>
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
flex-direction: row;
align-items: center;
justify-content: space-around;
margin: 0 auto ; 
width: 100%;
padding: 40px 0;
.container-text{
  display:flex;
  flex-direction: column;
  width: 50em;
}
h1{
  font-size: 70px;
  display-flex;
  align-items: center;
  color: #3c1642 ;
  // padding-bottom:  10px;
}

@media (min-width: 1201px) {

}

@media (min-width: 1025px) and (max-width: 1200px) {

}

@media (min-width: 769px) and (max-width: 1024px) {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto; 
  width: 100%;
  padding: 40px ;
  .container-text{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50em;
  }
  h1{
    font-size: 40px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #3c1642 ;
  }
  p{
    font-size: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #3c1642 ;
    text-align: center;
    padding: 0 80px;
  }
}
@media (min-width: 481px) and (max-width: 768px) {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto; 
  width: 100%;
  padding: 40px ;
  .container-text{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50em;
  }
  h1{
    font-size: 30px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #3c1642 ;
  }
  p{
    font-size: 16px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #3c1642 ;
    text-align: center;
    padding: 0 20%;
  }
}

@media (min-width: 320px) and (max-width: 480px) {

  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto; 
  width: 100%;
  padding: 40px ;
  .container-text{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50em;
  }
  h1{
    font-size: 20px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #3c1642 ;
  }
  p{
    font-size: 12px;
    display:flex;
    align-items: center;
    justify-content: center;
    color: #3c1642 ;
    text-align: center;
    padding: 0 35%;
  }
  
   
 
}
`
const ContainerButtonHome = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 20px;
.conocenos {
  margin-right: 20px;
}
.registro {
  margin-left: 20px;
}


  a{
    text-decoration: none;
    background-color: #ffc05c;
    border-radius: 14px;
    padding:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: relative;

    &:hover{
    background-color: #3c096c;
    color: #e0cdcd;
    }
    
    @media (min-width: 1201px) {
      
    
    }
    
    @media (min-width: 1025px) and (max-width: 1200px) {
      
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
        margin-left: 20px;
      }
      .registro {
        margin-right: 20px;
      }
        a{
          text-decoration: none;
          background-color: #ffc05c;
          border-radius: 14px;
          padding:16px;
          display: flex;
          justify-content: center;
          align-items: center;
          // position: relative;

          &:hover{
          background-color: #3c096c;
          color: #e0cdcd;
          }
        }
      }

      @media (min-width: 481px) and (max-width: 768px) {
        display: flex;
        flex-direction: column ;
        justify-content: space-around;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        margin-top: 14px ;
  
          // .conocenos {
          //   margin-left: 20px;
          // }
          // .registro {
          //   margin-right: 20px;
          // }
          a{
            text-decoration: none;
            background-color: #ffc05c;
            border-radius: 14px;
            padding:16px;
            display: flex;
            justify-content: center;
            align-items: center;
            // position: relative;
  
            &:hover{
            background-color: #3c096c;
            color: #e0cdcd;
            }
          }
        }

        
        
     }
     
     @media (min-width: 320px) and (max-width: 480px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 12px;
      margin-top: 12px ;
      
      

        .conocenos {
          margin-left: 20px;
          width: 100%;
        }
        .registro {
          margin-right: 20px;
          width: 100%;
        }
        a{
          text-decoration: none;
          background-color: #ffc05c;
          border-radius: 14px;
          padding:16px;
          display: flex;
          justify-content: center;
          align-items: center;
          // position: relative;
          

          &:hover{
          background-color: #3c096c;
          color: #e0cdcd;
          }
        }
      }

      
        
         
       
     
      
     
    
    
   
`




const ContainerServices = styled.div`
margin-bottom: 50px;
`