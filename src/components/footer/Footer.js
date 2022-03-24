import React from 'react'
import styled from 'styled-components'
// import {Instagram, Email, Call, Home} from '@material-ui/icons';


const Footer = () => {
  return (
    <ContainerFooter>
        
            <TextLeft>
                
                <span>¿HABLAMOS?</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </p>
                <a href="/">
                    Queremos saber de ti
                </a>
              
                
                <span>© 2021 Copyright: Cnsciencia project</span> 
               
            </TextLeft>
             
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.div`
height: 25vh;
width: 100%;
background-color: #bfd8bd;
color:  #3c1642;
display:flex;
align-items: center;
justify-content:center;
text-align: center;
// flex-direction: column;
`
const TextLeft = styled.div`

p{
    font-size: 20px;  
}
span{
    font-size: 20px;
}

a{
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
    padding:20px;
    margin: 20px auto;
    position: relative;
    font-weight: bold;
    -webkit-box-shadow: 0 8px 6px -6px #3c1642;
    -moz-box-shadow: 0 8px 6px -6px #3c1642;
         box-shadow: 0 8px 6px -6px #3c1642;
    &:hover{
    background-color: #edeec9;
    color: #3c1642;
}
`
// const TextRight = styled.div`
// // display: flex;
// // justify-content: flex-end;
// // width: 100%
// display:flex;
// flex-direction: column;
// align-items: center;
// margin-right: 20px;

// p{
    
    
// }
// `
// const FooterBottom = styled.div`
// position:relative;
// margin-top: 20px;
// color: #3c096c;
// `