import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NewBookingPage from '../NewBookingPage/NewBookingPage';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser ] = useState(null)
  
  return (
    <main className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </>
          : 
          <AuthPage setUser={setUser}/>
      }

    </main>
  );
}

