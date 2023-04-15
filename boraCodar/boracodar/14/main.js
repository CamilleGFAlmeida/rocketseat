const dropArea = document.querySelector(".drag-files") // busca no documento/layout a classe drag-files 

dropArea.addEventListener("dragover", () => { // função que percebe qualquer tipo de alteração na caixa, a alteração recebe o nome "dragover"
  dropArea.classList.add("dragover") // sempre que for feito upload a cor da caixa muda 
})

dropArea.addEventListener("dragleave", () => { // quando sair do dropArea 
  dropArea.classList.remove("dragover") // remove a cor   
})
        