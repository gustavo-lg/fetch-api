const formCadastroCliente = document.querySelector('[data-form]')

formCadastroCliente.addEventListener("submit", e => {
    e.preventDefault()

    const nome = e.target.querySelector('[data-nome]').value
    const cpf = e.target.querySelector('[data-cpf]').value

    if(validaCpf(cpf)){
        cadastrarClientes(nome, cpf)
    }else{
        alert('O CPF não é valido!')
    }
})