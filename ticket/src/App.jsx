
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import MovieDetails from './MovieDetails';
import Theater from './Theater';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Router>
      <ToastContainer  
				position="top-right"
				 autoClose={1500}
				 hideProgressBar={false}
				 newestOnTop={false}
				 closeOnClick
				 rtl={false}
				 pauseOnFocusLoss
				 draggable
				 pauseOnHover />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/movies" element={<MovieDetails />} />
        <Route path='/bookticket' element={<Theater />} />
        
      </Routes>
    </Router>
  );
}

export default App;
