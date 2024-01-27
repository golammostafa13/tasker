import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TaskListSection from "./components/TaskListSection";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Navbar />
      <HeroSection />
      <TaskListSection />
      <Footer />
    </div>
  );
}

export default App;
