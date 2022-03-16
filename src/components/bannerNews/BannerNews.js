import React from 'react'
import styled from 'styled-components'
import {VolumeUp} from '@material-ui/icons';

const BannerNews = () => {
  return (
    <ContainerBannerNews className="container-banner">
        <VolumeUp className="speaker-img"/>
        <p>¡Últimas novedades! Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <a href="">
            <span>¡DESCÚBRELAS!</span>
        </a>

    </ContainerBannerNews>
  )
}

export default BannerNews


const ContainerBannerNews = styled.div`
background-color: #ffc05c;
margin: 40px 10px;
border-radius: 20px;
width: 70%;
margin: 50px auto;
padding: 15px 20px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
color: #3c096c;

    p{
        margin-left: 2%;
    }

    a{
        text-decoration: none;
        margin-left: 20%;
        font-weight: bold;
        background-color: #e0cdcd;
        border-radius: 14px;
        padding: 10px ;
        // position: relative;
        
        &:hover{
        background-color: #3c096c;
        color: #e0cdcd;
        
       
        

    }




}
`


