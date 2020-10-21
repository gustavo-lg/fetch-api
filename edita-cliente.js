const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputCpf = document.querySelector('[data-cpf]').value
const inputNome = document.querySelector('[data-nome]').value

detalhaCliente(id).then(dados =>{
    inputCpf = dados[0].cpf
    inputNome = dados[0].nome
})

const formEdicao = document.querySelector('[data-form]')

const mensagemSucesso = (mensagem) =>{
    const linha = document.createElement('tr');

    const conteudoLinha = `
        <div class="alert alert-success" role="alert">
            ${mensagem}
        </div>
    `

    linha.innerHTML = conteudoLinha;
    return linha;
}

const mensagemErro = (mensagem) =>{
    const linha = document.createElement('tr');

    const conteudoLinha = `
        <div class="alert alert-warning" role="alert">
            ${mensagem}
        </div>
    `

    linha.innerHTML = conteudoLinha;
    return linha;
}

formEdicao.addEventListener('submit', e =>{
    e.preventDefault()

    if(!validaCpf(inputCpf)){
        alert('Esse cpf não existe!')
        return
    }
    editaCliente(id, inputCpf, inputNome).then(res => {
        if(res.status === 200){
            formEdicao.appendChild(mensagemSucesso(
                'Editado com sucesso!'
            ))
        }else{
            formEdicao.appendChild(mensagemErro(
                'Não foi possível editar!'
            ))
        }
    })
})