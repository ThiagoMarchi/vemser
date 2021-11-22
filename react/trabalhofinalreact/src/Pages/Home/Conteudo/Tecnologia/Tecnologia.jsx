import '../../Card.modules.css'
import redirecionamentoDePagina from '../../../../Services/Functions/redirecionamentoDePagina'

export default function Tecnologia() {
  return (
    <a className="divPrincipalHome"
    onClick={() => redirecionamentoDePagina('technology')}
    href="#Tecnologia"
    >
      <img src="https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2021/06/Novas-tecnologias.jpg?quality=100&strip=info&resize=680,453" alt="" />
      <h1> Tecnologia </h1>
      <p> Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas. É uma aplicação prática do conhecimento científico em diversas áreas de pesquisa. </p>
    </a>
    
  )
}