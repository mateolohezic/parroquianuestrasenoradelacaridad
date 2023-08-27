import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Plantilla1 from './Pages/Plantilla1/Plantilla1';
import Plantilla2 from './Pages/Plantilla2/Plantilla2';
import Plantilla3 from './Pages/Plantilla3/Plantilla3';
import NotaPadreHoracio from './Pages/Notas/NotaPadreHoracio/NotaPadreHoracio';
import NotaLlegadaCaridad from './Pages/Notas/NotaLlegadaCaridad/NotaLlegadaCaridad';
import NotaCapillaColegioDivinaMisericordia from './Pages/Notas/NotaCapillaColegioDivinaMisericordia/NotaCapillaColegioDivinaMisericordia';
import NotaNiñezAdolescencia from './Pages/Notas/NotaNiñezAdolescencia/NotaNiñezAdolescencia';
import NotaSanAntonioPadua from './Pages/Notas/NotaSanAntonioPadua/NotaSanAntonioPadua';
import NotaSueñoPosible from './Pages/Notas/NotaSueñoPosible/NotaSueñoPosible';
import NotaVocacion from './Pages/Notas/NotaVocacion/NotaVocacion';
import NotaTestimonioPadre from './Pages/Notas/NotaTestimonioPadre/NotaTestimonioPadre';
import NotaCuantaGratitud from './Pages/Notas/NotaCuantaGratitud/NotaCuantaGratitud';
import NotaOratorio from './Pages/Notas/NotaOratorio/NotaOratorio';
import NotaAccionCatolica from './Pages/Notas/NotaAccionCatolica/NotaAccionCatolica';
import NotaCristoHoy from './Pages/Notas/NotaCristoHoy/NotaCristoHoy';
import NotaCapillaRosario from './Pages/Notas/NotaCapillaRosario/NotaCapillaRosario';
import NotaDivino from './Pages/Notas/NotaDivino/NotaDivino';
import NotaOrquesta from './Pages/Notas/NotaOrquesta/NotaOrquesta';
import NotaConsagracion from './Pages/Notas/NotaConsagracion/NotaConsagracion';
import NotaVirgenEucaristia from './Pages/Notas/NotaVirgenEucaristia/NotaVirgenEucaristia';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/En-memoria-del-padre-jorge-gandur-pbro-lic-horacio-a-gomez" element={<NotaPadreHoracio/>} />
        <Route path="/La-llegada-del-padre-jorge-a-la-caridad" element={<NotaLlegadaCaridad/>} />
        <Route path="/La-capilla-y-el-colegio-divina-misericordia" element={<NotaCapillaColegioDivinaMisericordia/>} />
        <Route path="/Jorge-niñez-y-adolescencia" element={<NotaNiñezAdolescencia/>} />
        <Route path="/La-capilla-san-antonio-de-padua" element={<NotaSanAntonioPadua/>} />
        <Route path="/Un-sueño-por-cumplir" element={<NotaSueñoPosible/>} />
        <Route path="/Una-vocacion-del-pbro-jorge-antonio-gandur" element={<NotaVocacion/>} />
        <Route path="/Testimonio-del-padre-jorge-gandur" element={<NotaTestimonioPadre/>} />
        <Route path="/Cuanta-gratitud-a-nuestro-querido-padre-jorge" element={<NotaCuantaGratitud/>} />
        <Route path="/Capilla-de-adoracion-perpetua-corazon-eucaristico-de-jesus" element={<NotaOratorio/>} />
        <Route path="/Accion-catolica-accion" element={<NotaAccionCatolica/>} />
        <Route path="/El-padre-jorge-gandur-y-cristo-hoy" element={<NotaCristoHoy/>} />
        <Route path="/La-capilla-nuestra-señora-del-rosario-de-san-nicolas" element={<NotaCapillaRosario/>} />
        <Route path="/La-capilla-divino-nino" element={<NotaDivino/>} />
        <Route path="/El-padre-jorge-gandur-y-la-orquesta-del-divino-nino" element={<NotaOrquesta/>} />
        <Route path="/El-padre-gandur-y-las-charlas-de-consagracion-a-la-virgen" element={<NotaConsagracion/>} />
        <Route path="/Testimonio-del-padre-sobre-la-virgen-de-la-eucaristia" element={<NotaVirgenEucaristia/>} />
        <Route path="/1" element={<Plantilla1/>} />
        <Route path="/2" element={<Plantilla2/>} />
        <Route path="/3" element={<Plantilla3/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App