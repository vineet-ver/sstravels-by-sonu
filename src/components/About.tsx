import React from 'react';
import { Award, ThumbsUp, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/20218529/pexels-photo-20218529/free-photo-of-a-car-parked-on-a-driveway.jpeg" 
                alt="About SSTravels"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-800 text-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm uppercase tracking-wider">Years of Service</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About SSTravels</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, SSTravels has grown to become Delhi NCR's premier taxi service, committed to providing safe, reliable, and comfortable transportation for all our customers.
            </p>
            <p className="text-gray-600 mb-8">
              Our mission is simple: to get you where you need to go safely, comfortably, and on time. With our fleet of well-maintained vehicles and professional drivers, we ensure that every journey with us is a pleasant experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="mb-4 inline-block p-3 bg-yellow-100 rounded-full">
                  <Award size={32} className="text-yellow-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Quality Service</h3>
                <p className="text-gray-600">Consistently exceeding expectations</p>
              </div>
              
              <div className="text-center p-4">
                <div className="mb-4 inline-block p-3 bg-yellow-100 rounded-full">
                  <ThumbsUp size={32} className="text-yellow-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Reliability</h3>
                <p className="text-gray-600">Punctual service you can count on</p>
              </div>
              
              <div className="text-center p-4">
                <div className="mb-4 inline-block p-3 bg-yellow-100 rounded-full">
                  <Users size={32} className="text-yellow-500" />
                </div>
                <h3 className="font-bold text-xl mb-2">Expert Team</h3>
                <p className="text-gray-600">Professional and courteous drivers</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;