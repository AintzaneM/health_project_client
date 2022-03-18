import React from 'react'
import styled from 'styled-components'
import {Instagram, Email, Call, Home} from '@material-ui/icons';


const Footer = () => {
  return (
    <ContainerFooter>

      

        <FooterRight>

            <TextLeft>
                
                <p>
                ¿HABLAMOS?<br/>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Iste atque ea quis molestias.<br/> Fugiat pariatur maxime quis culpa 
                corporis vitae repudiandae aliquam voluptatem veniam,<br/> est atque cumque 
                </p>

                <a href="">
                    Queremos saber de ti
                </a>
               
            </TextLeft>

           
            

            <TextRight >
                <div className="container-left">
                
                <p className="container-left">CONTACTA<br/>
                <Call/> 6XX XX XX XX <br/>
                <Home/>Iste atque ea quis molestias.
                <FooterIcons>
                    <Instagram className="instagram-icon"/>
                    <Email className="email-icon"/>
                </FooterIcons> 
                </p>
                <FooterBottom>
                    <span>© 2021 Copyright: Cnsciencia project</span> 
                </FooterBottom>
                </div>
            </TextRight>
            
        </FooterRight>      

       

        
        

    </ContainerFooter>
  )
}

export default Footer

const ContainerFooter = styled.div`
// position: sticky;
// margin-top: 40px;
padding-top: 30px;

// top: 0;
// left: 0;
// right: 0;
height: 200px;
width: 100%;
background-color: #ffc05c;
display:flex;
align-items: center;
// justify-content:center;
flex-direction: column;
`

const FooterIcons = styled.div`
padding-top: 20px;
display:flex;
// justify-content: center;
align-items: center;
.instagram-icon {
    margin-right: 10px;
}

.email-icon{
    margin-left: 10px;

}
`
const FooterRight =styled.div`
padding-top: 40px;
display:flex;
flex-direction: row;
align-items: center;
// justify-content: center;
width: 100%;
height: 80px;
// margin-bottom: 10px;


`
const TextLeft = styled.div`

// height: 5vh;
// width: 50%;
display:flex;
flex-direction: column;
// justify-content: space-around;
padding-left: 100px;
padding-right: 30%;


p{
    margin-bottom: 20px;;
    
    font-size: 14px;
    // width: 40%;
}

a{
    text-decoration: none;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align:center;
    // margin: 0 20px;
    width: 40%;
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
const TextRight = styled.div`
// display: flex;
// justify-content: flex-end;
// width: 100%
display:flex;
flex-direction: column;
align-items: center;
margin-right: 20px;

p{
    
    
}

`

const FooterBottom = styled.div`
position:relative;
// margin-top: 60px;

// height: 60px;
// margin-top: 20px;
// background-color: #e0cdcd;
color: #3c096c;
// padding:  15px 0;
// display:flex;
// justify-content: center;
// align-items: center;

`