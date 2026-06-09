import CursorFollower from './components/animations/CursorFollower';
import Manifest from './components/animations/Manifest';
import Scroll from './components/animations/Scroll';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="w-full h-screen  bg-(--primary-background-color) ">
      <CursorFollower />
      <Navbar />
      <Hero />
      <Scroll />
      <Manifest />
      </div>
  )
}

export default App