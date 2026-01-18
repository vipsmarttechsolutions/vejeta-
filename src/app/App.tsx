import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { WhatsAppButton } from './components/whatsapp-button';

// Pages
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ProgramsPage } from './pages/programs';
import { ProgramDetailPage } from './pages/program-detail';
import { PhysicalTrainingPage } from './pages/physical-training';
import { SuccessPage } from './pages/success';
import { FacultyPage } from './pages/faculty';
import { AdmissionPage } from './pages/admission';
import { ContactPage } from './pages/contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/program/:title" element={<ProgramDetailPage />} />
          <Route path="/physical-training" element={<PhysicalTrainingPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
