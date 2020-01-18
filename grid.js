function populate() {
  const container = document.createElement('div');
  container.id = "container";

  for (let game = 0; game < games.length; game++) {
    const gameName = games[game];
    
    const cell = document.createElement('div');
    cell.id = "cell";
    
    const image = document.createElement('img');
    image.src = "img/" + getImageName(gameName.toLowerCase());
    cell.appendChild(image);
    
    const title = document.createElement('p');
    title.innerText = gameName;
    cell.appendChild(title);

    container.appendChild(cell);
  }

  document.body.appendChild(container);
}

function getImageName(gameName) {
  let out = "";

  for (var i = 0; i < gameName.length; i++) {
    const code = gameName.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 96 && code < 123)) { // lower alpha (a-z)
      out += gameName.charAt(i);
    }
  }

  return out + ".png";
}