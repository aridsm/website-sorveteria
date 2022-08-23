import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./rotas/Home";
import Produtos from "./rotas/Produtos"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
