    // Função para mostrar o pop-up
    function mostrarPopup(event) {
        event.preventDefault(); // Impede o envio do formulário
  
        var popup = document.getElementById("popup");
        popup.style.display = "block";
      }
  
      // Função para fechar o pop-up
      function fecharPopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "none";
      }