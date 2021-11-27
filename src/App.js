import React from 'react';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
         <>
             <Routes>
                 <Route path='/' exact element={<Header />}>
                 </Route>
             </Routes>
         </>
     </Router>
    </div>
  );
}

export default App;
