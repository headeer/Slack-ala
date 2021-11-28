import React from 'react';
import styled from 'styled-components';
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(err => alert(err.message));
    };
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn2.downdetector.com/static/uploads/logo/Slack_RGB.png" alt="slack"/>
                <h1>Sign in to the Slack</h1>
                <Button onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.14), 0 1px 2px rgba(0, 0, 0, 0.34);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0e3d41 !important;
    color: white;
  }
`
