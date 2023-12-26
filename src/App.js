// import './App.css';
import BookForm from './component/BookForm';
import Catalog from './component/Catalog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/bookForm' exact element={<BookForm />}></Route>
          <Route path='/' exact element={<Catalog />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
