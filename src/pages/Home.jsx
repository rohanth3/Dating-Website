import React, { useState } from "react";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <section
        className="min-h-screen bg-gradient-to-r from-pink-400 to-pink-600 bg-cover flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/06/90/01/069001f908fe34f04934ffc86c39a6d3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#ff0077",
        }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl text-pink-600 font-bold mb-4 -mt-20 sm:-mt-40 md:-mt-60">
          Welcome to LoveBytes
        </h1>
        <p className="text-xl sm:text-2xl md:text-4xl text-black mb-4 sm:mb-6 md:mb-8 mt-6">
          Your journey to find love starts here. Find a perfect match for yourself!
        </p>
        <p className="text-xl sm:text-2xl md:text-4xl text-black mb-4 sm:mb-6 md:mb-8">
          Enough of enjoying with a partner in crime...<br />Now it's time to enjoy with a partner to dine!
        </p>
        <a
          href="#contact"
          className="absolute top-12 sm:top-14 md:top-16 left-6 sm:left-10 md:left-12 bg-pink-500 text-black py-2 px-4 sm:px-5 md:px-6 rounded-full text-sm sm:text-base md:text-lg hover:bg-pink-700"
        >
          Contact Us
        </a>
      </section>

      <section
        id="contact"
        className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col md:flex-row justify-between items-start p-4 sm:p-8"
      >
        <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-3xl sm:text-5xl md:text-7xl text-white mb-4 sm:mb-6">Skate into love!</p>

          <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-lg">
            <Card title="Email" info="rohanthgc3@gmail.com" />
            <Card title="Phone" info="+91 9353217186" />
            <Card title="Address" info="BE Block Room number 506, 100 Feet Ring Road, Banashankari Stage III, Dwaraka Nagar, Banashankari, Bengaluru, Karnataka 560085" />
          </div>
        </div>

        <div className="w-full max-w-lg mt-8 md:mt-0 md:ml-16">
          <Form />
        </div>
      </section>
    </div>
  );
};

const Card = ({ title, info }) => {
  return (
    <div className="bg-white bg-opacity-80 rounded-lg p-4 sm:p-6 shadow-lg text-gray-800 w-full sm:w-80 mx-auto">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-base sm:text-lg">{info}</p>
    </div>
  );
};

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Your message has been sent successfully!");
    setData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Contact Us</h1>
      {status && <div className="text-center text-green-500 mb-4">{status}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInput}
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInput}
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={data.subject}
            onChange={handleInput}
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Your Message</label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleInput}
            rows="4"
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 sm:py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Home;
