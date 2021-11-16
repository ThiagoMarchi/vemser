function Personal({name, idade, profissao, src}){
  return(
    <>
      <h2>Nome: {name} </h2>
      <p>Idade: {idade} </p>
      <p>Profissão: {profissao} </p>
      <img src={src} alt="Imagem qualquer" />
      </>
  );
}

export default Personal;