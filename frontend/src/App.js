import './App.css';
<<<<<<< HEAD
import { Container } from 'react-bootstrap';
import HowIsWork from './components/main/howIsWork/HowIsWork';

function App() {
  return (
    <Container fluid>
      <HowIsWork/>
    </Container>
=======
import Header from './components/header/Header';
import Trial from './components/trial/Trial';
import Introduction from './components/introductionBlock/Introduction';
import Specialties from './components/specialtiesBlock/Specialties';

function App() {
  return (
    <div className="App">
      <Header />  
      <Trial />
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
>>>>>>> 4ab92f3ecc92e79c9d12e497c38822f526c4d17d
  );
}

export default App;
