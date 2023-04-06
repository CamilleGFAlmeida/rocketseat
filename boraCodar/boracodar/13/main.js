// Mascarando o número de CVV 
IMask(document.querySelector("#cc-cvv"), {
    mask: "0000",
  })

  // Mascarando o número do titular 
  IMask(document.querySelector("#cc-number"), {
    mask: "0000 0000 0000 0000",
  })

  // Mascarando a validade do cartão 
  IMask(document.querySelector("#cc-validity"), {
    mask: "MM{/}YY",
    blocks: { // para que o navegador entenda qual é o formato que deve ser aceito 
      MM: {
        mask: IMask.MaskedRange, // biblioteca do Imask  
        from: 1,
        to: 12,
      },
      YY: {
        mask: IMask.MaskedRange,
        from: String(new Date().getFullYear()).slice(2), // Slice só é aceito com String  
        to: String(new Date().getFullYear() + 10).slice(2), // o limite máximo de cartões é até 10 anos, então fizemos o slice para "cortar" os ultimos dois digitos do ano e agora ele aceita cartões a partir de 2023 até 2033  
      },
    },
  })