function paginar(id) {
    // Remove a classe active da div que está ativa atualmente
    document.querySelector(".item.active").classList.remove("active");
  
    // Adiciona a classe active à div que deve ser ativada
    document.querySelector("#" + id).classList.add("active");
  }
  