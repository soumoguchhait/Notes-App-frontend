
import './App.css';

import Navigation from './routes';

import Sidebar from './sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Navigation/>
  
    </div>
  );
}

export default App;
