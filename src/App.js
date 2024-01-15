
import './App.css';

import { Outlet } from 'react-router-dom';
import Body from './pages/Body';


function App() {

  
  return (
    <div className="App">
      <Outlet/>
      
    </div>
  );
}

export default App;
