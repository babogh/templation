import './App.css';
import bhudda from './bhudda.svg'
import cbutton from './create button.svg'


function App() {
  return (
    <div className="App">
      <h1>Welcome to Templation</h1>
      <img src={bhudda} alt="Bhudda" />
      <div className="button-container">
        <button className="create" onClick={() => alert('Feature in progress')}>
          <img src={cbutton} alt='Cbutton'/>
        </button>
        <button className="view" onClick={() => alert('Feature in progress')}>
          View Animations
        </button>
        <button className="monastery" onClick={() => alert('Feature in progress')}>
          Monastery
        </button>
      </div>
    </div>
  );
}

export default App;