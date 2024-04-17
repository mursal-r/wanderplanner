import { useState } from 'react';
import Footer from '../../components/Footer/Footer'; // Adjust the import path
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NewBookingPage from '../NewBookingPage/NewBookingPage';
import NavBar from '../../components/NavBar/NavBar'
// eslint-disable-next-line
import LogInForm from '../../components/LogInForm/LogInForm';
import SearchResults from '../SearchResults/SearchResults';
import BookingForm from '../../components/BookingForm/BookingForm';



export default function App() {
  const [user, setUser ] = useState(null)
  
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/search-results" element={<SearchResults/>}/>
        <Route path='/activity/:id' element={<NewBookingPage/>}></Route>
        <Route path='/authpage' element={<AuthPage setUser={setUser}/>}></Route>
        <Route path='/booking' element={<BookingForm user={user}/>}/>
      </Routes>
    </main>
  );
}
