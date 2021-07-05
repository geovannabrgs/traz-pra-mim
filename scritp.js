function cadastrar() {
    let nome = document.getElementById("nome").value;
    let uf = document.getElementById("uf").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let usuario = {
        "nome": nome,
        "uf": uf,
        "telefone": telefone,
        "email": email,
        "senha": senha,
    }
    if (!localStorage.getItem("usuarios")) {
        let usuarios = [];
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
    } else {
        let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        if (usuarios.filter(u => u.email == email).lenght == 0) {
            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            window.location.href = "inicial-1.html";
        } else {
            alert("esse usuario ja existe");
        }
    }
}

function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!localStorage.getItem("usuarios")) {
        alert("nenhum resultado");
    } else {
        let usuarios = JSON.parse(localStorage.getItem("usuarios"));
        let usuario = usuarios.find(u => u.email == email);
        if (usuario) {
            if (usuario.senha == senha) {
                window.location.href = "inicial-1.html";
            } else {
                alert("Email/senha incorreta");
            }
        } else {
            alert("Email/senha incorreta");
        }
    }
}

function banco_de_dados() {
    if (!localStorage.getItem("usuarios")) {
        localStorage.setItem("usuarios", []);
    }
}