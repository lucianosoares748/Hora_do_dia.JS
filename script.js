function carregar() {
  const mensagem = document.getElementById("msg");
  const imagem = document.getElementById("imagem");
  var data = new Date();
  var hora = 8; // var hora = data.getHours();
  mensagem.innerHTML = `Agora são ${hora} horas`;
  if (hora >= 0 && hora < 12) {
    //Bom Dia!
    imagem.src = "manha.jpg";
    document.body.style.background = "#AB3303";
  } else if (hora >= 12 && hora <= 18) {
    //Boa Tarde!
    imagem.src = "tarde.jpg";
    document.body.style.background = "#D9AC4C";
  } else {
    //boa noite!
    imagem.src = "noite.jpg";
    document.body.style.background = "#8E82F5";
  }
}
