function carregar() {
  const mensagem = document.getElementById("msg");
  const imagem = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  if (hora >= 0 && hora < 12) {
    //Bom Dia!
    imagem.src = "manha.jpg";
    document.body.style.background = "#AB3303";
    mensagem.innerHTML = `Agora são ${hora} horas. Boa Dia!`;
  } else if (hora >= 12 && hora <= 18) {
    //Boa Tarde!
    imagem.src = "tarde.jpg";
    document.body.style.background = "#D9AC4C";
    mensagem.innerHTML = `Agora são ${hora} horas. Boa Tarde!`;
  } else {
    //boa noite!
    imagem.src = "noite.jpg";
    document.body.style.background = "#8E82F5";
    mensagem.innerHTML = `Agora são ${hora} horas. Boa Noite!`;
  }
}
