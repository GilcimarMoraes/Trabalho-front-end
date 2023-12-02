function redirecionar(pagina) {
    if (pagina === '') {
      pagina = 'home.html';
    }
    window.location.href = pagina;
}
  