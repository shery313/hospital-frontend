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
import EmergencyCareDetail from './componenets/services/EmergencyCareDetail';
import OrthopedicsDetail from './componenets/services/OrthapedicDetail';
import NeurologyDetail from './componenets/services/NeourologyDetail';
import CardiologyDetail from './componenets/services/Cardiology';
import OncologyDetail from './componenets/services/Oncology';
import PediatricsDetail from './componenets/services/PediatricsDetail';
import GeneralMedicineDetail from './componenets/services/GeneralMedicineDetail';
import SpecialistCareDetail from './componenets/services/SpecialistCareDetail';
import DoctorProfile from './componenets/services/DoctorProfile';
// import RadiologyService from './componenets/services/RadiologyServicec';
import RadiologyDetail from './componenets/services/RadiologyServicec';
import PhysiotherapyServicesDetail from './componenets/services/Physiotherapy';
import LaboratoryServicesDetail from './componenets/services/LaboratoryDetail';
import SurgeryServicesDetail from './componenets/services/SurgeryDetial';
import DentistDetail from './componenets/services/DentistDetial';
import Faq from './componenets/plugins/Faq';
import NewsAndEvents from './componenets/plugins/NewsAndEvents';
import DetailPage from './componenets/plugins/DetailPage';
import PrivacyPolicy from './componenets/plugins/PrivacyPolicy';
import TermsOfService from './componenets/plugins/TermsServices';
import Dispensaries from './componenets/pages/Dispenceries';

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
        <Route path="/services/emergency" element={<EmergencyCareDetail />} />
        <Route path="/services/orthopedics" element={<OrthopedicsDetail />} />
        <Route path="/services/neurology" element={<NeurologyDetail />} />
        <Route path="/services/cardiology" element={<CardiologyDetail />} />
        <Route path="/services/oncology" element={<OncologyDetail />} />
        <Route path="/services/pediatrics" element={<PediatricsDetail />} />
        <Route path="/services/radiology" element={<RadiologyDetail />} />
        <Route path="/services/dentistry" element={<DentistDetail />} />
        {/* <Route path="/doctors:doctorId" element={<DoctorProfile />} /> */}
        <Route path="/doctors/:doctorId" element={<DoctorProfile/>} />
        <Route path="/services/general-medicine" element={<GeneralMedicineDetail />} />
        <Route path="/services/specialist-care" element={<SpecialistCareDetail />} />
        <Route path="/services/physiotherapy" element={<PhysiotherapyServicesDetail />} />
        <Route path="/services/laboratory" element={<LaboratoryServicesDetail />} />
        <Route path="/services/surgery" element={<SurgeryServicesDetail />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/dispenceries" element={<Dispensaries/>} />
        <Route path="/news-events" element={<NewsAndEvents />} />
        <Route path="/news-and-events/:id" element={<DetailPage/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
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
