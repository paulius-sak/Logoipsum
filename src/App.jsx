import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import links from "./constants/Links"

const App = () => {
  return (
    <div>
      <Navbar links={links}/>
      <Hero/>
    </div>
  );
};

export default App;
