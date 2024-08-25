import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import NavBarNew from './components/NewNav/NavBarNew';
import SecondScreen from './screens/SecondScreen';
import WhoFits from './components/fit/WhoFits';
import TrainingOptions from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import ByMe from './components/ByMe/ByMe';
import BasicAccordion from './components/questions/Akordion';
import Recommends from './components/recommends/Recommends';
import AboutMe from './components/me/Me';
import { useEffect, useState } from 'react';
import FifthScreen from './screens/FifthScreen';

function App() {

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
   


    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return <>
  <NavBarNew/>
  <FirstScreen scrolled={scrolled}/>
  <SecondScreen/>
  <AboutMe/>
  <Recommends/>
  
  <WhoFits/>
  <TrainingOptions/>

  <ForthScreen/>
 <FifthScreen/>
  <BasicAccordion/>
  <ByMe/>
  </>
}

export default App;
