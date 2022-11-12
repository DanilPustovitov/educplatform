import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/header/header';
import HowIsWork from './components/main/howIsWork/HowIsWork';
import Specialties from './components/specialtiesBlock/Specialties';

import "./fonts/e-Ukraine-Bold.otf";
import "./fonts/e-Ukraine-Light.otf";
import "./fonts/e-Ukraine-Medium.otf";
import "./fonts/e-Ukraine-Regular.otf";
import "./fonts/e-Ukraine-Thin.otf";
import "./fonts/e-Ukraine-UltraLight.otf";

import "./fonts/e-UkraineHead-Bold.otf";
import "./fonts/e-UkraineHead-Light.otf";
import "./fonts/e-UkraineHead-Medium.otf";
import "./fonts/e-UkraineHead-Regular.otf";
import "./fonts/e-UkraineHead-Thin.otf";
import "./fonts/e-UkraineHead-UltraLight.otf";
import "./fonts/e-UkraineHead-LOGO.otf";

import "./fonts/Inter-Black.ttf";
import "./fonts/Inter-Bold.ttf";
import "./fonts/Inter-ExtraBold.ttf";
import "./fonts/Inter-ExtraLight.ttf";
import "./fonts/Inter-Light.ttf";
import "./fonts/Inter-Medium.ttf";
import "./fonts/Inter-Regular.ttf";
import "./fonts/Inter-SemiBold.ttf";
import "./fonts/Inter-Thin.ttf";


function App() {
  return (
    <Container fluid className='mt-4'>
      <Header/>
      <HowIsWork />
      <Specialties/>
    </Container>
    <div className="App">
      <Header />  
      {/*<Trial />*/}
      <Introduction />
      <Specialties />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <code>src/App.js</code> and save to reload.
        </p>
        <Header>

        </Header>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
