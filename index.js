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
    let valorJogo = valorSorteado();
    alert(valorJogo);
    
    /*estrutura de repeticao*/
    while (cont >= 1) {
    /*se valor errado nega jogada  */
    if(valorNegativo(chuteUsuario)) {
        alert("valor menor que 1 nao permitido");
        continue;
    }
    if(valorMaior(chuteUsuario)) {
        alert("valor maior que 100 nao permitido");
        continue;
    }
    
    /*checa vitoria da dicas */
    if(valorJogo == chuteUsuario) {
        document.getElementById('resultado').innerHTML="Voce acertou.";
        cont--
        document.getElementById('tentativas').innerHTML=`Numero de tentativas: ${cont}`;
        break;
    }
    else if(valorJogo != chuteUsuario) {
        if(valorJogo > chuteUsuario) {
            document.getElementById('resultado').innerHTML="E um valor maior";
            cont--
            document.getElementById('tentativas').innerHTML=`Numero de tentativas: ${cont}`;
        }
        else if(valorJogo < chuteUsuario) {
            document.getElementById('resultado').innerHTML="E um valor menor";
            cont--
            document.getElementById('tentativas').innerHTML=`Numero de tentativas: ${cont}`;
        }
    }

    if(cont == 1) {
        alert('sua antativas acabaram');
        break;
    }
    }
    
}