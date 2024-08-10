import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import SearchToDo from './components/SearchToDo';
import ViewToDo from './components/ViewToDo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddToDo/>}/>
        <Route path="/search" element={<SearchToDo/>}/>
        <Route path="/view" element={<ViewToDo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
