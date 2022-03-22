import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <>
    <Nav>
    <NavMenuLeft className='NavMenuLeft'>
      
      <Link  href="/" className='logo-img'>
        <Logo src="/logo.png" alt="" ></Logo> 
      </Link>
      
    </NavMenuLeft>
        
        <NavMenuCenter className='NavMenuCenter'> 

            <Link href="/">
                <span>Inicio</span>
            </Link>
       
            <Link href="/quienes-somos">
                <span>Quiénes somos</span>
            </Link>
            <Link href="/formacion">
                <span>Formación</span>
            </Link>
            {/* <a href="">
                <span>Equipo</span>
            </a>
            <a href="">
                <span>Contacto</span>
            </a> */}

        </NavMenuCenter>
        
        <NavMenuRight>
            
            <Link href="/login">
                <span>CONÉCTATE</span>
            </Link>                
            

        </NavMenuRight>
    </Nav>
    </>
  )
}

const Nav = styled.div`
position: sticky;
top: 0;
left: 0;
right: 0;
height: 70px;
width: 100%;
background-color:#ffc05c;
display:flex;
justify-content: space-between;
align-items: center;
z-index: 3;
`
// const Logo = styled.img`
// `

const NavMenuLeft= styled.div`
display:flex;
justify-content: center;
align-items: center;

`

const Logo = styled.img`
padding: 0;
width: 60px;
// margin-top: 4px;
margin-left: 20px;
max-height: 60px;
font-size: 24px;
display: flex;

img {
    display:block;
    width: 100%;
}
`

const Link = styled.a`
`

const NavMenuCenter= styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #3c096c;
width: 40%;
a{
    text-decoration: none;
    margin: 20px;
    display: flex;
    // justify-content: space-around;
    align-items: center;
}
`

const NavMenuRight= styled.div`
display: flex;
justify-content: flex-end;
color: #3c096c;
font-weight: bold;


a{
    text-decoration: none;
    margin-right: 20px;
    background-color: #e0cdcd;
    border-radius: 14px;
    padding:10px;
    position: relative;
    &:hover{
    background-color: #3c096c;
    color: #e0cdcd;
    }
    
}
`