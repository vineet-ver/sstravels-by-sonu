import React from 'react';
import { Car, AlarmClock, Briefcase, Plane, Users, ShieldCheck } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: <Car className="text-yellow-500" size={48} />,
      title: "City Transfers",
      description: "Comfortable rides within the city with professional drivers and well-maintained vehicles."
    },
    {
      icon: <AlarmClock className="text-yellow-500" size={48} />,
      title: "24/7 Availability",
      description: "Our services are available round the clock. Book anytime for immediate or scheduled pickups."
    },
    {
      icon: <Briefcase className="text-yellow-500" size={48} />,
      title: "Corporate Services",
      description: "Special corporate accounts with priority service and monthly billing options."
    },
    {
      icon: <Plane className="text-yellow-500" size={48} />,
      title: "Airport Transfers",
      description: "Reliable airport pickups and drop-offs with flight tracking and waiting time included."
    },
    {
      icon: <Users className="text-yellow-500" size={48} />,
      title: "Group Travel",
      description: "Spacious vehicles for group travel, ideal for events, tours, and family outings."
    },
    {
      icon: <ShieldCheck className="text-yellow-500" size={48} />,
      title: "Safe & Secure",
      description: "Background-checked drivers, GPS-tracked vehicles, and 24/7 customer support."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a variety of services to meet all your transportation needs with comfort, reliability, and professionalism.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;