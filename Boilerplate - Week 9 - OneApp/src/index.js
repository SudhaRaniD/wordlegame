import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TempCM from './classMaterial/TempCM';
import Week9_03_PrimeForms from './classMaterial/Week9_03_PrimeForms';
import Project31_Form from './classProjects/Project31_Form';

import HomeWork1 from './homeWork/HomeWork1';
import HomeWork2 from './homeWork/HomeWork2';
import HomeWork3 from './homeWork/HomeWork3';



ReactDOM.render(
  // prettier-ignore
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path = "/classMaterial/week9_01" element = {<TempCM/>}/>
      <Route path = "/classMaterial/week9_03" element = {<Week9_03_PrimeForms/>}/>
      <Route path = "/classProject/Project31" element = {<Project31_Form/>}/>
      <Route path = "/homeWork/homework1" element = {<HomeWork1/>}/>
      <Route path = "/homeWork/homework2" element = {<HomeWork2/>}/>
      <Route path = "/homeWork/homework3" element = {<HomeWork3/>}/>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
