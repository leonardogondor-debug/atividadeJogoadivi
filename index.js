/*escolhe o valor do sistema*/ 
function valorSistema (min, max) {
  min = Math.ceil(1)
  max = Math.floor(100)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*armazena o valor do sistema*/
const valorSorteado = () => valorSistema(1, 100);

