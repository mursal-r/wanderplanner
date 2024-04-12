import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewBookingPage from '../NewBookingPage/NewBookingPage';

export default function App() {
  const [user, setUser ] = useState(null)
  
  return (
    <main className="App">
      { user ?
          <NewBookingPage />
          : 
          <AuthPage />
      }

    </main>
  );
}

