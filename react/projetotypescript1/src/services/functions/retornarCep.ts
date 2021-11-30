import axios from "axios";

export default function retornarCep(cep:any):any {
  let url = `https://viacep.com.br/ws/${cep}/json/`
  axios.get(url)
  .then(resp => resp.data)
  .then(data => {
    return data
  })
}