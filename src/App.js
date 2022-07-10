import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppBar, GeneralFooter } from './components/common';
import HomePage from './components/home/HomePage';


function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <div className="root-element">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <GeneralFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
