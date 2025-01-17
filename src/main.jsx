import ReactDOM from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar'
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' text-secondary bg-[#0a1128] font-roboto overflow-hidden'>
    <Navbar />
    <div className="px-5 container mx-auto max-w-screen-lg">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  </div>
)
