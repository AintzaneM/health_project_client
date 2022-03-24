import React, { useState } from 'react'
import styled from 'styled-components'
import {ArrowForwardIos} from '@material-ui/icons'

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false)
    // const modules = ["Module 1", "Module 2", "Module 3"]
    return (
      <DropdownContainer className="dropdown-container">
        <DropdownButton className="dropdown-btn" onClick={event => setIsActive(!isActive)}> 
        <span>Módulo X</span>
        <ArrowForwardIos/>
        </DropdownButton>
        {isActive && (
            <DropdownContent className="dropdown-content">
                <DropdownItem className="dropdown-item">Action</DropdownItem >
                <DropdownItem className="dropdown-item">Another action</DropdownItem>
                <DropdownItem className="dropdown-item">Something else</DropdownItem>
            </DropdownContent>
        )}
   </DropdownContainer>
  )
}

export default Dropdown

const DropdownContainer = styled.div`
position:relative;
width: 100%;
// height: 150px;
margin: 10px auto;
// background-color: red;
// position: absolute;
// padding: 15px 20px;
user-select: none;
}
`
const DropdownButton = styled.button`
width: 70%;
border: 2px solid #3c1642;
border-radius: 14px;
margin: 40px auto;
padding: 15px 20px;
background-color: #bfd8bd;
// box-shadow: 3px 3px 10px 6px rgba(0, 0 , 0, 0.06);
-webkit-box-shadow: 0 8px 6px -6px #3c1642;
	   -moz-box-shadow: 0 8px 6px -6px #3c1642;
	        box-shadow: 0 8px 6px -6px #3c1642;
font-weight: bold;
color: #3c1642;
font-size: 25px;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
cursor: pointer;
transition: all .2s ease;
&:hover{
background-color: #3c1642;
color: #edeec9;
opacity: 1;
transform: translateY(0);

`

const DropdownContent = styled.div`
position: relative;
padding: 20px;
font-weight: bold;
// left: 0;
width: 70%;
margin: 0 auto;
box-shadow: 3px 3px 10px 6px rgba(0, 0 , 0, 0.06);
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid #3c1642;
border-radius: 14px;
background-color: #3c1642;

`

const DropdownItem = styled.div`
padding: 20px;
font-size: 25px;
border-bottom: 2px solid #bfd8bd;
margin: 10px;
width: 100%;
border-radius: 14px;
color: #edeec9;
`