import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../../Pages/Home/Home";
import Politica from "../../Pages/Home/Conteudo/Politica/Politica";
import Ciencia from "../../Pages/Home/Conteudo/Ciencia/Ciencia";
import Saude from "../../Pages/Home/Conteudo/Saude/Saude";
import Tecnologia from "../../Pages/Home/Conteudo/Tecnologia/Tecnologia";

const Routes = () => {
  return(
      <BrowserRouter>
          <Route component = { Home }  path="/" exact />
          <Route component = { Politica }  path="/politica" />
          <Route component = { Ciencia }  path="/ciencia" />
          <Route component = { Saude }  path="/saude" />
          <Route component = { Tecnologia }  path="/tecnologia" />
      </BrowserRouter>
  )
}

export default Routes;