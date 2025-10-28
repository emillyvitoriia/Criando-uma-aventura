const avanca = document.querySelectorAll(' .btn-proximo');

avanca.forEach(buttton =>  {
  button.addEventListener('click', function()  {
     const atual = document.querySelector( ' .ativo');
     const proximoPasso = 'paso1-' + this.getAttribute('data-proximo');

     atual.classList.remove('ativo');
     document.getElementById(proximoPasso).classList.add('ativo');

  })


})