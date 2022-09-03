import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Utility/Loading";
import Rota404 from "./rotas/Rota404";
const Home = lazy(() => import("./rotas/Home"))
const Produtos = lazy(() => import("./rotas/Produtos"))
const Lojas = lazy(() => import("./rotas/Lojas"))
const Galeria = lazy(() => import("./rotas/Galeria"))
const Contato = lazy(() => import("./rotas/Contato"))

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produtos' element={<Produtos />} />
        <Route path='/lojas' element={<Lojas />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/*' element={<Rota404 />} />
      </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App;
