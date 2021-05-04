var words = [
  "яблоко",
  "цыпленок",
  "корабль",
  "пират",
  "котик",
  "молодец",
  "брат",
  "акробат",
  "чуваш",
  "татарин",
  "космонавт",
];

var alfa = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

var word = "";
function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function encrypt() {
  var cipherString = "";
  word = String(words[randomInteger(0, words.length - 1)]);
  var keyValue = randomInteger(1000, 9999).toString();
  key.insertAdjacentHTML(
    "afterbegin",
    `<div class="keyValue">${keyValue}</div>`
  );

  for (var j = 0; j < word.length; j++) {
    for (var k = 0; k < alfa.length; k++) {
      if (word[j] == alfa[k]) {
        if (j == keyValue.length) {
          keyValue += keyValue;
        }
        if (j == word.length - 1) {
          break;
        }
        if (k + parseInt(keyValue[j]) <= alfa.length) {
          cipherString += alfa[k + parseInt(keyValue[j])];
        } else if (k + parseInt(keyValue[j]) > alfa.length) {
          cipherString += alfa[k + parseInt(keyValue[j]) - alfa.length];
        }
      }
    }
  }
  console.log(cipherString);

  cipher.insertAdjacentHTML(
    "afterbegin",
    `<div class="keyValue">${cipherString}</div>`
  );
}
function correctDecipherment() {
  if (document.getElementById("input_decryption").value == word) {
    document.getElementById("res").innerHTML = "Правильно!";
    document.getElementById("res").style.background = "green";
  } else {
    document.getElementById("res").innerHTML = "Неправильно!";
    document.getElementById("res").style.background = "red";
  }
}
