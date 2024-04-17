import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NewBookingPage from '../NewBookingPage/NewBookingPage';
import NavBar from '../../components/NavBar/NavBar'
import SearchResults from '../SearchResults/SearchResults';
import MyBookings from '../MyBookings/MyBookings';

export default function App() {
  const [user, setUser ] = useState(null)
  
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/search-results" element={<SearchResults/>}/>
        <Route path='/activity/:id' element={<NewBookingPage user={user}/>}></Route>
        <Route path='/authpage' element={<AuthPage setUser={setUser}/>}></Route>
        <Route path='/bookings' element={<MyBookings user={user}/>}/>
      </Routes>
    </main>
  );
}
