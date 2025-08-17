import React from 'react';
import { Calendar, Clock, Shield, Users } from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-blue-600" />,
      title: "Easy Booking",
      description: "Book your appointment online in just a few clicks"
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Save Time",
      description: "No more waiting in long lines - book from home"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Safe & Secure",
      description: "Your information is protected with us"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Doctors",
      description: "Experienced specialists ready to help you"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Book Your Medical Appointment Online
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Skip the waiting lines and book your appointment with our experienced doctors from the comfort of your home.
          </p>
          <button
            onClick={() => setCurrentPage('book')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Book Appointment Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Online Booking?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced doctors are here to provide you with the best medical care. Book your appointment today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('doctors')}
              className="bg-slate-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-600 transition-colors"
            >
              Meet Our Doctors
            </button>
            <button
              onClick={() => setCurrentPage('book')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;