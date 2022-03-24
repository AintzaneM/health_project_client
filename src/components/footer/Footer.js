import React from 'react'
import styled from 'styled-components'
// import {Instagram, Email, Call, Home} from '@material-ui/icons';


const Footer = () => {
  return (
    <ContainerFooter>
            <TextLeft>
                <p style={{fontWeight: "700"}}>¿HABLAMOS?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </p>
                <a href="/">
                    Queremos saber de ti
                </a>
                <p>© 2021 Copyright: Cnsciencia project</p> 
            </TextLeft>
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.div`

position: relative;
bottom:0;
height: 25vh;
width: 100%;
background-color: #bfd8bd;
color:  #3c1642;
display:flex;
align-items: center;
justify-content:center;
text-align: center;
padding: 40px;
`
const TextLeft = styled.div`
// position: relative;
padding: 20px;
// position: absolute;
// bottom:0;

p{
    
    font-size: 20px; 
    // margin: 20px 10px;
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 16px; 
    }
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px; 

    }
}
span{
    font-size: 20px;
    
    
}

a{
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 14px; 
    }
    text-decoration: none;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align:center;
    font-size: 20px;
    cursor: pointer;
    background-color: #3c1642;
    color: #bfd8bd;
    border-radius: 14px;
    padding:20px 10px;
    // margin: 20px 10px;
    // position: relative;
    font-weight: bold;
    -webkit-box-shadow: 0 8px 6px -6px #3c1642;
    -moz-box-shadow: 0 8px 6px -6px #3c1642;
         box-shadow: 0 8px 6px -6px #3c1642;
    &:hover{
    background-color: #edeec9;
    color: #3c1642;


    
    
}


@media (min-width: 481px) and (max-width: 768px) {

}

@media (min-width: 320px) and (max-width: 480px) {

}



`
