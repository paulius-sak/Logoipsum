import "./App.css";
import CategoryList from "./components/Hero/CategoryList/CategoryList";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import links from "./constants/Links"

const App = () => {
  return (
    <div>
      <Navbar links={links}/>
      <Hero/>
      <CategoryList/>
    </div>
  );
};

export default App;
