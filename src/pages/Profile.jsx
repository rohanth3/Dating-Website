import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Profile = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-white-500 to-red-500 p-8">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-pink-500 mb-6">Your Profile</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3CyVF50Ns1Ii3cgaNO14NlX_NiC4n1PT8Bw&s"class="w-25 h-25 rounded-full object-cover mx-auto border-4 border-black-500"/>
        <div className="text-left">
          <h1 className="text-lg text-black mb-1 mt-5">Name:</h1>
          <h1 className="text-lg text-black mb-1">Email:</h1>
          <h1 className="text-lg text-black mb-6">Age:</h1>
        </div>
        <button
          onClick={logout}
          className="bg-red-600 text-white py-3 px-6 rounded-md text-xl hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
