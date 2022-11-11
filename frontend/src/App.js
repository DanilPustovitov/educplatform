import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/header/header';
import HowIsWork from './components/main/howIsWork/HowIsWork';
import Specialties from './components/specialtiesBlock/Specialties';

function App() {
  return (
    <Container fluid className='mt-4'>
      <Header/>
      <HowIsWork />
      <Specialties/>
    </Container>
  );
}

export default App;
