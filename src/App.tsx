import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TechnicalAnalysis from "./pages/TechnicalAnalysis";
import GovernmentDocs from "./pages/GovernmentDocs";
import NewsMedia from "./pages/NewsMedia";
import SitePhotos from "./pages/SitePhotos";
import VolunteerSupport from "./pages/VolunteerSupport";
import Timeline from "./pages/Timeline";
import VideoFootage from "./pages/VideoFootage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <main className="flex-1 p-8 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<TechnicalAnalysis />} />
            <Route path="/government-docs" element={<GovernmentDocs />} />
            <Route path="/news-media" element={<NewsMedia />} />
            <Route path="/site-photos" element={<SitePhotos />} />
            <Route path="/volunteer-support" element={<VolunteerSupport />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/video-footage" element={<VideoFootage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
