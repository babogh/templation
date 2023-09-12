import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="bhudda-container">
        <img src="/images/bhudda.svg" alt="Bhudda" />
        <h1>Welcome to Templation</h1>
      </div>
      <div className="button-container">
      <Button
          text="Create Animation"
          onClick={() => alert('Feature in progress')}
          position={{ top: '100px', right: '400px' }}
        />
        <Button
          text="View Animations"
          onClick={() => alert('Feature in progress')}
          position={{ top: '100px', left: '400px' }} // Adjust position as needed
        />
        <Button
          text="Monastery"
          onClick={() => alert('Feature in progress')}
          position={{ top: '100px', right: '930px' }} // Adjust position as needed
        />
      </div>
    </div>
  );
}

export default App;
