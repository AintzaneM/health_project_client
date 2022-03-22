import React from 'react'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'

const Register = () => {
  return (
      <>
      <Header></Header>
    <Container className='register-container'>
      <RegisterWrapper className="register-wrapper">
        <div className='register-left'>
          <img className='register-logo' src="./banner3.png" alt=""></img>
          <span className='register-desc'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </span>
        </div>

        <div className='register-right'>
          <form className='register-box' >
            <input 
              className='input-register' 
            //   ref={}  
              required 
              placeholder='username'
            >
            </input>
            <input 
              className='input-register' 
            //   ref={} 
              required 
              type= "email" 
              placeholder='email'>
            </input>
            <input 
              className='input-register' 
            //   ref={} 
              required 
              type= "password" 
              placeholder='password'
              minLength="6">
              
            </input>
            <input 
              className='input-register' 
            //   ref={} 
              required 
              type= "password" 
              placeholder='repeat-password'
              minLength="6">
            </input>
            <button className='button-register' type="submit">Regístrate</button>
            <button href="/login" className='button-login'>Inicia tu sesión</button>
          </form>

        </div>
      </RegisterWrapper>

      


    </Container>
    <Footer/>
    </>
  )
}
  


export default Register

const Container = styled.div`
// position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
padding: 0 calc(3.5vw + 5px);
color: #3c096c;
display: flex;
align-items: center;
justify-content: center;

`

const RegisterWrapper = styled.div`
width: 100%;
height:100%;
margin: 0 auto;
display: flex;
align-items: center;
// background-color: yellow;
justify-content: center;
.register-left, .register-right {
  flex: 1;
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.register-logo {
  position: relative;
  height: 100%;
  width: 100%;
  margin: 70px 40px 20px;
  display: flex;
  align-item: center;

}

.register-desc{
  font-size: 24px;
  margin: 20px 40px;
}

.register-box {
  height: 500px;
  width: 100%;
  padding: 50px;
  background: white;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  

}

.input-register {
  height: 30px;
  border-radius: 14px;
  border: 1px solid gray;
  font-size: 18px;
  padding: 20px 20px ;
}

.input-register: focus{
  outline: none;
}
.button-register  {
  height: 30px;
  border-radius: 14px;
  border: none;
  font-size: 18px;
  padding-left: 20px;
  background-color: #ffc05c;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #3c096c;
  
  &:hover{
    background-color: #3c096c;
    color: #e0cdcd;
  }

}



.button-login {
  height: 30px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  padding-left: 20px;
  background-color: #ffc05c;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #3c096c;
  
  &:hover{
    background-color: #3c096c;
    color: #e0cdcd;
  }
}
`


