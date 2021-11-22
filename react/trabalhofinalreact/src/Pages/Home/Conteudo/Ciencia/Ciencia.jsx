import '../../Card.modules.css'
import redirecionamentoDePagina from '../../../../Services/Functions/redirecionamentoDePagina'

export default function Ciencia() {
  return (

    <div 
      className="divPrincipalHome" 
      onClick={() => redirecionamentoDePagina('science')} 
    >
      <img src="https://t5z6q4c2.rocketcdn.me/wp-content/uploads/2020/04/o-que-e-ciencia-definicao-historia-tipos-de-ciencia-e-caracteristicas-2-1024x536.jpg" alt="" />
      <h1> Ciência </h1>
      <p> Ciência refere-se a qualquer conhecimento ou prática sistemáticos. Em sentido estrito, ciência refere-se ao sistema de adquirir conhecimento baseado no método científico bem como ao corpo organizado de conhecimento conseguido através de tais pesquisas. Este artigo foca o sentido mais estrito da palavra. </p>
    </div>
    
  )
}