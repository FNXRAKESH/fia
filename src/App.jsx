import { HashRouter, Navigate, Route,  Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Menu from './components/menu/Menu';
import BusinessConsulting from "./pages/services/BusinessConsulting";
import Landing from './pages/Landing';
import Services from "./pages/Services";
import SolutionImplementation from "./pages/services/SolutionImplementation";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";

function App() {
  return (
    <div>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="services" element={<Services />} />
          <Route path="BusinessConsulting" element={<BusinessConsulting />} />
          <Route path="MaintenanceSupport" element={<MaintenanceSupport />} />
          <Route
            path="SolutionImplementation"
            element={<SolutionImplementation />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App
