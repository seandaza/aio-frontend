
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map';
import Description from './components/Description';
import { BannerSinFiltro } from './components/BannerSinFiltro';
import Carousel from './components/Carousel';



function App() {
  return (
    <>
      <BannerSinFiltro />
      <Carousel />
      <Description/>
      <Map/>
    </>
  );
}

export default App;
