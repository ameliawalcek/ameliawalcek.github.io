import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Cursor from "./components/Cursor/Cursor";
import { useDeviceDetect } from "./utils/useDeviceDetect";

const App = () => {
  const { isMobile } = useDeviceDetect();

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {!isMobile && <Cursor />}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {!isMobile && <Tech />}
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
