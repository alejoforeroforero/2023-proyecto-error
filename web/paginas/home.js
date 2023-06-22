function pintarHome(section) {
  section.innerHTML = "";

  var div = cE("div", section);
  div.className = "parent-container";

  const sArray1 = shuffle(imgsArray);

  for (let img of sArray1) {
    let cuadrado = new Cuadrado();
    cuadrado.imgId = img.id;
    cuadrado.pintar(div);
    cuadrados.push(cuadrado);
  }

  const sArray2 = shuffle(imgsArray);

  for (let img of sArray2) {
    let cuadrado = new Cuadrado();
    cuadrado.imgId = img.id;
    cuadrado.pintar(div);
  }

  const sArray3 = shuffle(imgsArray);

  for (let img of sArray3) {
    let cuadrado = new Cuadrado();
    cuadrado.imgId = img.id;
    cuadrado.pintar(div);
  }

  const sArray4 = shuffle(imgsArray);

  for (let img of sArray4) {
    let cuadrado = new Cuadrado();
    cuadrado.imgId = img.id;
    cuadrado.pintar(div);
  }

  const sArray5 = shuffle(imgsArray);

  for (let img of sArray5) {
    let cuadrado = new Cuadrado();
    cuadrado.imgId = img.id;
    cuadrado.pintar(div);
  }

  const sArray6 = shuffle(imgsArray);

  for (let img of sArray6) {
    let cuadrado = new Cuadrado();
    cuadrado.imgId = img.id;
    cuadrado.pintar(div);
  }

  const sArray7 = shuffle(imgsArray);

  for (let img of sArray7) {
    let cuadrado = new Cuadrado();
    cuadrado.imgId = img.id;
    cuadrado.pintar(div);
  }
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
