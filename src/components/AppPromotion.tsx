import React from 'react';
import { Smartphone, CheckCircle } from 'lucide-react';

const AppPromotion = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Download Our Mobile App</h2>
            <p className="text-xl text-blue-200 mb-8">
              Book rides, track your driver, and manage payments with our easy-to-use mobile application. Available for iOS and Android.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle size={24} className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Quick Booking</h4>
                  <p className="text-blue-200">Book a ride in just a few taps and get picked up within minutes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle size={24} className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Real-time Tracking</h4>
                  <p className="text-blue-200">Track your driver's location in real-time and share your trip details.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle size={24} className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Exclusive Offers</h4>
                  <p className="text-blue-200">Get access to special discounts and promotions only available on the app.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition-colors"
              >
                <Smartphone size={24} className="mr-3" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              
              <a 
                href="#" 
                className="bg-black text-white px-6 py-3 rounded-lg flex items-center hover:bg-gray-900 transition-colors"
              >
                <Smartphone size={24} className="mr-3" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 transform lg:translate-x-12">
              <img 
                src="https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="ZoomCabz Mobile App"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3/4 h-3/4 bg-yellow-500 rounded-xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;