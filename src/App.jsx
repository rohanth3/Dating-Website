import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import DatingTips from "./pages/DatingTips";
import FAQs from "./pages/FAQs";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import Subscription from "./pages/Subscription";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/datingtips" element={<DatingTips />} />
      <Route path="/faqs" element={<FAQs />} />
      {!isAuthenticated && <Route path="/signin" element={<SignIn />} />}
      {isAuthenticated && (
        <>
          <Route path="/profile" element={<Profile />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/subscription" element={<Subscription />} />
        </>
      )}
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
