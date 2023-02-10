import { HashRouter, Navigate, Route,  Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Menu from './components/menu/Menu';
import BusinessConsulting from "./pages/services/BusinessConsulting";
import Landing from './pages/Landing';

import SolutionImplementation from "./pages/services/SolutionImplementation";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";
import InvFactoring from "./pages/solutions/InvFactoring";
import Mca from "./pages/solutions/Mca";
import ContactUs from "./pages/contactus/ContactUs";
import AboutUs from "./pages/aboutus/AboutUs";

function App() {
  return (
    <div>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="BusinessConsulting" element={<BusinessConsulting />} />
          <Route path="MaintenanceSupport" element={<MaintenanceSupport />} />
          <Route
            path="SolutionImplementation"
            element={<SolutionImplementation />}
          />
          <Route path="invFactoring" element={<InvFactoring />} />
          <Route path="mca" element={<Mca />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App
