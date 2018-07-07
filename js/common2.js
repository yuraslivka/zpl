function fun1(){
  var rtl=document.getElementById('rtl').value;
  var rtr=document.getElementById('rtr').value;
  var rbr=document.getElementById('rbr').value;
  var rbl=document.getElementById('rbl').value;
  var ttl=document.getElementById('ttl');
  var ttr=document.getElementById('ttr');
  var tbr=document.getElementById('tbr');
  var tbl=document.getElementById('tbl');

  var block=document.getElementById('block');

  ttl.value=rtl;
  ttr.value=rtr;
  tbr.value=rbr;
  tbl.value=rbl;

  block.style.borderRadius=rtl+'px '+rtr +'px '+rbr +'px '+rbl+ 'px ';
}



document.getElementById('nav').onmouseover = function(event){
  var target = event.target;
  if(target.className == 'menu-item'){
    var s = target.getElementsByClassName('submenu');
    closeMenu();
    s[0].style.display='block';
  }

}

document.onmouseover=function(event){
  var target = event.target;
  console.log(event.target);
  if (target.className!='menu-item' && target.className!='submenu'){
    closeMenu();
  }
}

function closeMenu() {
  var menu = document.getElementById('nav');
  var subm = document.getElementsByClassName('submenu');
  for (var i=0; i < subm.length; i++){
    subm[i].style.display="none";
  }
}

