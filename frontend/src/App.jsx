import Scroll from './components/animations/Scroll';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="w-full h-screen  bg-(--primary-background-color) ">
      <Navbar />
      <Hero />
      <Scroll />
      
      </div>
  )
}

export default App