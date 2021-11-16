function OutraLista ({itens}) {

  return (
    <>
      <h3>Lista de tecnologias</h3>
      {itens.length ? (itens.map(item => (
        <div key={item.id}>
          <p>{item.nome}</p>
          <p>{item.idade}</p>
        </div>
      ))) : (<h1>Lista vazia</h1>)}
    </>
  )
}

export default OutraLista;