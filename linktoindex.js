function meow() {
  window.alert("IM A COW");
}

function maketag() {
  var meow = document.createElement("SPAN");
  var spantxt = document.createTextNode("MEOW");
  meow.appendChild(spantxt);
  document.body.appendChild(meow);
}
