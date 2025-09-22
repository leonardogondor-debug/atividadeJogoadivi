/*escolhe o valor do sistema*/
const valorSortiado = () => Math.floor(Math.random() * 100) + 1;
let valorSecreto = valorSortiado();
let tentativa = 10 ;



/*chutes do usuario armazena*/
const valorUsuario = () => document.getElementById("chute").value;

/*valisa valor do usuario*/
const valorNegativo = (chute) =>  chute < 1;
const valorMaior = (chute) => chute > 100;

/**reseta o jogo */
function resetarJogo () {
    valorSecreto = valorSortiado();
    tentativa = 10;
    document.getElementById('resultado').innerHTML='Dicas resultados';
    document.getElementById('tentativas').innerHTML='Numero de tentativas: 10';
    document.getElementById('chute').value = '';
    document.getElementById('chute').disabled = false;
}

function jogo() {
    const chuteUsuario = Number(valorUsuario());
   
    if(valorNegativo(chuteUsuario)) {
        alert("valor negativo invalido ");
        return;
    }
    if(valorMaior(chuteUsuario)) {
        alert("valor maior que 100 nao permitido");
        return;
    }

        if (chuteUsuario === valorSecreto) {
            document.getElementById('resultado').innerHTML=`Voce venceu numero secreto: ${valorSecreto}`;
            document.getElementById('chute').disabled = true;
            setTimeout(resetarJogo, 2000);
            return;
        }
        
        tentativa--;

        if (chuteUsuario !== valorSecreto) {
            if (chuteUsuario < valorSecreto) {
                document.getElementById('resultado').innerHTML='Errado e um valor maior';
                document.getElementById('tentativas').innerHTML=`Numero de tentativas: ${tentativa}`;
                
            }

            else if (chuteUsuario > valorSecreto) {
                document.getElementById('resultado').innerHTML='Errado e um valor menor';
                document.getElementById('tentativas').innerHTML=`Numero de tentativas: ${tentativa}`;
            
            }
        }
        
    if (tentativa == 0) {
        document.getElementById('resultado').innerHTML=`Voce perdeu valor secreto era: ${valorSecreto}`;
        document.getElementById('chute').disabled = true;
        setTimeout(resetarJogo, 2000);
        return;
    }
}