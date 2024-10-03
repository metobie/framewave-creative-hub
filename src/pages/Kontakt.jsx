import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Kontakt = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-framewave-darkblue mb-8">Kontakta Oss</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-framewave-blue mb-4">Kontaktinformation</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="text-framewave-mediumblue mr-2" />
              <p>+46 73-502 46 07</p>
            </div>
            <div className="flex items-center">
              <Mail className="text-framewave-mediumblue mr-2" />
              <p>info@framewave.se</p>
            </div>
            <div className="flex items-center">
              <MapPin className="text-framewave-mediumblue mr-2" />
              <p>Kristianstad, Sverige</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-framewave-blue mb-4">Skicka ett meddelande</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-framewave-darkblue mb-1">Namn</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-framewave-lightblue rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block text-framewave-darkblue mb-1">E-post</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-framewave-lightblue rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block text-framewave-darkblue mb-1">Meddelande</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border border-framewave-lightblue rounded"></textarea>
            </div>
            <button type="submit" className="bg-framewave-blue hover:bg-framewave-darkblue text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              Skicka
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;