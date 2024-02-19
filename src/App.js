import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import RgistrationPage from './RegistrationPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> welcomw to homepage</p>
        <HomePage/>
        <RegistrationPage/>
      </header>
    </div>
  );
}

export default App;
