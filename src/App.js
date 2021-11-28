import React from 'react';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Login from "./components/Login";

function App() {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return (
            <AppLoading>
                <AppLoadingContents>
                    <img src="https://cdn2.downdetector.com/static/uploads/logo/Slack_RGB.png" alt="slack"/>
                    <img src="https://dreamdesignagency.com/wp-content/uploads/2021/11/1474-2.gif" alt=""/>
                </AppLoadingContents>
            </AppLoading>
        );
    }
    return (
        <div className="App">
            <Router>
                {!user ? (
                    <Login/>
                ) : (
                    <>
                        <Header/>
                        <AppMain>
                            <Sidebar/>
                            <Routes>
                                <Route path='/' exact element={<Chat/>}>
                                </Route>
                            </Routes>
                        </AppMain>
                    </>
                )}
            </Router>
        </div>
    );
}

export default App;

const AppMain = styled.div`
  display: flex;
  height: 100vh;
`;
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`
