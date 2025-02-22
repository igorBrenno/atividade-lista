let items = ["Igor", "Bia"];

function append(element) {
  items.push(element);
}


function isEmpty() {
  return size() === 0;
}

function size() {
  return items.length;
}

function toString() {
  return items.join(", ");
}

function print() {
  for (const item of items) {
    console.log(item);
  }
}

function insert(position, element) {
  for (let i = size(); i > position; i--) {
    items[i] = items[i - 1];
  }

  items[position] = element;
}

function remove(element) {
  for (let i = 0; i < size(); i++) {
    if (items[i] === element) {
      for (let j = i; j < size() - 1; j++) {
        items[j] = items[j + 1];
      }
      items.pop();
      break;
    }
  }
}

function removeAt(position) {
  for (let i = position; i < size(); i++) {
    items[i] = items[i + 1];
  }

  items.length--;
}

function indexOf(element) {
  for (let i = 0; i < size(); i++) {
    if (items[i] === element) return i;
  }

  return -1;
}

function clear() {
  items = [];
}

export {
  items,
  isEmpty,
  size,
  append,
  indexOf,
  toString,
  print,
  insert,
  removeAt,
  remove,
  clear
}