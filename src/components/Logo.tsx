import React from 'react';
import { CarTaxiFront as Taxi } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <Taxi size={32} className="text-accent mr-2" />
      <div className="font-bold text-2xl">
        <span className="text-primary">SS</span>
        <span className="text-accent">Travels</span>
      </div>
    </div>
  );
};

export default Logo;