import React, { useState } from 'react';
import { Car, Users, Briefcase, DollarSign, Fuel, Settings } from 'lucide-react';
import VehicleCard from './VehicleCard';

const Fleet = () => {
  const [activeVehicle, setActiveVehicle] = useState(0);

  const vehicles = [
    {
      name: "Wagon R",
      description: "Comfortable and economical hatchback perfect for city travel.",
      image: "https://images.pexels.com/photos/1740919/pexels-photo-1740919.jpeg?cs=srgb&amp;dl=pexels-sleepididthis-1740919.jpg&amp;fm=jpg",
      detailImage: "https://stimg.cardekho.com/images/carinteriorimages/930x620/Maruti/Wagon-R/10365/1687580555104/airbags-94.jpg",
      interiorImage: "https://stimg.cardekho.com/images/carinteriorimages/930x620/Maruti/Wagon-R/10365/1687580555104/seats-(aerial-view)-53.jpg",
      passengers: "4 + 1",
      luggage: 2,
      pricePerKm: 12,
      fuelType: "Petrol",
      transmission: "Manual",
      features: ["AC", "Power Windows", "Music System", "Central Locking"]
    },
    {
      name: "Swift Dzire (Sedan)",
      description: "Premium sedan offering excellent comfort and space.",
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Dzire/11387/1731318279714/top-view-117.jpg",
      detailImage: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Dzire/11387/1731318279714/grille-97.jpg",
      interiorImage: "https://stimg.cardekho.com/images/carinteriorimages/930x620/Maruti/Dzire/11387/1731318320140/dashboard-59.jpg",
      passengers: "4 + 1",
      luggage: 3,
      pricePerKm: 14,
      fuelType: "Petrol",
      transmission: "Manual",
      features: ["AC", "Power Steering", "Music System", "Airbags"]
    },
    {
      name: "Swift (Hatchback)",
      description: "Sporty hatchback ideal for urban commuting.",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1739945896166/front-left-side-47.jpg?tr=w-664",
      detailImage: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/11709/1715245478487/grille-97.jpg",
      interiorImage: "https://stimg.cardekho.com/images/carinteriorimages/930x620/Maruti/Swift/9226/1715582061071/dashboard-59.jpg",
      passengers: "4 + 1",
      luggage: 2,
      pricePerKm: 11,
      fuelType: "Petrol",
      transmission: "Manual",
      features: ["AC", "Power Windows", "Music System", "ABS"]
    },
    {
      name: "Etios",
      description: "Reliable sedan with ample space and comfort.",
      image: "https://images10.gaadi.com/usedcar_image/4479591/original/processed_2ebcfb88025afdc096b5284ef14e5eb4.jpg?imwidth=640",
      detailImage: "https://images.pexels.com/photos/18493081/pexels-photo-18493081.jpeg",
      interiorImage: "https://images.pexels.com/photos/18493082/pexels-photo-18493082.jpeg",
      passengers: "4 + 1",
      luggage: 3,
      pricePerKm: 12,
      fuelType: "Petrol",
      transmission: "Manual",
      features: ["AC", "Power Steering", "Music System", "Central Locking"]
    },
    {
      name: "Ertiga",
      description: "Spacious MPV perfect for family trips and group travel.",
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga-Tour/9617/1741068787046/front-left-side-47.jpg",
      detailImage: "https://images.pexels.com/photos/18493084/pexels-photo-18493084.jpeg",
      interiorImage: "https://images.pexels.com/photos/18493085/pexels-photo-18493085.jpeg",
      passengers: "7 + 1",
      luggage: 4,
      pricePerKm: 17,
      fuelType: "Petrol",
      transmission: "Manual",
      features: ["AC", "Power Windows", "Music System", "ABS"]
    },
    {
      name: "Innova",
      description: "Premium MPV offering superior comfort and space.",
      image: "//upload.wikimedia.org/wikipedia/commons/thumb/6/68/2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg/330px-2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg",
      detailImage: "https://images.pexels.com/photos/18493087/pexels-photo-18493087.jpeg",
      interiorImage: "https://images.pexels.com/photos/18493088/pexels-photo-18493088.jpeg",
      passengers: "6 + 1",
      luggage: 4,
      pricePerKm: 17,
      fuelType: "Petrol",
      transmission: "Manual",
      features: ["AC", "Power Steering", "Music System", "Airbags"]
    },
    {
      name: "Innova Crysta",
      description: "Luxury MPV with enhanced features and comfort.",
      image: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-design1600x1000.jpg",
      detailImage: "https://images.pexels.com/photos/18493090/pexels-photo-18493090.jpeg",
      interiorImage: "https://images.pexels.com/photos/18493091/pexels-photo-18493091.jpeg",
      passengers: "7 + 1",
      luggage: 5,
      pricePerKm: 19,
      fuelType: "Petrol",
      transmission: "Manual",
      features: ["AC", "Power Windows", "Music System", "ABS"]
    },
    {
      name: "Scorpio N",
      description: "Powerful SUV perfect for both city and highway travel.",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-76.jpeg?isig=0&amp;q=80",
      detailImage: "https://images.pexels.com/photos/18493093/pexels-photo-18493093.jpeg",
      interiorImage: "https://images.pexels.com/photos/18493094/pexels-photo-18493094.jpeg",
      passengers: "6 + 1",
      luggage: 4,
      pricePerKm: 22,
      fuelType: "Petrol",
      transmission: "Manual",
      features: ["AC", "Power Steering", "Music System", "Airbags"]
    },
    {
      name: "Tempo Traveller",
      description: "Spacious vehicle ideal for large groups and tours.",
      image: "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      detailImage: "https://images.pexels.com/photos/18493096/pexels-photo-18493096.jpeg",
      interiorImage: "https://images.pexels.com/photos/18493097/pexels-photo-18493097.jpeg",
      passengers: "16 + 1",
      luggage: 8,
      pricePerKm: 28,
      fuelType: "Petrol",
      transmission: "Manual",
      features: ["AC", "Power Windows", "Music System", "ABS"]
    }
  ];

  const handleBookNow = () => {
    const whatsappNumber = "+918882586447";
    const message = `Hello, I would like to book a ${vehicles[activeVehicle].name}.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vehicle Fleet</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of well-maintained vehicles to suit your specific needs and travel in style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gray-100 p-4 rounded-lg mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {vehicles.slice(0, 4).map((vehicle, index) => (
                  <button
                    key={index}
                    className={`py-3 px-4 rounded-md text-center transition-colors ${
                      activeVehicle === index 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-white text-gray-800 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveVehicle(index)}
                  >
                    {vehicle.name}
                  </button>
                ))}
              </div>
            </div>
            
            <VehicleCard vehicle={vehicles[activeVehicle]} onBookNow={handleBookNow} />
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <img 
                src={vehicles[activeVehicle].image} 
                alt={`${vehicles[activeVehicle].name} Exterior`}
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">₹{vehicles[activeVehicle].pricePerKm}</div>
                <div className="text-sm">per km</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={vehicles[activeVehicle].detailImage} 
                alt={`${vehicles[activeVehicle].name} Detail`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src={vehicles[activeVehicle].interiorImage} 
                alt={`${vehicles[activeVehicle].name} Interior`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.slice(4).map((vehicle, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{vehicle.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price per KM:</span>
                    <span className="font-semibold">₹{vehicle.pricePerKm}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Passengers:</span>
                    <span className="font-semibold">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Fuel Type:</span>
                    <span className="font-semibold">{vehicle.fuelType}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Transmission:</span>
                    <span className="font-semibold">{vehicle.transmission}</span>
                  </div>
                </div>
                <button
                  onClick={handleBookNow}
                  className="w-full mt-6 bg-yellow-500 text-gray-900 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;