import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Site from './components/stateLess/site/Site';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Site/>
      </div>
    </BrowserRouter>

  );
}

export default App;
