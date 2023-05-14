import { Route, Routes } from 'react-router-dom';
import './App.css';
import Foods from './components/Foods';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Foods/>}/>
        <Route path='/categories/:foodId' element={<Categories/>}/>
      </Routes>
    </>
  )
}

export default App;
