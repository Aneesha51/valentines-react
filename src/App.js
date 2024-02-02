import './App.css';
import Agree from './Components/Agree/agree';
import Intro from './Components/Intro/intro';
import No from './Components/No/no';
import {BrowserRouter, Routes, Route} from'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<Intro/>}/>
        <Route  path='/intro' element={<Intro/>}/>
        <Route  path='/agree' element={<Agree/>}/>
        <Route  path='/no' element={<No/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
