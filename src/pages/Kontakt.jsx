import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'video'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a server
  };

  return (
    <div className="relative min-h-screen">
      <img
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Contact background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-grayscale-900 bg-opacity-75"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-grayscale-100 mb-8">Kontakta Oss</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-grayscale-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-grayscale-800 mb-4">Kontaktinformation</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="text-grayscale-700 mr-2" />
                <p className="text-grayscale-800">+46 73-502 46 07</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-grayscale-700 mr-2" />
                <p className="text-grayscale-800">info@framewave.se</p>
              </div>
              <div className="flex items-center">
                <MapPin className="text-grayscale-700 mr-2" />
                <p className="text-grayscale-800">Kristianstad, Sverige</p>
              </div>
            </div>
          </div>
          <div className="bg-grayscale-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-grayscale-800 mb-4">Skicka ett meddelande</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-grayscale-700 mb-1">Namn</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-grayscale-300 rounded" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-grayscale-700 mb-1">E-post</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-grayscale-300 rounded" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-grayscale-700 mb-1">Telefon</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-grayscale-300 rounded" />
              </div>
              <div>
                <label htmlFor="service" className="block text-grayscale-700 mb-1">Tjänst</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border border-grayscale-300 rounded">
                  <option value="video">Videoproduktion</option>
                  <option value="photo">Fotografi</option>
                  <option value="other">Annat</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-grayscale-700 mb-1">Meddelande</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full p-2 border border-grayscale-300 rounded" required></textarea>
              </div>
              <button type="submit" className="bg-grayscale-800 hover:bg-grayscale-900 text-grayscale-100 font-bold py-2 px-4 rounded transition-colors duration-300">
                Skicka
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;