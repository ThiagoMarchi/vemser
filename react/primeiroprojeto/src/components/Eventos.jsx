function Eventos(props) {
  function meuEvento() {
    // console.log(`Opa, fui clicado ${num}!`);
  }
  const numero = props.calc(2)
  return (
    <>
      <p>{numero}</p>
      <button onClick={meuEvento}>Ativar</button>
    </>
  );
}

export default Eventos;