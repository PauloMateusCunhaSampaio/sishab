window.addEventListener('DOMContentLoaded', function() {
    // Código para carregar o conteúdo do destaque dinamicamente
    var destaqueContainer = document.getElementById('destaque-container');
  
    // Faz uma requisição para a API ou servidor para obter o conteúdo do destaque
    // Exemplo simplificado apenas para ilustrar o conceito
    fetch('https://api.example.com/destaque')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        // Insere o conteúdo recebido no contêiner
        destaqueContainer.innerHTML = data.conteudo;
      })
      .catch(function(error) {
        console.error('Erro ao carregar o destaque:', error);
      });
  });
  