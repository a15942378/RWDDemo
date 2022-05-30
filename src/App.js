import { ThemeProvider } from 'styled-components';
import Footer from './Component/Footer';
import Navigation from './Component/Navigation';
import About from './Component/Section/About';
import Faq from './Component/Section/Faq';
import Home from './Component/Section/Home';
import RoadMap from './Component/Section/RoadMap';
import ShowCase from './Component/Section/ShowCase';
import Team from './Component/Section/Team';
import GolbalStyle from './style/GolbalStyle';
import {light} from './style/Themes';

function App() {
  return (
    <div>
      <GolbalStyle />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <RoadMap />
        <ShowCase />
        <Team />
        <Faq />
        <Footer />
      App Zone
      </ThemeProvider>
    </div>
  );
}

export default App;
