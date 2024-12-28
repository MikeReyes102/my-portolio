import { useState } from 'react'
import ParticlesBg from 'particles-bg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {
  const [activeComponent, setActiveComponent] = useState('Home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return <Hero />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      default:
        return <Hero />;
    }
  };

  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} />
      <Navigation setActiveComponent={setActiveComponent} />
      {renderComponent()}
      <Footer />
    </div>
  )
}

export default App
