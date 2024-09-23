import './App.css';
import Footer from './componenets/home/Footer';
import Header from './componenets/home/Header';
import Home from './componenets/home/Home';
import Appointment from './componenets/home/Appointment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './componenets/pages/About';
import Departments from './componenets/pages/Departments';
import Doctors from './componenets/pages/Doctors';
import Contact from './componenets/pages/Contact';
import Login from './componenets/auth/Login';
import Signup from './componenets/auth/Signup';
import Services from './componenets/pages/Services';
import AppointmentDetail from './componenets/pages/AppointmentDetail';
import HealthResources from './componenets/pages/HealthResources';
import Profile from './componenets/home/user/Profile';
import Blogs from './componenets/home/user/Blogs';
import BlogDetail from './componenets/home/user/BlogDetail';
import WhatsAppChat from './componenets/home/user/WhatsAppChat'; // Adjust the path if needed

function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment-detail" element={<AppointmentDetail />} />
        <Route path="/health-resources" element={<HealthResources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
      <WhatsAppChat /> {/* Include WhatsApp chat component */}
    </Router>
  );
}

export default App;
