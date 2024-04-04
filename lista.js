var input = document.querySelector('#campo')
var btnAdd = document.querySelector('#btn-add')
var sessao =  document.querySelector('#areaLista')
var contador = 0

function adicionar() {
     let valorInput = input.value

     if (valorInput == '' || valorInput == null || valorInput == undefined) {
        alert('[ERRO] Digite uma tarefa')
     } else {
      contador ++
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
        <i id="icone_${contador}" class="bi bi-circle"></i>
        </div>

        <div id="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
        </div>

        <div class="item-botao"><button onclick="deletar(${contador})" class="deletar"><i class="bi bi-file-earmark-x">Deletar</i></button></div>

        </div>`

        sessao.innerHTML += novoItem
        input.value = ''
        input.focus()


     }
}

function deletar(id) {
   var tarefa = document.getElementById(id)
   tarefa.remove()
}

function marcarTarefa(id) {
   let item = document.getElementById(id)
   let classe = item.getAttribute('class')
  

   if (classe == "item") {
      item.classList.add('clicado')
      var icone = document.getElementById('icone_' + id)
      icone.classList.remove('bi-circle')
      icone.classList.add('bi-check-circle-fill')

      item.parentNode.appendChild(item)

   } else {
      item.classList.remove('clicado')
      var icone = document.getElementById('icone_' + id)
      icone.classList.remove('bi-check-circle-fill')
      icone.classList.add('bi-circle')

   }
}





input.addEventListener("keyup", function (event) {
   if (event.keyCode === 13) {
      event.preventDefault()
      adicionar()
   }
  })