import React from 'react';

const Subscription = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen text-white">
      <div className="container mx-auto py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Unlock Your Perfect Match with Our Subscription Plans
        </h1>
        <p className="text-xl mb-8">
          Get access to exclusive features and connect with your ideal partner.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Basic</h2>
            <p className="text-xl mb-4">Essential features to get you started.</p>
            <p className="text-4xl font-semibold mb-6">$9.99/month</p>
            <ul className="mb-6">
              <li>✔ Access to Profiles</li>
              <li>✔ Match Notifications</li>
            </ul>
            <a href="https://drive.google.com/file/d/1-LzKGXFQiEfp1cc9twRVv8AG30NtfGs8/view?usp=sharing" target="_blank">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md w-full">
              Subscribe Now
            </button>
            </a>
          </div>

          {/* 2 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Premium</h2>
            <p className="text-xl mb-4">All the features you need for a great experience.</p>
            <p className="text-4xl font-semibold mb-6">$19.99/month</p>
            <ul className="mb-6">
              <li>✔ All Basic Features</li>
              <li>✔ See Who Liked You</li>
              <li>✔ Unlimited Messaging</li>
            </ul>
            <a href="https://drive.google.com/file/d/1-LzKGXFQiEfp1cc9twRVv8AG30NtfGs8/view?usp=sharing" target="_blank">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md w-full" >
              Subscribe Now
            </button>
            </a>
          </div>

          {/* 3 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">VIP</h2>
            <p className="text-xl mb-4">For those looking for the best of the best.</p>
            <p className="text-4xl font-semibold mb-6">$29.99/month</p>
            <ul className="mb-6">
              <li>✔ All Premium Features</li>
              <li>✔ VIP Badge</li>
              <li>✔ Boost Your Profile</li>
              <li>✔ Free Profile Reviews</li>
              <li>✔ Unlimited Access to Events</li>
            </ul>
            <a href="https://drive.google.com/file/d/1-LzKGXFQiEfp1cc9twRVv8AG30NtfGs8/view?usp=sharing" target="_blank">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md w-full">
              Subscribe Now
            </button>
            </a>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg">
            Choose the plan that suits you best and start making meaningful connections today!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Subscription;