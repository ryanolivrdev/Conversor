var result = document.getElementById("result");
const numbers = {
  eleven: [
    "dez",
    "onze",
    "doze",
    "treze",
    "catorze",
    "quinze",
    "dezesseis",
    "dezessete",
    "dezoito",
    "dezenove",
  ],
  units: [
    "zero",
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
  ],
  dozens: [
    "zero",
    "dez",
    "vinte",
    "trinta",
    "quarenta",
    "cinquenta",
    "sessenta",
    "setenta",
    "oitenta",
    "noventa",
  ],
  hundreds: [
    "zero",
    "cento",
    "duzentos",
    "trezentos",
    "quatrocentos",
    "quinhentos",
    "seiscentos",
    "setecentos",
    "oitocentos",
    "novecentos",
  ],
  thousand: [
    "zero",
    "mil",
    "dois mil",
    "três mil",
    "quatro mil",
    "cinco mil",
    "seis mil",
    "sete mil",
    "oito mil",
    "nove mil",
  ],
};

function start() {
  var inputUser = document.getElementById("input").value;

  if (inputUser === "") {
    alert("Escreva um número!");
    return;
  }

  var elevenNumber = eleven(inputUser[inputUser.length - 1]);
  var unitsNumber = units(inputUser[inputUser.length - 1]);
  var dozensNumber = dozens(inputUser[inputUser.length - 2]);
  var hundredsNumber = hundreds(inputUser[inputUser.length - 3]);
  var thousandNumber = thousand(inputUser[inputUser.length - 4]);
  var tenThousandNumber = dozens(inputUser[inputUser.length - 5]);
  var tenThousandElevenNumber = eleven(inputUser[inputUser.length - 5]);
  var hundredThousandNumber = hundreds(inputUser[inputUser.length - 6]);
  var hundredThousandunitsNumber = units(inputUser[inputUser.length - 4]);

  if (inputUser.length == 1) {
    return (result.innerHTML = `O resultado foi: ${unitsNumber}`);
  }

  if (inputUser.length == 2) {
    if (unitsNumber == "zero") {
      return (result.innerHTML = `O resultado foi: ${dozensNumber}`);
    }
    if (dozensNumber == "dez") {
      return (result.innerHTML = `O resultado foi: ${elevenNumber}`);
    }
    return (result.innerHTML = `O resultado foi: ${dozensNumber} e ${unitsNumber}`);
  }

  if (inputUser.length == 3) {
    if (unitsNumber == "zero" && dozensNumber == "zero") {
      if (hundredsNumber == "cento") {
        return (result.innerHTML = `O resultado foi: cem`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredsNumber}`);
    }
    if (unitsNumber == "zero") {
      return (result.innerHTML = `O resultado foi: ${hundredsNumber} e ${dozensNumber}`);
    }
    if (dozensNumber == "zero") {
      return (result.innerHTML = `O resultado foi: ${hundredsNumber} e ${unitsNumber}`);
    }
    if (dozensNumber == "dez") {
      return (result.innerHTML = `O resultado foi: ${hundredsNumber} e ${elevenNumber}`);
    }
    return (result.innerHTML = `O resultado foi: ${hundredsNumber} e ${dozensNumber} e ${unitsNumber}`);
  }

  if (inputUser.length == 4) {
    if (
      unitsNumber == "zero" &&
      dozensNumber == "zero" &&
      hundredsNumber == "zero"
    ) {
      return (result.innerHTML = `O resultado foi: ${thousandNumber}`);
    }
    if (dozensNumber == "zero" && hundredsNumber == "zero") {
      return (result.innerHTML = `O resultado foi: ${thousandNumber} e ${unitsNumber}`);
    }
    if (dozensNumber == "dez" && hundredsNumber != "zero") {
      return (result.innerHTML = `O resultado foi: ${thousandNumber} e ${hundredsNumber} e ${elevenNumber}`);
    }
    if (dozensNumber == "dez") {
      return (result.innerHTML = `O resultado foi: ${thousandNumber} e ${elevenNumber}`);
    }
    if (unitsNumber == "zero" && dozensNumber == "zero") {
      if (hundredsNumber == "cento") {
        return (result.innerHTML = `O resultado foi: ${thousandNumber} e cem`);
      }
      return (result.innerHTML = `O resultado foi: ${thousandNumber} e ${hundredsNumber}`);
    }
    if (dozensNumber == "zero") {
      return (result.innerHTML = `O resultado foi: ${thousandNumber} e ${hundredsNumber} e ${unitsNumber}`);
    }
    if (unitsNumber == "zero") {
      return (result.innerHTML = `O resultado foi: ${thousandNumber} e ${hundredsNumber} e ${dozensNumber}`);
    }
    return (result.innerHTML = `O resultado foi: ${thousandNumber} e ${hundredsNumber} e ${dozensNumber} e ${unitsNumber}`);
  }

  if (inputUser.length == 5) {
    if (
      unitsNumber == "zero" &&
      dozensNumber == "zero" &&
      hundredsNumber == "zero" &&
      thousandNumber == "zero"
    ) {
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} mil`);
    }
    if (
      dozensNumber == "zero" &&
      hundredsNumber == "zero" &&
      thousandNumber == "zero"
    ) {
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} mil e ${unitsNumber}`);
    }
    if (hundredsNumber == "zero" && thousandNumber == "zero") {
      if (dozensNumber == "dez") {
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} mil e ${elevenNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} mil e ${dozensNumber}`);
    }
    if (unitsNumber == "zero" && dozensNumber == "zero") {
      if (hundredsNumber == "cento") {
        if (thousandNumber == "mil") {
          if (tenThousandNumber == "dez") {
            return (result.innerHTML = `O resultado foi: ${tenThousandElevenNumber} e cem`);
          }
          return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e um mil e cem`);
        }
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} mil e cem`);
      }
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e um mil`);
      }
      if (hundredsNumber != "zero") {
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e ${thousandNumber} e ${hundredsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e ${thousandNumber}`);
    }
    if (
      dozensNumber == "zero" &&
      hundredsNumber != "zero" &&
      thousandNumber != "zero"
    ) {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e um mil ${hundredsNumber} e ${unitsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} ${thousandNumber} ${hundredsNumber} e ${unitsNumber}`);
    }
    if (dozensNumber == "zero" && hundredsNumber != "zero") {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e um mil ${hundredsNumber} e ${unitsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} mil ${hundredsNumber} e ${unitsNumber}`);
    }
    if (dozensNumber == "zero" && thousandNumber !== "zero") {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e um mil e ${unitsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} ${thousandNumber} e ${unitsNumber}`);
    }
    if (dozensNumber == "zero") {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e um mil e ${unitsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} mil e ${unitsNumber}`);
    }
    if (unitsNumber == "zero") {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e um mil ${hundredsNumber} e ${dozensNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} ${thousandNumber} ${hundredsNumber} e ${dozensNumber}`);
    }
    if (dozensNumber == "dez") {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e um mil ${hundredsNumber} e ${elevenNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${tenThousandNumber} mil ${hundredsNumber} e ${elevenNumber}`);
    }
    return (result.innerHTML = `O resultado foi: ${tenThousandNumber} e ${thousandNumber} ${hundredsNumber} e ${dozensNumber} e ${unitsNumber}`);
  }

  if (inputUser.length == 6) {
    if (
      unitsNumber == "zero" &&
      dozensNumber == "zero" &&
      hundredsNumber == "zero" &&
      thousandNumber == "zero" &&
      tenThousandNumber == "zero"
    ) {
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} mil`);
    }
    if (
      dozensNumber == "zero" &&
      hundredsNumber == "zero" &&
      thousandNumber == "zero" &&
      tenThousandNumber == "zero"
    ) {
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${unitsNumber}`);
    }
    if (
      dozensNumber == "zero" &&
      hundredsNumber == "zero" &&
      thousandNumber == "zero"
    ) {
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} mil`);
    }
    if (hundredsNumber == "zero" && thousandNumber == "zero") {
      if (dozensNumber == "dez") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} mil e ${elevenNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} mil e ${dozensNumber}`);
    }
    if (unitsNumber == "zero" && dozensNumber == "zero") {
      if (hundredsNumber == "cento") {
        if (thousandNumber == "mil") {
          if (tenThousandNumber == "dez") {
            return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandElevenNumber} e cem`);
          }
          return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e um mil e cem`);
        }
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} mil e cem`);
      }
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e um mil`);
      }
      if (hundredsNumber != "zero") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e ${thousandNumber} e ${hundredsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e ${thousandNumber}`);
    }
    if (
      dozensNumber == "zero" &&
      hundredsNumber != "zero" &&
      thousandNumber != "zero"
    ) {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e um mil ${hundredsNumber} e ${unitsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} ${thousandNumber} ${hundredsNumber} e ${unitsNumber}`);
    }
    if (dozensNumber == "zero" && hundredsNumber != "zero") {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e um mil ${hundredsNumber} e ${unitsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} mil ${hundredsNumber} e ${unitsNumber}`);
    }
    if (dozensNumber == "zero" && thousandNumber !== "zero") {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e um mil e ${unitsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} ${thousandNumber} e ${unitsNumber}`);
    }
    if (dozensNumber == "zero") {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e${tenThousandNumber} e um mil e ${unitsNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} mil e ${unitsNumber}`);
    }
    if (unitsNumber == "zero") {
      if (thousandNumber == "mil") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e um mil ${hundredsNumber} e ${dozensNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} ${thousandNumber} ${hundredsNumber} e ${dozensNumber}`);
    }
    if (
      dozensNumber == "dez" &&
      hundredThousandunitsNumber != "zero" &&
      tenThousandNumber != "zero"
    ) {
      if (tenThousandNumber == "dez") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandElevenNumber} mil ${hundredsNumber} e ${elevenNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e ${hundredThousandunitsNumber} mil ${hundredsNumber} e ${elevenNumber}`);
    }
    if (dozensNumber == "dez") {
      if (tenThousandNumber == "dez") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} ${tenThousandElevenNumber} mil ${hundredsNumber} e ${elevenNumber}`);
      }
      if (tenThousandNumber == "zero") {
        return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} mil ${hundredsNumber} e ${elevenNumber}`);
      }
      return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} mil ${hundredsNumber} e ${elevenNumber}`);
    }
    return (result.innerHTML = `O resultado foi: ${hundredThousandNumber} e ${tenThousandNumber} e ${thousandNumber} ${hundredsNumber} e ${dozensNumber} e ${unitsNumber}`);
  }

  if (inputUser.length == 7) {
    if (inputUser == 1000000) {
      return (result.innerHTML = "O resultado foi: Um Milhão");
    } else {
      alert("Você estorou o limite do conversor");
    }
  }
}

function eleven(inputUser) {
  for (let i = 0; (i = inputUser); i++) {
    return numbers.eleven[i];
  }
}

function units(inputUser) {
  for (let i = 0; (i = inputUser); i++) {
    return numbers.units[i];
  }
}

function dozens(inputUser) {
  for (let i = 0; (i = inputUser); i++) {
    return numbers.dozens[i];
  }
}

function hundreds(inputUser) {
  for (let i = 0; (i = inputUser); i++) {
    return numbers.hundreds[i];
    1000000;
  }
}

function thousand(inputUser) {
  for (let i = 0; (i = inputUser); i++) {
    return numbers.thousand[i];
  }
}
