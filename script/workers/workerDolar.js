async function conectaApi(){
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.USDBRL);
}

addEventListener("message", () => {
    conectaApi();
    setInterval(() => conectaApi(), 5000)
})



/* Concorrência versus Paralelismos
O Paralelismo se configura como o contrário do modelo de Concorrência que vimos até agora. Neste último(concorrância), ocorre uma ação por vez, em uma ordem que não foi pré-definida. Já no modelo novo(paralelismo), é possível inserir tarefas que acontecem simultaneamente, ou seja, em paralelo. */