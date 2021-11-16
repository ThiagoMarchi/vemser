import SecondComponents from "./SecondComponents";

function FirstComponent(props) {
  return(
    <>
      <h1>Meu Primeiro Componente</h1>
      <p>Testando outra coisa</p>
      <SecondComponents name = {props.name} />
    </>
  )
}

export default FirstComponent;
