import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import PublicoAlvo from "./pages/PublicoAlvo"
import Funcionamento from "./pages/Funcionamento"
import Objetivo from "./pages/Objetivo"
import Componentes from "./pages/Componentes"


function Router () {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Publicoalvo" element={<PublicoAlvo />}/>
            <Route path="/Funcionamento" element={<Funcionamento />}/>
            <Route path="/Componentes" element={<Componentes />}/>
        </Routes>
    )
}

export default Router