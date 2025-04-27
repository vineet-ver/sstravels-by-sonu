import React from 'react';
import { Users, Briefcase, Fuel, Settings } from 'lucide-react';

interface Vehicle {
  name: string;
  description: string;
  image: string;
  detailImage: string;
  interiorImage: string;
  passengers: string;
  luggage: number;
  pricePerKm: number;
  fuelType: string;
  transmission: string;
  features: string[];
}

interface VehicleCardProps {
  vehicle: Vehicle;
  onBookNow: () => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onBookNow }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{vehicle.name}</h3>
      <p className="text-gray-600 mb-6">{vehicle.description}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <Users size={20} className="text-yellow-500 mr-2" />
          <span className="text-gray-700">
            <span className="font-semibold">{vehicle.passengers}</span> Passengers
          </span>
        </div>
        
        <div className="flex items-center">
          <Briefcase size={20} className="text-yellow-500 mr-2" />
          <span className="text-gray-700">
            <span className="font-semibold">{vehicle.luggage}</span> Luggage
          </span>
        </div>

        <div className="flex items-center">
          <Fuel size={20} className="text-yellow-500 mr-2" />
          <span className="text-gray-700">
            <span className="font-semibold">{vehicle.fuelType}</span>
          </span>
        </div>

        <div className="flex items-center">
          <Settings size={20} className="text-yellow-500 mr-2" />
          <span className="text-gray-700">
            <span className="font-semibold">{vehicle.transmission}</span>
          </span>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-4">
        <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {vehicle.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={onBookNow}
          className="w-full mt-6 bg-yellow-500 text-gray-900 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;