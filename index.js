/*const naoBtn = document.getElementById("nao");
const simBtn = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

naoBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  naoBtn.style.position = "absolute";
  naoBtn.style.left = `${x}px`;
  naoBtn.style.top = `${y}px`;
});

simBtn.addEventListener("click", function(){
  mensagem.innerText ="Você aceitou  hehehe agora é oficial ta namorando comigo neném, te amo muito <3" 
});




const naoBtn = document.getElementById("nao");
const simBtn = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

let attempts = 0;

naoBtn.addEventListener("mouseover", () => {
  attempts++;
  if (attempts >= 5) {
    mensagem.innerText = "Não adianta, você vai me dar a folga!";
    return;
  }

  const maxX = window.innerWidth - naoBtn.offsetWidth;
  const maxY = window.innerHeight - naoBtn.offsetHeight;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  
  naoBtn.style.position = "absolute";
  naoBtn.style.left = `${x}px`;
  naoBtn.style.top = `${y}px`;
});

simBtn.addEventListener("click", function(){
  mensagem.innerText = "Você aceitou hehe agora é oficial tá namorando comigo neném, te amo muito <3";
  setTimeout(() => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Coloque o link do vídeo desejado aqui
  }, 10000);
});

*/



const naoBtn = document.getElementById("nao");
const simBtn = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");

let attempts = 0;

naoBtn.addEventListener("mouseover", () => {
  attempts++;
  if (attempts >= 2) {
    mensagem.innerText = "precisa ser  4.0 não, pode ser o 3.0";
  }

  const maxX = window.innerWidth - naoBtn.offsetWidth;
  const maxY = window.innerHeight - naoBtn.offsetHeight;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  
  naoBtn.style.position = "absolute";
  naoBtn.style.left = `${x}px`;
  naoBtn.style.top = `${y}px`;
});

simBtn.addEventListener("click", function(){
  mensagem.innerText = "Ate emocionei";
  setTimeout(() => {
    window.location.href = "https://www.yout-ube.com/watch?v=k2C5TjS2sh4"; // Coloque o link do vídeo desejado aqui
  }, 2000);
});
