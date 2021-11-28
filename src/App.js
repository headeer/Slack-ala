import React from 'react';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
     <Router>
         <>
             <Header/>
             <AppMain>
                 <Sidebar />
                 <Routes>
                     <Route path='/' exact>
                     </Route>
                 </Routes>
             </AppMain>

         </>
     </Router>
    </div>
  );
}

export default App;

const AppMain = styled.div`
  display: flex;
  height: 100vh;
`;
