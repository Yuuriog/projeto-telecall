function validarFormulario() {
    var cpfCnpj = document.getElementById("CPFouCNPJ").value;
    var password = document.getElementById("password").value;

    if (cpfCnpj === '') {
        alert("Campo vazio! Por favor, preencha o campo CPF/CNPJ.");
        return false;
    }

    if (password === '') {
        alert("Campo vazio: Por favor, preencha o campo senha.");
        return false;
    }

    return true;
}


function toggleDarkMode() {
    document.getElementsByClassName("card")[0].classList.toggle("dark-mode")
    document.getElementsByClassName("Cadastra_se")[0].classList.toggle("text-dark")
    document.getElementsByClassName("recuperar_senha")[0].classList.toggle("text-dark")
}

