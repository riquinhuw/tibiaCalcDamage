var btnCalcular = document.getElementById("btnCalcular");
btnVoltar.setAttribute('onclick','calcularDano()');

function calcularDano() {
  var tipo = document.getElementById("tipos");
  var combate = document.getElementById("combate");
  var skill = document.getElementById("skill");
  var atk = document.getElementById("atk");
  var level = document.getElementById("level");
  var resposta = document.getElementById("resposta");

  var c = tipo.options[tipo.selectedIndex].value;
  var f = combate.options[combate.selectedIndex].value;
  var s = skill.value;
  var a = atk.value;
  var l = level.value;

  resposta.innerHTML= "Seu dano será:"+(c*f*s*a+(l/5));
  
}