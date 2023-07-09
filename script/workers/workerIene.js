addEventListener("message", event => {
    conectaApi();
    setInterval(() => conectaApi(), 5000);
})

async function conectaApi(){
    const conexao = await fetch("https://economia.awesomeapi.com.br/last/JPY-BRL")
    const respostaConexao = await conexao.json();
    postMessage(respostaConexao.JPYBRL);
}