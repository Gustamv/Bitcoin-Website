function validarForm() {
    // Lógica de validação do formulário aqui
    // ...

    // Exibe o pop-up se o formulário for válido
    mostrarPopup(event);
    return false; // Impede o envio do formulário
}

function mostrarPopup(event) {
    event.preventDefault(); // Impede o envio do formulário
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function fecharPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

document.addEventListener("click", function(event) {
  var popup = document.getElementById("popup");
  if (event.target !== popup && !popup.contains(event.target)) {
      fecharPopup();
  }
});
