import { LinkedList } from './linkedList.js'


let append_el = document.getElementById("append");
let insert_el = document.getElementById("insert");
let remove_el = document.getElementById("remove");
let removeAt_el = document.getElementById("removeAt");
let indexOf_el = document.getElementById("indexOf");
let isEmpty_el = document.getElementById("isEmpty");
let size_el = document.getElementById("size");
let toString_el = document.getElementById("toString");
let clear_el = document.getElementById("clear");

const lista = new LinkedList()

lista.append("Igor")
lista.append("João")
lista.append("Bia")

function exibirArray() {
  const divMeuArray = document.getElementById("meuArray");
  const items = lista.toArray();

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

  lista.append(elemento);

  exibirArray();
});
insert_el.addEventListener("click", function () {
  let posicao = document.getElementById("posicao").value;
  let elemento = document.getElementById("elemento").value;

  lista.insert(posicao, elemento);

  exibirArray();
});
remove_el.addEventListener("click", function () {
  let elemento = document.getElementById("elemento").value;
  lista.remove(elemento);

  exibirArray();
});
removeAt_el.addEventListener("click", function () {
  let posicao = document.getElementById("posicao").value;
  lista.removeAt(posicao);

  exibirArray();
});
indexOf_el.addEventListener("click", function () {
  let elemento = document.getElementById("elemento").value;
  let index = lista.indexOf(elemento);

  alert(index);
});
isEmpty_el.addEventListener("click", function () {
  alert(lista.isEmpty());
});
size_el.addEventListener("click", function () {
  alert(lista.size());
});

console.log(lista.toString());


clear_el.addEventListener("click", function () {
  lista.clear();

  exibirArray();
});