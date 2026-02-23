import './App.css'
import Nav from './components/Layout/Nav'
import HeroContent from './components/Layout/HeroContent'
import ServicesSection from './components/Layout/ServicesSection'
import About from './components/Layout/About'
import MyWork from './components/Layout/MyWork'
import Contact from './components/Layout/Contact'

function App() {
  return (
    <>
      <Nav />
      <HeroContent />
      <ServicesSection />
      <About />
      <MyWork />
      <Contact />
      <Nav />
    </>
  )
}

export default App
