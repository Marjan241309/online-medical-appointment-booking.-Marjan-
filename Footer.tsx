import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HealthCare Clinic</h3>
            <p className="text-slate-300 mb-4">
              Providing quality healthcare services with compassion and excellence. 
              Book your appointment online and skip the waiting lines.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-3" />
                <span>+93 (0) 20 123 4567</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@healthcareclinic.af</span>
              </div>
              <div className="flex items-start text-slate-300">
                <MapPin className="h-4 w-4 mr-3 mt-1" />
                <span>Karte 4, Kabul, Afghanistan</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-3" />
                <div>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 HealthCare Clinic. All rights reserved.</p>
          <p className="mt-2 text-sm">Karte 4, Kabul, Afghanistan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;