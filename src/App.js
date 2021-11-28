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
