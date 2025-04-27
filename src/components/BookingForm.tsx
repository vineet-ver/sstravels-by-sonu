import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

const BookingForm = () => {
  const [booking, setBooking] = useState({
    pickup: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([booking]);

      if (error) throw error;

      setSubmitStatus({
        type: 'success',
        message: 'Booking received! We will contact you shortly to confirm.'
      });

      // Reset form
      setBooking({
        pickup: '',
        destination: '',
        date: '',
        time: '',
        passengers: '1'
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus({
        type: 'error',
        message: 'There was an error processing your booking. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Your Ride</h2>
      
      {submitStatus.type && (
        <div className={`mb-6 p-4 rounded-md ${
          submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="pickup"
            value={booking.pickup}
            onChange={handleChange}
            placeholder="Pickup Location"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        
        <div className="relative">
          <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="destination"
            value={booking.destination}
            onChange={handleChange}
            placeholder="Destination"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="date"
              name="date"
              value={booking.date}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          
          <div className="relative">
            <Clock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="time"
              name="time"
              value={booking.time}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
        </div>
        
        <div className="relative">
          <Users size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <select
            name="passengers"
            value={booking.passengers}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
            required
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Passenger' : 'Passengers'}
              </option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-md hover:bg-yellow-400 transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Processing...' : 'Book Now'}
        </button>
      </form>
      
      <p className="text-gray-500 text-sm mt-4 text-center">
        By booking, you agree to our <a href="#" className="text-yellow-500 hover:underline">Terms of Service</a>
      </p>
    </div>
  );
};

export default BookingForm;