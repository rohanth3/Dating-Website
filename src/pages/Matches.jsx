import React, { useState } from "react";

const ProfileCard = () => {
  const [showHeart, setShowHeart] = useState(false);

  const handleClick = () => {
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 to-purple-400 relative overflow-hidden">
      <div className="bg-white shadow-2xl rounded-3xl p-12 text-center w-[450px] h-[600px] transform hover:scale-105 transition duration-300 ease-in-out relative">
        <div className="w-40 h-40 mx-auto mb-8 border-4 border-pink-500 rounded-full overflow-hidden shadow-lg">
          <div className="w-full h-full bg-gray-300"></div>
        </div>
        <div className="text-left mb-8">
          <p className="text-gray-800 font-semibold text-2xl">Name:</p>
          <p className="text-gray-800 font-semibold text-2xl">Age:</p>
        </div>
        <button 
          onClick={handleClick} 
          className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 px-12 rounded-full shadow-lg text-xl font-semibold transform transition duration-300 hover:scale-110 hover:from-pink-600 hover:to-purple-600 relative"
        >
          Connect
        </button>
        {showHeart && (
          <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <span 
              className="text-pink-400 text-[15rem] absolute animate-heart"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                animationDuration: "2s",
              }}
            >
              🩷
            </span>
          </div>
        )}
      </div>
      <style>{`
        @keyframes flyUp {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -250%) scale(0.5); opacity: 0; }
        }
        .animate-heart {
          animation: flyUp 2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;
