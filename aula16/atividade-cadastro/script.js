function cadastrarUsuario() {
    // Variáveis com os valores do formulário
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;


    // Criando o objeto usuário
    let usuario = {
        nome: nome,
        idade: idade,
        email: email,
        cidade: cidade,
        estado: estado,
    };


    // Template string com os dados do usuário
    let mensagem = `
    Nome: ${usuario.nome} 
    Idade: ${usuario.idade}
    E-mail: ${usuario.email}
    Cidade: ${usuario.cidade}
    Estado: ${usuario.estado}
  `;

    // Exibindo resultado na tela
    document.getElementById("resultado").innerText = mensagem;
    
}
