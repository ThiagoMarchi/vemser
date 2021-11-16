import style from "./SayMyName.module.css"

function SayMyName(props) {
  const numero = props.calcular(10)
  return(
    <div className = {style.sayMyName}>
      <p>Fala aí {props.name}</p>
      <h1>{numero}</h1>
    </div>
  )
}

export default SayMyName;