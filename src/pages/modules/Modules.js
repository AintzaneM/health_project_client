import React from 'react'
import Dropdown from '../../components/dropdown/Dropdown'
import { Header } from '../../components/header/Header'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import Services from '../../components/services/Services'
import Benefits from '../../components/benefits/Benefits'

const Modules = () => {
  return (
    <>
    <Header/>
    <ModulesContainer>
      <ContainerModulesTop>
      <p>Descubre qué aprenderás</p>
      </ContainerModulesTop>
      <ContainerDropdown>
      <Dropdown></Dropdown>
      <Dropdown></Dropdown>
      <Dropdown></Dropdown>
      <Dropdown></Dropdown>
      <Dropdown></Dropdown>
      <Dropdown></Dropdown>
      <Benefits/>
      </ContainerDropdown>

    </ModulesContainer>
    <Footer/>

  
    </>
  )
}

export default Modules

const ModulesContainer = styled. div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
padding: 0 calc(3.5vw + 5px);

`

const ContainerModulesTop = styled.div`
display: flex;
align-items: center;
justify-content: center;
p{
  font-size: 70px;
  }
`

const ContainerDropdown = styled.div`
margin-bottom: 20px;
`
