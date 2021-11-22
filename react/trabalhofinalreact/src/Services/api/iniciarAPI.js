import axios from "axios"

export default function iniciarAPI(section) {
  let url = `https://api.nytimes.com/svc/topstories/v2/${section}.json`
  let key = 'TG5gtmnPFls13oyPaueVeUxzgA1i8tGK'
 
 
  axios.get(`${url}?api-key=${key}`)
    .then(resp => resp.data)
    .then(resp => resp.results)
    .then(i => {
      document.getElementById('conteudo').innerHTML = ''

      for(let x=10; x <= 21; x++) {
      
      const d = document.createElement('a')
      d.className = 'divPrincipalHome'
      d.setAttribute('href', i[x].short_url)
      d.setAttribute('target', '_blank' )

      const description = document.createElement('p')
      description.innerHTML = i[x].abstract

      const tittle = document.createElement('h1')
      tittle.innerHTML = i[x].title

      const date = document.createElement('p')
      date.innerHTML = `Pulicado em: ${i[x].published_date}`

      const byline = document.createElement('p')
      byline.innerHTML =  i[x].byline

      const imagem = document.createElement('img')
      imagem.setAttribute("src", i[x].multimedia === null ? 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image' : i[x].multimedia[0].url) 
      imagem.setAttribute("alt", "Não tem imagem")

      const conteudo = document.getElementById('conteudo')

      d.append(tittle, imagem,  description,  byline, date)
      conteudo.appendChild(d)

      }
    }
  )
    

}

