import '../../Card.modules.css'
import redirecionamentoDePagina from '../../../../Services/Functions/redirecionamentoDePagina'

export default function Politica() {
  return (
    <div 
    className="divPrincipalHome"
    onClick={() => redirecionamentoDePagina('politics')}
    >
      <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/discurso-politico.jpg" alt="" />
      <h1> Política </h1>
      <p> Política é a atividade da governança, do Estado e das relações de poder e também uma arte de negociação para compatibilizar interesses. </p>
    </div>
    
  )
}