
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const celular = document.getElementById('number');
const senha = document.getElementById('password');
const confirmsenha = document.getElementById('confirmPassword');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (firstname.value.trim() === '') {
        swal("Campo vazio", "Por favor, preencha o seu nome.", "error");
        return;
    }
    if (lastname.value.trim() === '') {
        swal("Campo vazio", "Por favor, preencha o seu sobrenome.", "error");
        return;
    }
    if (email.value.trim() === '') {
        swal("Campo vazio ou incorreto", "corrija o campo email", "error");
        return;
    }
    if (celular.value.trim() === '') {
        swal("Campo vazio ou incorreto", "corrija o campo celular", "error");
        return;
    }
    if (senha.value.trim() === '') {
        swal("Campo vazio ou incorreto", "Digite sua senha", "error");
        return;
    }
    if (confirmsenha.value.trim() === '') {
        swal("Campo vazio ou incorreto", "As senhas devem ser iguais", "error");
        return;
    }

    swal("Sucesso!", "Cadastro realizado com sucesso", "success");
});

      swal("Sucesso!", "Cadastro realizado com sucesso", "success");
   
    



