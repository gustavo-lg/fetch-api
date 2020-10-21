const removeCliente = id =>{
  if(confirm('Deseja deletar este cliente?')){
    deletaCliente(id)
    document.location.reload()
  }
}

const exibeCliente = (cpf, nome, id) => {
  const linha = document.createElement("tr");
  const conteudoLinha = `
  <td>${cpf}</td>
  <td>${nome}</td>
  <button type="button" class="btn btn-danger" onclick="deletaCliente(${id})">DELETAR</button>
  <a href="edita-cliente.html?id=${id}">
    <button type="button" class="btn btn-info">EDITAR</button>
  </a>
  `;

  linha.innerHTML = conteudoLinha;
  return linha;
};

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

listarClientes().then( exibe => {
  exibe.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
  })
}

)


