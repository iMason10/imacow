// Script for imacow
// imason10.github.io/imacow
// Idea from asdfmovie10

console.log("Accessed js sucessfully prot1")

function meow() {
  console.log("reached meow")
  window.alert("IM A COW");
}

function meowtxt() {
  console.log("reached meowtxt")
  var para = document.createElement("P");
  var t = document.createTextNode("This is a paragraph");
  para.appendChild(t);
  document.body.appendChild(para); 
}
