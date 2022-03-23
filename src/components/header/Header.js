import React, {useState} from 'react'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Nav>
    {/* <NavMenuLeft className='NavMenuLeft'> */}
      
      <Link  href="/" className='logo-img'>
        <Logo src="/logo.png" alt="" ></Logo> 
      </Link>
      
    {/* </NavMenuLeft> */}

    <Bars onClick= {() => setIsOpen(!isOpen)}>

        <span />
        <span />
        <span />
    </Bars>
        
    <NavMenuCenter isOpen= {isOpen} className='NavMenuCenter'> 

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
        
    {/* <NavMenuRight>
        
                    
        

    </NavMenuRight> */}
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
flex-wrap: wrap;
`
// const Logo = styled.img`
// `

// const NavMenuLeft= styled.div`
// display:flex;
// justify-content: center;
// align-items: center;


// `

const Bars = styled(FaBars) `

display: none;
color: #fff;
cursor: pointer;
span {
    height: 2px;
    width: 25px;
    background-color: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  
// display:flex;
}

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
justify-content: space-between;
color: #3c096c;
position: relative;
// margin-top:20px;

// a{
//     text-decoration: none;
//     margin: 20px;
//     display: flex;
//     // justify-content: space-around;
//     align-items: center;
// }

@media screen and (max-width: 768px) {
    // display: none;
    overflow: hidden;
    // display: flex;
    flex-direction: column;
    // top: 50;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    background-color:red;
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
