import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Welcome to Templation</h1>
      <img src="/images/bhudda.svg" alt="Bhudda" />
      <div className="button-container">
        <button className="create" onClick={() => alert('Feature in progress')}>
          <img src="/images/createbutton.svg" alt='Cbutton'/>
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