import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Templation</h1>
      <img src="/images/bhudda.svg" alt="Bhudda" />
      <div className="button-container">
      <Button
          text=""
          onClick={() => alert('Feature in progress')}
          position={{ top: '100px', right: '400px' }}
          svgIcon="./images/createbutton.svg"
        />
        <Button
          text="View Animations"
          onClick={() => alert('Feature in progress')}
          position={{ top: '200px', left: '400px' }} // Adjust position as needed
        />
        <Button
          text="Monastery"
          onClick={() => alert('Feature in progress')}
          position={{ top: '700px', right: '930px' }} // Adjust position as needed
        />
      </div>
    </div>
  );
}

export default App;
