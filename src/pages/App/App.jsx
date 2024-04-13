import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NewBookingPage from '../NewBookingPage/NewBookingPage';
import NavBar from '../../components/NavBar/NavBar'
import LogInForm from '../../components/LogInForm/LogInForm';

export default function App() {
  const [user, setUser ] = useState(null)
  
  return (
    <main className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/bookings" element/>
          <Route path="/activity/:id"/>
        </Routes>
      </>
          : 
          <AuthPage setUser={setUser}/>
      }

    </main>
  );
}

