import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contato from "./rotas/Contato";
import Galeria from "./rotas/Galeria";
import Home from "./rotas/Home";
import Lojas from "./rotas/Lojas";
import Produtos from "./rotas/Produtos"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/lojas' element={<Lojas />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
