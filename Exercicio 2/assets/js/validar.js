document.getElementById("psw").addEventListener("focus", function () {
    document.getElementById("message").style.display = "block";
});

document.getElementById("psw").addEventListener("blur", function () {
    document.getElementById("message").style.display = "none";
});

document.getElementById("psw").addEventListener("keyup", function () {
    // Lógica de validação
    const password = document.getElementById("psw").value;

    // Verificar letra minúscula
    const letter = /[a-z]/;
    if (letter.test(password)) {
        document.getElementById("letter").classList.remove("invalid");
    } else {
        document.getElementById("letter").classList.add("invalid");
    }

    // Verificar letra maiúscula
    const capital = /[A-Z]/;
    if (capital.test(password)) {
        document.getElementById("capital").classList.remove("invalid");
    } else {
        document.getElementById("capital").classList.add("invalid");
    }

    // Verificar número
    const number = /[0-9]/;
    if (number.test(password)) {
        document.getElementById("number").classList.remove("invalid");
    } else {
        document.getElementById("number").classList.add("invalid");
    }

    // Verificar comprimento mínimo
    if (password.length >= 8) {
        document.getElementById("length").classList.remove("invalid");
    } else {
        document.getElementById("length").classList.add("invalid");
    }
});
