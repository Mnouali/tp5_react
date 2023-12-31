import './App.css';
import Slider from './slider/Slider';
import Calcul from './calcu/Calcul';
import Form from './todList/form';
import Pagination from './Api/PaginationApi';
import Navbar from './Navbar.js/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Calcul/>}></Route>
          <Route path='/tp2' element={<Slider/>}></Route>
          <Route path='/tp3'  element={<Form/>}></Route>
          <Route path='/tp4' element={<Pagination/>}></Route>
          <Route path='*'  element={<h1>Not Found 404</h1>}></Route>

        </Routes>
    </BrowserRouter>
  
  );
}

export default App;
