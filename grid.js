function initGrid() {
  games.sort(compareGames);

  const container = document.getElementById("container");
  for (const game in games) {
    container.appendChild(createCell(games[game]));
  }
}

function compareGames(a, b) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}

function createCell(game) {
  const imageName = getImageName(game.title.toLowerCase());

  const link = document.createElement("a");
  link.href = imageName;
  link.target = "_blank";

  const image = document.createElement("img");
  image.src = imageName;

  link.appendChild(image);

  const title = document.createElement("p");
  title.className = "title";
  title.innerText = game.title;

  const genre = document.createElement("p");
  genre.innerText = game.genre.NAME;

  const cell = document.createElement("div");
  cell.className = "cell";
  cell.appendChild(link);
  cell.appendChild(title);
  cell.appendChild(genre);
  return cell;
}

function getImageName(gameName) {
  let imageName = "img/";

  for (const i in gameName) {
    const code = gameName.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
      (code > 96 && code < 123)) { // lower alpha (a-z)
      imageName += gameName.charAt(i);
    }
  }

  return imageName + ".png";
}