import '../../Card.modules.css'
import redirecionamentoDePagina from '../../../../Services/Functions/redirecionamentoDePagina'

export default function Saude() {
  return (
    <div className="divPrincipalHome"
    onClick={() => redirecionamentoDePagina('health')}
    >
      <img src="https://telemedicinamorsch.com.br/wp-content/uploads/2018/11/saude-digital.jpg" alt="" />
      <h1> Saúde </h1>
      <p> Saúde significa o estado de normalidade de funcionamento do organismo humano. Ter saúde é viver com boa disposição física e mental. </p>
    </div>
    
  )
}