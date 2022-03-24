import React, { useState } from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Nav>

        <LogoContainer>
        <a href="/" className='logo-img'>
          <Logo src="/logo.png" alt="" ></Logo>
        </a>
        </LogoContainer>

        <Bars onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Bars>

        <NavMenuCenter isOpen={isOpen} className='NavMenuCenter'>

          <Link href="/">
            <span>Inicio</span>
          </Link>
          <Link href="/quienes-somos">
            <span>Quiénes somos</span>
          </Link>
          <Link href="/formacion">
            <span>Formación</span>
          </Link>
          <Link href="/login">
            <span>CONÉCTATE</span>
          </Link>
        </NavMenuCenter>
      </Nav>
    </>
  )
}

const Nav = styled.div`
position: sticky;
top: 0;
left: 0;
right: 0;
height: 80px;
width: 100%;
background-color:#bfd8bd;
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
z-index: 3;
flex-wrap: wrap;
`
const Bars = styled(FaBars) `
display: none;
color: #3c1642;
cursor: pointer;

  


@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
}

`
const LogoContainer =styled.div`
display:flex;
justify-content: center;
align-items: center;
position: relative;
cursor: pointer;
`

const Logo = styled.img`
margin: 10px 20px;
max-height: 60px;
display:block;
width: 100%;
`

const Link = styled.a`
text-decoration: none;
display: flex;
justify-content: space-around;
align-items: center;
margin-right: 20px;
color: #3c1642;
border-bottom: solid;
transition: all 0.3s ease-in-out;
&:hover {
  border-bottom: 5px solid #edeec9;
}

@media screen and (max-width: 768px) {
//  padding: 20px;
 margin: 20px 0px;
 display: flex;
 align-items: center;
 justify-content: center;
 border-bottom: solid;
}
`
const NavMenuCenter= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: #3c096c;
position: relative;


@media screen and (max-width: 768px) {
    
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    background-color: #bfd8bd;
    width: 100%;
   
    
  }
`

// const NavMenuRight= styled.div`
// display: flex;
// justify-content: flex-end;
// color: #3c096c;
// font-weight: bold;


// a{
//     text-decoration: none;
//     margin-right: 20px;
//     background-color: #e0cdcd;
//     border-radius: 14px;
//     padding:10px;
//     position: relative;
//     &:hover{
//     background-color: #3c096c;
//     color: #e0cdcd;
//     }

    
// }

// @media screen and (max-width: 768px) {
//     display: none;
//   }
