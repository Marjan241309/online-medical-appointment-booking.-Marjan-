import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Doctors from './components/Doctors';
import BookAppointment from './components/BookAppointment';
import Footer from './components/Footer';

interface Appointment {
  id: string;
  patientName: string;
  contact: string;
  doctor: string;
  timeSlot: string;
  date: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'doctors':
        return <Doctors />;
      case 'book':
        return (
          <BookAppointment 
            appointments={appointments} 
            setAppointments={setAppointments} 
          />
        );
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;