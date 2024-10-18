import Navbar from "./components/Navber"
import Hero from "./components/Hero";
import Header from "./components/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ItemSection from "./components/ItemSection";
import './App.css'
import InspirationSection from "./components/InspirationSection";
import Preview from "./components/Preview";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Header/>
      <ItemSection/>
      <InspirationSection/>
      <Preview/>
      <Footer/>
    </>
  )
} 