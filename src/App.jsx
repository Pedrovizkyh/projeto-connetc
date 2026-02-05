import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import PaginaInicial from "./pages/paginaInicial/PaginaInicial";
import Doacao from "./pages/doacao/Doacao"
import Voluntario from "./pages/voluntario/Voluntario"
import Mentoria from "./pages/mentoria/Mentoria"
import Eventos from "./pages/eventos/Eventos"


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PaginaInicial/>}/>
          <Route path="/doacao" element={<Doacao/>}/>
          <Route path="/voluntario" element={<Voluntario/>}/>
          <Route path="/mentoria" element={<Mentoria/>}/>
          <Route path="/eventos" element={<Eventos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
