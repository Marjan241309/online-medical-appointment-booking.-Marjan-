import React from 'react';
import { Award, Phone, Mail } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Yasir Ahmadi",
    specialty: "Cardiologist",
    image: "https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400",
    experience: "15+ years",
    description: "Specialized in heart disease treatment and cardiac surgery with extensive experience in interventional cardiology."
  },
  {
    name: "Dr. Mariam Hakimi",
    specialty: "Pediatrician",
    image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
    experience: "12+ years",
    description: "Expert in child healthcare, vaccinations, and developmental disorders. Passionate about children's wellness."
  },
  {
    name: "Dr. Farzana Rahimi",
    specialty: "Dermatologist",
    image: "https://images.pexels.com/photos/5452267/pexels-photo-5452267.jpeg?auto=compress&cs=tinysrgb&w=400",
    experience: "10+ years",
    description: "Specialized in skin conditions, cosmetic dermatology, and dermatological surgery."
  },
  {
    name: "Dr. Mohammad Sadat",
    specialty: "General Practitioner",
    image: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400",
    experience: "18+ years",
    description: "Expert in general medicine, preventive care, and comprehensive health management for patients of all ages."
  }
];

const Doctors: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our Expert Doctors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced medical professionals is dedicated to providing you with the highest quality healthcare services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {doctor.experience}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                <div className="flex items-center mb-3">
                  <Award className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">{doctor.specialty}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{doctor.description}</p>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      <span>Available</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Choose from our experienced team of medical professionals and book your appointment online today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctors;