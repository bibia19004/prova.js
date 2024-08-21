const usuarios = [];

function adicionarUsuario(nome, idade, email) {
    
    if (!nome || !idade || !email) {
        console.log('Erro: Todos os campos devem ser preenchidos.');
        return;
    }
    
 
    if (typeof idade !== 'number' || idade <= 0) {
        console.log('Erro: A idade deve ser um número maior que 0.');
        return;
    }
    
    
    if (!email.includes('@') || !email.includes('.')) {
        console.log('Erro: O email fornecido não é válido.');
        return;
    }
    
 
    const novoUsuario = {
        nome: nome,
        idade: idade,
        email: email
    };
    usuarios.push(novoUsuario);
    console.log('Usuário adicionado com sucesso.');
}



function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado.');
        return;
    }
    
    console.log('Usuários cadastrados:');
    usuarios.forEach((usuario, index) => {
        console.log(`Usuário ${index + 1}:`);
        console.log(`  Nome: ${usuario.nome}`);
        console.log(`  Idade: ${usuario.idade}`);
        console.log(`  Email: ${usuario.email}`);
    });
}


adicionarUsuario('João', 25, 'joao@example.com'); 
adicionarUsuario('Maria', 30, 'maria@example.com'); 
adicionarUsuario('Ana', -5, 'ana@example.com');
adicionarUsuario('Pedro', 28);

listarUsuarios();