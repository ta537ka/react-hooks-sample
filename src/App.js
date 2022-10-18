import logo from './logo.svg';
import './App.css';
import Basic1 from './components/Basic1';
import Basic2 from './components/Basic2';
import BasicUseEffect from './components/BasicUseEffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic1 name="Hooks" /> */}
        {/* <Basic1 name="REdux" /> */}
        {/* <Basic2 /> */}
        <BasicUseEffect />
      </header>
    </div>
  );
}

export default App;
