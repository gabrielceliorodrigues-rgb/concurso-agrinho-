// ====================================
// PROJETO AGRINHO 2026
// Autor: Gabriel Célio Rodrigues
// Tema: Agro Forte, Futuro Sustentável
// ====================================

// ====================================
// MENSAGENS MOTIVACIONAIS
// ====================================

// Lista de frases sustentáveis
const frases = [
"🌱 Cada árvore plantada ajuda a construir um futuro melhor.",
"💧 Economizar água hoje garante recursos para amanhã.",
"🚜 Tecnologia e sustentabilidade podem caminhar juntas.",
"🌳 Preservar o meio ambiente fortalece o agronegócio.",
"🌎 Produzir com responsabilidade protege as futuras gerações."
];

// Captura botão e área de mensagem
const mensagemBtn = document.getElementById("mensagemBtn");
const mensagem = document.getElementById("mensagem");

// Evento de clique
mensagemBtn.addEventListener("click", () => {

```
const indice = Math.floor(Math.random() * frases.length);

mensagem.textContent = frases[indice];
```

});

// ====================================
// MODO ESCURO
// ====================================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

```
document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

    darkModeBtn.textContent = "☀️ Modo Claro";

}else{

    darkModeBtn.textContent = "🌙 Modo Escuro";

}
```

});

// ====================================
// CALCULADORA DE IMPACTO AMBIENTAL
// ====================================

const calcularBtn = document.getElementById("calcularBtn");

calcularBtn.addEventListener("click", () => {

```
let quantidadeArvores =
    Number(document.getElementById("arvores").value);

const resultado =
    document.getElementById("resultadoCalc");

if(quantidadeArvores <= 0){

    resultado.textContent =
        "Digite uma quantidade válida de árvores.";

    resultado.style.color = "red";

    return;

}

let absorcaoCO2 =
    quantidadeArvores * 22;

resultado.textContent =
    `🌳 ${quantidadeArvores} árvores podem absorver aproximadamente ${absorcaoCO2} kg de CO₂ por ano.`;

resultado.style.color = "green";
```

});

// ====================================
// QUIZ SUSTENTÁVEL
// ====================================

const respostas =
document.querySelectorAll(".resposta");

const resultadoQuiz =
document.getElementById("resultadoQuiz");

respostas.forEach((botao) => {

```
botao.addEventListener("click", () => {

    if(botao.dataset.correta === "true"){

        resultadoQuiz.textContent =
            "✅ Correto! A rotação de culturas ajuda a preservar o solo.";

        resultadoQuiz.style.color =
            "green";

    }else{

        resultadoQuiz.textContent =
            "❌ Resposta incorreta. Tente novamente.";

        resultadoQuiz.style.color =
            "red";

    }

});
```

});

// ====================================
// FRASE AUTOMÁTICA CONFORME HORÁRIO
// ====================================

const horaAtual = new Date().getHours();

if(horaAtual < 12){

```
console.log(
    "Bom dia! Produzir alimentos com sustentabilidade é investir no futuro."
);
```

}else if(horaAtual < 18){

```
console.log(
    "Boa tarde! A agricultura sustentável fortalece o campo e preserva a natureza."
);
```

}else{

```
console.log(
    "Boa noite! O futuro sustentável começa com ações conscientes hoje."
);
```

}

// ====================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ====================================

const cards =
document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

```
cards.forEach((card) => {

    const topoTela =
        window.innerHeight;

    const topoCard =
        card.getBoundingClientRect().top;

    if(topoCard < topoTela - 100){

        card.style.opacity = "1";
        card.style.transform =
            "translateY(0)";

    }

});
```

});

// Configuração inicial dos cards
cards.forEach((card) => {

```
card.style.opacity = "0";
card.style.transform =
    "translateY(40px)";

card.style.transition =
    "0.6s";
```

});

// ====================================
// INFORMAÇÃO NO CONSOLE
// ====================================

console.log(
"Projeto Agrinho 2026 carregado com sucesso."
);
