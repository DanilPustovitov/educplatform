import './App.css';
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
  );
}

export default App;
