const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para escrever um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para exibir algo no console do navegador?",
      respostas: [
        "display()",
        "show()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '3 + 4 + '5' em JavaScript?",
      respostas: [
        "12",
        "345",
        "7",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes é um tipo de dados primitivo em JavaScript?",
      respostas: [
        "object",
        "array",
        "string",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída da expressão 'console.log(typeof(42))'?",
      respostas: [
        "number",
        "string",
        "undefined",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o método em JavaScript usado para converter uma string em um número?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "convertToInt()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para comparar valores e tipos em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '10 % 3' em JavaScript?",
      respostas: [
        "3",
        "1",
        "0.3333",
      ],
      correta: 1
    },
  ];
  
   const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
  //loop de repeticao
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    ///modificando o h3
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for (let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
  //adiciona um filho para o dl
    quizItem.querySelector('dl').appendChild(dt)
  
    }
  
    quizItem.querySelector('dl dt').remove()
    
    ///coloca na tela 
    quiz.appendChild(quizItem)
  }