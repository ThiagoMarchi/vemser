import redirecionamentoDePagina from "../../../Services/Functions/redirecionamentoDePagina"

export default function Menu() {
  return(
    <nav className="navHeader" >
    <ul>
      <li
      onClick={() => redirecionamentoDePagina('science')}
      >Ciência</li>
      <li
      onClick={() => redirecionamentoDePagina('technology')}
      >Tecnologia</li>
      <li
      onClick={() => redirecionamentoDePagina('health')}
      >Saúde</li>
      <li
      onClick={() => redirecionamentoDePagina('politics')}
      >Política</li>
    </ul>
  </nav>
  )
}