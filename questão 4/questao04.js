function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const nascimento = document.getElementById('dataNasc').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    
    if(nome === '' || cpf === ''){
        const frase = "Os campos Nome e CPF são obrigatórios.";
        const mensagem = document.getElementById("mensagem");
        mensagem.innerText = frase;
        mensagem.style.color = "red";
    }else{
        const cpfValido = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if(cpfValido.test(cpf)){
            const frase = "Cadastro validado com sucesso!";
            const mensagem = document.getElementById("mensagem");
            mensagem.innerText = frase;
            mensagem.style.color = "green";
        }else{
            const frase = "CPF inválido! O formato correto é 000.000.000-00";
            const mensagem = document.getElementById("mensagem");
            mensagem.innerText = frase;
            mensagem.style.color = "red";
        }
    }
}