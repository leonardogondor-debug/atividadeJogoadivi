/*escolhe o valor do sistema*/ 
function valorSistema (min, max) {
  min = Math.ceil(1)
  max = Math.floor(100)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*armazena o valor do sistema*/
const valorSorteado = () => valorSistema(1, 100);
/*chutes do usuario armazena*/
const valorUsuario = () => document.getElementById("chute").value;

/*valisa valor do usuario*/
const valorNegativo = (chute) =>  chute < 1;
const valorMaior = (chute) => chute > 100;

function jogo() {
    const chuteUsuario = valorUsuario();

    if(valorNegativo(chuteUsuario)) {
        alert("valor negativo invalido ");
        return;
    }
    if(valorMaior(chuteUsuario)) {
        alert("valor maior que 100 nao permitido");
        return;
    }
}