var letexte = 'Bienvenue sur mon portfolio';
var montimer;
var cmpt = 0;
function typewriter(){
   lelien = document.getElementById('cursor');
   if(cmpt < letexte.length){
      courant = lelien.innerHTML.substring(0, lelien.innerHTML.length -1);
      courant += letexte.charAt(cmpt)+" ";
      lelien.innerHTML = courant;
   }
   else{
      lelien.innerHTML = "";
      cmpt = -1;
   }
   cmpt++;
   setTimeout("typewriter()",100);
}
window.onload = function(){
   typewriter();
}