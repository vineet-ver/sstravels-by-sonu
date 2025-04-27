import React from 'react';
import { Shield, Clock, CreditCard, MapPin, Car, Users, Fuel, Settings } from 'lucide-react';

const TaxiService = () => {
  const vehicles = [
    {
      name: "Wagon R",
      pricePerKm: 12,
      passengers: "4 + 1",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "https://images.pexels.com/photos/1740919/pexels-photo-1740919.jpeg?cs=srgb&amp;dl=pexels-sleepididthis-1740919.jpg&amp;fm=jpg" 
    },
    {
      name: "Swift Dzire (Sedan)",
      pricePerKm: 14,
      passengers: "4 + 1",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "https://images.pexels.com/photos/17059960/pexels-photo-17059960.jpeg?cs=srgb&amp;dl=pexels-hebertsantos-17059960.jpg&amp;fm=jpg"
    },
    {
      name: "Swift (Hatchback)",
      pricePerKm: 11,
      passengers: "4 + 1",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1739945896166/front-left-side-47.jpg?tr=w-664"
    },
    {
      name: "Etios",
      pricePerKm: 12,
      passengers: "4 + 1",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "https://images10.gaadi.com/usedcar_image/4479591/original/processed_2ebcfb88025afdc096b5284ef14e5eb4.jpg?imwidth=640"
    },
    {
      name: "Ertiga",
      pricePerKm: 17,
      passengers: "7 + 1",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga-Tour/9617/1741068787046/front-left-side-47.jpg"
    },
    {
      name: "Innova",
      pricePerKm: 17,
      passengers: "6 + 1",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "//upload.wikimedia.org/wikipedia/commons/thumb/6/68/2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg/330px-2022_Toyota_Kijang_Innova_2.4_G_GUN142R_%2820220302%29.jpg"
    },
    {
      name: "Innova Crysta",
      pricePerKm: 19,
      passengers: "7 + 1",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-design1600x1000.jpg"
    },
    {
      name: "Scorpio N",
      pricePerKm: 22,
      passengers: "6 + 1",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-76.jpeg?isig=0&amp;q=80"
    },
    {
      name: "Tempo Traveller",
      pricePerKm: 28,
      passengers: "16 + 1",
      fuelType: "Petrol",
      transmission: "Manual",
      image: "https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: "Licensed & Insured",
      description: "All our drivers are fully licensed and insured for your complete peace of mind."
    },
    {
      icon: <Clock className="w-12 h-12 text-yellow-500" />,
      title: "24/7 Service",
      description: "Available round the clock for all your transportation needs."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-yellow-500" />,
      title: "Easy Payment",
      description: "Multiple payment options including cash and digital payments."
    },
    {
      icon: <MapPin className="w-12 h-12 text-yellow-500" />,
      title: "GPS Tracking",
      description: "Real-time tracking for accurate arrival times and route optimization."
    }
  ];

  const handleBookNow = () => {
    const whatsappNumber = "+918882586447";
    const message = "Hello, I would like to book a taxi.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="absolute inset-0 bg-black opacity-50"
             style={{
               backgroundImage: "url('https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundBlendMode: "overlay"
             }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Taxi Fleet & Pricing
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Choose from our wide range of vehicles to suit your needs. Competitive per-kilometer rates with professional service.
            </p>
            <button
              onClick={handleBookNow}
              className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors inline-block"
            >
              Book Now on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vehicle Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our diverse fleet of well-maintained vehicles. All prices are per kilometer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Service?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience premium taxi service with our professional drivers and well-maintained vehicles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-block p-3 bg-yellow-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaxiService;