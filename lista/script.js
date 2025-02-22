import { append, clear, indexOf, insert, isEmpty, items, remove, removeAt, size } from "./lista.js";

let append_el = document.getElementById("append");
let insert_el = document.getElementById("insert");
let remove_el = document.getElementById("remove");
let removeAt_el = document.getElementById("removeAt");
let indexOf_el = document.getElementById("indexOf");
let isEmpty_el = document.getElementById("isEmpty");
let size_el = document.getElementById("size");
let toString_el = document.getElementById("toString");
let print_el = document.getElementById("print");
let clear_el = document.getElementById("clear");

function exibirArray() {
  const divMeuArray = document.getElementById("meuArray");
  divMeuArray.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    divMeuArray.appendChild(criarDiv(items[i]));
  }
}

exibirArray();

function criarDiv(valor) {
  const novaDiv = document.createElement("div");
  novaDiv.className = "min-w-10 bg-blue-300 shadow-md rounded m-4 p-1";

  const texto = document.createElement("h1");
  texto.className = "text-center";
  texto.innerText = valor;

  novaDiv.appendChild(texto);
  return novaDiv;
}

append_el.addEventListener("click", function () {
  let elemento = document.getElementById("elemento").value;

  append(elemento);

  exibirArray();
});
insert_el.addEventListener("click", function () {
  let posicao = document.getElementById("posicao").value;
  let elemento = document.getElementById("elemento").value;

  insert(posicao, elemento);

  exibirArray();
});
remove_el.addEventListener("click", function () {
  let elemento = document.getElementById("elemento").value;
  remove(elemento);

  exibirArray();
});
removeAt_el.addEventListener("click", function () {
  let posicao = document.getElementById("posicao").value;
  removeAt(posicao);

  exibirArray();
});
indexOf_el.addEventListener("click", function () {
  let elemento = document.getElementById("elemento").value;
  let index = indexOf(elemento);

  alert(index);
});
isEmpty_el.addEventListener("click", function () {
  alert(isEmpty());
});
size_el.addEventListener("click", function () {
  alert(size());
});
toString_el.addEventListener("click", function () {
  alert(items.toString());
});


clear_el.addEventListener("click", function () {
  clear();

  exibirArray();
});