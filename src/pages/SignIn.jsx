import { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(false); // Toggle between Sign In and Sign Up
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "", // Confirm password field for sign-up
    age: "",
    gender: "", // Gender field
  });

  const [errors, setErrors] = useState({
    age: "",
    password: "",
    confirmPassword: "",
    gender: "", // Gender error message
  });

  const handleLogin = () => {
    login();
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validatePassword = (password) => {
    // Regular expression to check if the password is strong enough
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks for sign-up
    if (isSignIn) {
      if (userData.age < 16 || isNaN(userData.age)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          age: "You must be at least 16 years old to sign up.",
        }));
        return;
      }

      if (userData.password !== userData.confirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Passwords must match.",
          confirmPassword: "Passwords must match.",
        }));
        return;
      }

      // Password strength validation
      if (!validatePassword(userData.password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must be at least 8 characters long and include at least one letter, one number, and one special character.",
        }));
        return;
      }

      if (!userData.gender) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          gender: "Please select a gender.",
        }));
        return;
      }
    } else {
      // Password strength validation for login
      if (!validatePassword(userData.password)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password must be at least 8 characters long and include at least one letter, one number, and one special character.",
        }));
        return;
      }
    }

    // Clear errors if validation passes
    setErrors({ age: "", password: "", confirmPassword: "", gender: "" });

    // Implement login functionality
    handleLogin();
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_23-2148819570.jpg')", // Replace with an actual dating-themed image URL
      }}
    >
      <div className="bg-opacity-70 bg-black p-10 rounded-xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Welcome to LoveBytes</h1>
        <h2 className="text-xl text-white mb-4">{isSignIn ? "Create an Account" : "Log in to Your Account"}</h2>

        <form onSubmit={handleSubmit}>
          {isSignIn && (
            <div>
              <label className="block text-white text-left mb-2">Name:</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 text-black rounded-md"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-white text-left mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-black rounded-md"
              required
            />
          </div>

          {/* Password Field: Always Show */}
          <div>
            <label className="block text-white text-left mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full p-3 mb-4 text-black rounded-md"
              required
            />
            {errors.password && <p className="text-red-500 text-left">{errors.password}</p>} {/* Password validation error */}
          </div>

          {/* Show Confirm Password, Age, and Gender Fields Only During Sign-Up */}
          {isSignIn && (
            <>
              <div>
                <label className="block text-white text-left mb-2">Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 text-black rounded-md"
                  required
                />
                {errors.password && <p className="text-red-500 text-left">{errors.password}</p>}
                {errors.confirmPassword && <p className="text-red-500 text-left">{errors.confirmPassword}</p>}
              </div>

              <div>
                <label className="block text-white text-left mb-2">Age:</label>
                <input
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleChange}
                  className="w-full p-3 mb-6 text-black rounded-md"
                  required
                  min="16" // Prevents entering age less than 16
                />
                {errors.age && <p className="text-red-500 text-left">{errors.age}</p>} {/* Display error message */}
              </div>

              {/* Gender Selection */}
              <div className="mb-6 text-left">
                <label className="block text-white mb-2">Gender:</label>
                <div className="flex items-center space-x-6">
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={userData.gender === "Male"}
                      onChange={handleChange}
                      id="male"
                      className="mr-2"
                    />
                    <label htmlFor="male" className="text-white">Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={userData.gender === "Female"}
                      onChange={handleChange}
                      id="female"
                      className="mr-2"
                    />
                    <label htmlFor="female" className="text-white">Female</label>
                  </div>
                </div>
                {errors.gender && <p className="text-red-500 text-left">{errors.gender}</p>}
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-md hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-700 transition duration-300 mb-4"
          >
            {isSignIn ? "Sign Up" : "Log In"}
          </button>
        </form>

        <button
          onClick={() => setIsSignIn(!isSignIn)}
          className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-teal-700 transition duration-300"
        >
          {isSignIn ? "Already have an account? Log in" : "Don't have an account? Sign up"}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
