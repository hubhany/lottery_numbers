var przycisk = document.getElementById('button');
var kontener = document.getElementById('container');

przycisk.addEventListener('click', pierwszaFunkcja);

function pierwszaFunkcja(){
  kontener.textContent = 'działa';
}
