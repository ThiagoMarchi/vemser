import redirecionamentoDePagina from "../../../Services/Functions/redirecionamentoDePagina"

export default function Menu() {
  return(
    <nav className="navHeader" >
    <ul>
      <li>
        <a 
        href="#Ciencia" 
        onClick={() => redirecionamentoDePagina('science')} 
        > 
          Ciência 
        </a>  
      </li>
      <li>
        <a 
        href="#Tecnologia"
        onClick={() => redirecionamentoDePagina('technology')} 
        > 
          Tecnologia 
        </a>  
      </li>
      <li>
        <a 
        href="#Saude"
        onClick={() => redirecionamentoDePagina('health')} 
        > 
          Saúde 
        </a>  
      </li>
      <li>
        <a 
        href="#Politica"
        onClick={() => redirecionamentoDePagina('politics')} 
        > 
          Política 
        </a>  
      </li>
    </ul>
  </nav>
  )
}