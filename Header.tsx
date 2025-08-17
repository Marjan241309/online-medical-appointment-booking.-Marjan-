import React from 'react';
import { Stethoscope, Calendar, Users } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8" />
            <h1 className="text-2xl font-bold">HealthCare Clinic</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'home' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              <span>Home</span>
            </button>
            <button
              onClick={() => setCurrentPage('doctors')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'doctors' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Doctors</span>
            </button>
            <button
              onClick={() => setCurrentPage('book')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'book' ? 'bg-blue-700' : 'hover:bg-blue-500'
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>
          </nav>
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <nav className="md:hidden mt-4 flex flex-col space-y-2">
          <button
            onClick={() => setCurrentPage('home')}
            className={`text-left px-3 py-2 rounded-lg transition-colors ${
              currentPage === 'home' ? 'bg-blue-700' : 'hover:bg-blue-500'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('doctors')}
            className={`text-left px-3 py-2 rounded-lg transition-colors ${
              currentPage === 'doctors' ? 'bg-blue-700' : 'hover:bg-blue-500'
            }`}
          >
            Doctors
          </button>
          <button
            onClick={() => setCurrentPage('book')}
            className={`text-left px-3 py-2 rounded-lg transition-colors ${
              currentPage === 'book' ? 'bg-blue-700' : 'hover:bg-blue-500'
            }`}
          >
            Book Appointment
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;