import React from 'react';
import { MapPin, Check } from 'lucide-react';

const AreaCoverage = () => {
  const areas = [
    "Gurugram",
    "Delhi",
    "Noida",
    "Faridabad",
    "Ghaziabad",
    "Greater Noida",
    "Manesar",
    "Sohna"
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Cover</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our taxi service is available throughout the Delhi NCR region, providing reliable transportation no matter where you are.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-yellow-500 p-6 text-white">
              <div className="flex items-center">
                <MapPin size={24} className="mr-3" />
                <h3 className="text-2xl font-bold">Service Areas</h3>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={20} className="text-yellow-500 mr-2" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-md text-blue-800">
                <p className="text-sm">
                  <strong>Note:</strong> Additional charges may apply for certain areas or long-distance travel. Please inquire for specific rates.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Delhi NCR Coverage</h3>
            <p className="text-gray-600 mb-6">
              ZoomCabz operates throughout the entire Delhi NCR region, ensuring you can get a reliable ride wherever you are. Our extensive network of drivers means minimal wait times and quick pickups.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're in the heart of Delhi, at the airport, or in the suburbs, we've got you covered with our professional taxi service.
            </p>
            
            <div className="bg-yellow-500 p-6 rounded-lg text-white">
              <h4 className="text-xl font-bold mb-3">Popular Destinations</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  Indira Gandhi International Airport
                </li>
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  New Delhi Railway Station
                </li>
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  Cyber City, Gurugram
                </li>
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  Noida Sector 18
                </li>
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  Huda City Centre
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;