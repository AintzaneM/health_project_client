import React from 'react'
import styled from 'styled-components'
// import {Instagram, Email, Call, Home} from '@material-ui/icons';


const Footer = () => {
  return (
    <ContainerFooter>
        <FooterRight>
            <TextLeft>
                <p>
                ¿HABLAMOS?<br/>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </p>
                <a href="/">
                    Queremos saber de ti
                </a>
              
                <FooterBottom>
                    <span>© 2021 Copyright: Cnsciencia project</span> 
                </FooterBottom>
            </TextLeft>
            
            {/* <TextRight >
                <p className="container-left">CONTACTA<br/>
                <Call/> 6XX XX XX XX <br/>
                <Home/>Iste atque ea quis molestias.
                <FooterIcons>
                    <Instagram className="instagram-icon"/>
                    <Email className="email-icon"/>
                </FooterIcons> 
                </p>
            </TextRight> */}
        </FooterRight>      
    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.div`

height: 25vh;
width: 100%;
background-color: #ffc05c;
display:flex;
align-items: center;
justify-content:center;
text-align: center;
// flex-direction: column;
`

// const FooterIcons = styled.div`
// padding-top: 20px;
// display:flex;
// // justify-content: center;
// align-items: center;
// .instagram-icon {
//     margin-right: 10px;
// }

// .email-icon{
//     margin-left: 10px;

// }
// `
const FooterRight =styled.div`

// // padding-top: 40px;
// display:flex;
// // flex-direction: row;
// // align-items: center;
// // justify-content: center;
// // width: 100%;
// // height: 20px;
// margin-bottom: 10px;



`
const TextLeft = styled.div`

p{
    margin-bottom: 20px;
    font-size: 20px;
    // width: 40%;
}

a{
    text-decoration: none;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align:center;
    // margin: 0 20px;
    // width: 40%;
    background-color: #e0cdcd;
    border-radius: 14px;
    padding:10px;
    position: relative;
    font-weight: bold;
    &:hover{
    background-color: #3c096c;
    color: #e0cdcd;
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
const FooterBottom = styled.div`
position:relative;
margin-top: 20px;
color: #3c096c;
`