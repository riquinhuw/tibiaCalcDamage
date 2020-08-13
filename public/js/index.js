var btnCalcular = document.getElementById("btnCalcular");
btnVoltar.setAttribute('onclick','calcularDano()');

function calcularDano() {
  var tipo = document.getElementById("tipos");
  var combate = document.getElementById("combate");
  var skill = document.getElementById("skill");
  var atk = document.getElementById("atk");
  var level = document.getElementById("level");
  var armaLv = document.getElementById("armaLv");
  var resposta = document.getElementById("resposta");

  var c = tipo.options[tipo.selectedIndex].value;
  var f = combate.options[combate.selectedIndex].value;
  var s = skill.value;
  var a = atk.value;
  var l = level.value;
  var al = armaLv.value;

  if(l>al){//Fator requerimento = 1
    resposta.innerHTML= "Seu dano será:"+(c*f*s*a*1+(l/5));
  }else{
    if (Math.abs(al-l)>50) {//Fator requerimento = 1
      resposta.innerHTML= "Seu dano será:"+(c*f*s*a*0+(l/5));
    } else {
      resposta.innerHTML= "Seu dano será:"+(c*f*s*a*(1-0.02*Math.abs(al-l))+(l/5));
    }
  }


  
}