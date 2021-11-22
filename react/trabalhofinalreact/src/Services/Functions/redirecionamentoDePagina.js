import iniciarAPI from "../api/iniciarAPI"

export default function redirecionamentoDePagina(valor) {
  const section = document.getElementById('section')
  section.style.display = 'none'

  const conteudo = document.getElementById('conteudo')
  conteudo.style.display = 'grid'

  
  iniciarAPI(valor)
}
  







