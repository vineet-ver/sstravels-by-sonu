import React from 'react';
import BookingForm from './BookingForm';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 to-blue-800 pt-16"
    >
      <div 
        className="absolute inset-0 bg-black opacity-50 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2224/road-people-street-smartphone.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Reliable Taxi Service <span className="text-yellow-500">Anytime, Anywhere</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Professional drivers, comfortable rides, and competitive prices. Book your ride now and experience the difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition-colors"
              >
                Our Services
              </a>
              <a 
                href="tel:+918882586447" 
                className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="lg:ml-auto w-full max-w-md">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
