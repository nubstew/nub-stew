import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from 'components';
import ScrollToTop from './ScrollToTop'
import logo from 'assets/img/logo.svg';
import './App.css';
import MyPage from './pages/MyPage';
import Board from './pages/Board';

function App() {
  return (
    <div className="App">
      <Header/>
      <ScrollToTop/>

      <Routes>
        <Route path="/" element={ 
          <div className="App-header">
            <img src={logo} className="App-logo" id="App-Status" alt="logo" />
            <p>ㅎㅇ</p>
          </div>
         } />
        <Route path="/board" element={ <Board /> } />
        <Route path="/MyPage" element={ <MyPage /> } />
        <Route path="*" element={ <div>없는페이지인데요?</div> } />
      </Routes>
      
    </div>
  );
}

export default App;

