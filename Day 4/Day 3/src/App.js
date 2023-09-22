import './App.css';
import './login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './login.js';      
import Signup from './signup';



function App() {
  return (
     <>
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Login />}></Route>
    <Route path="/signup" element ={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
    </div> 
    </>
  );
}
export default App;