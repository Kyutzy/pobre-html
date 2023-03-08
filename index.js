function pesquisar(){
    let G_TOKEN = nao
    let nome = document.getElementById("texto").value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://youtube.googleapis.com/youtube/v3/search?q=${nome}&part=snippet&key=${G_TOKEN}`, true);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status == 200) {
            let resposta = xhr.response
            let respostaObjeto = JSON.parse(resposta)
            console.log(respostaObjeto)
            let video = respostaObjeto.items[0].id.videoId
            console.log(video)
            let url = `https://www.youtube.com/embed/${video}`
            document.getElementById("videosuper").src = url
        }
    }
}