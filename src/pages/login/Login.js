
import React from 'react';
import styled from "styled-components";
// import { AuthContext } from '../context/AuthContext';
// import { loginCall } from '../serverCalls';
import { CircularProgress } from '@material-ui/core';
import Footer from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';

const Login = () => {
  return (
    <>
    <Header/>
    <Container className='login-container'>
      <LoginWrapper className="login-wrapper">
        <div className='login-left'>
        <img className='register-logo' src="./banner3.png" alt=""></img>
          <span className='login-desc'>connect with other friends and groups</span>
        </div>

        <div className='login-right'>
          <form className='login-box'>
            <input className='input-login' type="email" required placeholder='email'></input>
            <input className='input-login' type="password" placeholder='password' required  minLength="6" ></input>
            <button className='button-login' 
            type="submit" 
             >
               {/* <CircularProgress style = {{color:"white", size:"5px"}}/>  */}
            </button>
            <span className='login-forgot'>Forgot password?</span>
            <button className='button-register'>
            {/* <CircularProgress style = {{color:"white", size:"15px"}}/> */}
            </button>
            
          </form>

        </div>
      </LoginWrapper>
      


    </Container>
    <Footer/>
    </>
  )
}

export default Login

const Container = styled.div`
// width: 100vw;
// height: 100vh;
// // background-color: #f0f2f5;
// display: flex;
// align-items: center;
// justify-content: center;
// color: #3c096c;

min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
padding: 0 calc(3.5vw + 5px);
color: #3c096c;
display: flex;
align-items: center;
justify-content: center;
`

const LoginWrapper = styled.div`
width: 70%;
height:70%;
display: flex;
align-items: center;
// background-color: yellow;
.login-left, .login-right {
  flex: 1;
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.login-logo {

  position: relative;
  height: 100%;
  width: 100%;
  margin: 70px 40px 20px;
  display: flex;
  align-item: center;
}

.login-desc{
  font-size: 24px;
  margin: 20px 40px;
}

.login-box {
  height: 300px;
  width: 100%;
  padding: 20px;
  background: white;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  

}

.input-login {
  height: 30px;
  border-radius: 14px;
  border: 1px solid gray;
  font-size: 18px;
  padding-left: 20px;
}

.input-login: focus{
  outline: none;
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
  font-wight: 500;
  cursor: pointer;
  color: #3c096c;
  
  &:hover{
    background-color: #3c096c;
    color: #e0cdcd;
  }


}

.button-login:disabled{
  cursor: not-allowed
}

.login-forgot{
  text-align: center;
  color: #3c096c;
}

.button-register{
  height: 30px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  padding-left: 20px;
  background-color: #ffc05c;
  color: white;
  font-size: 20px;
  font-wight: 500;
  cursor: pointer;
  color: #3c096c;
  
  &:hover{
    background-color: #3c096c;
    color: #e0cdcd;
  }
}
`