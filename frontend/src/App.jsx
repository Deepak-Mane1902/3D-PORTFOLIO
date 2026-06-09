import CursorFollower from './components/animations/CursorFollower';
import Manifest from './components/animations/Manifest';
import ProjectScroll from './components/animations/ProjectScroll';
import Scroll from './components/animations/Scroll';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoDetail from './components/InfoDetail';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="w-full h-screen  bg-(--primary-background-color) ">
      <CursorFollower />
      <section className="overflow-hidden">
      <Navbar />
      <Hero />
      <Scroll />
      <Manifest />
      <InfoDetail />
      <ProjectScroll />
      <Footer />
      
      </section>
          </main>
  )
}

export default App