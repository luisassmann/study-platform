// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
  // Duplicar os campos
  var newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
  // Limpar os campos
  const fields = newFieldContainer.querySelectorAll("input")
  fields.forEach(function(field) {
    field.value = ""
  })
  // Colocar na page
  document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
