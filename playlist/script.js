const playlistList = document.getElementById('playlist-list');
const addMusicBtn = document.getElementById('add-music-btn');
const removeMusicBtn = document.getElementById('remove-music-btn');
const playMusicBtn = document.getElementById('play-music-btn');
const musicForm = document.getElementById('music-form');
const titleInput = document.getElementById('title');
const artistInput = document.getElementById('artist');
const submitMusicBtn = document.getElementById('submit-music-btn');
const insertIndexInput = document.getElementById('insert-index');
const removeIndexInput = document.getElementById('remove-index');

let playlist = [];


function addMusic(musica) {
  if (musica && musica.titulo && musica.artista) {
    playlist.push(musica);
    renderPlaylist();
  } else {
    console.error("Música inválida");
  }
}

function insertMusic(musica, index) {
  if (musica && musica.titulo && musica.artista && index >= 0 && index <= playlist.length) {
    playlist.splice(index, 0, musica);
    renderPlaylist();
  } else {
    console.error("Índice inválido ou música inválida");
  }
}


function removeMusic() {
  if (playlist.length > 0) {
    playlist.shift();
    renderPlaylist();
  } else {
    console.error("Playlist vazia");
  }
}


function removeMusicAtIndex(index) {
  if (index >= 0 && index < playlist.length) {
    playlist.splice(index, 1);
    renderPlaylist();
  } else {
    console.error("Índice inválido");
  }
}

function playMusic() {
  if (playlist.length > 0) {
    const musica = playlist[0];
    console.log(`Tocando: ${musica.titulo} - ${musica.artista}`);
  } else {
    console.error("Playlist vazia");
  }
}


function renderPlaylist() {
  if (playlist.length > 0) {
    playlistList.innerHTML = '';
    playlist.forEach((musica) => {
      const li = document.createElement('li');
      li.textContent = `${musica.titulo} - ${musica.artista}`;
      playlistList.appendChild(li);
    });
  } else {
    console.error("Playlist vazia");
  }
}


submitMusicBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const musica = {
    titulo: titleInput.value,
    artista: artistInput.value
  };
  addMusic(musica);
  titleInput.value = '';
  artistInput.value = '';
});

document.getElementById('insert-btn').addEventListener('click', () => {
  const musica = {
    titulo: titleInput.value,
    artista: artistInput.value
  };
  const index = parseInt(insertIndexInput.value);
  insertMusic(musica, index);
  titleInput.value = '';
  artistInput.value = '';
  insertIndexInput.value = '';
});

document.getElementById('remove-btn').addEventListener('click', () => {
  const index = parseInt(removeIndexInput.value);
  removeMusicAtIndex(index);
  removeIndexInput.value = '';
});

removeMusicBtn.addEventListener('click', () => {
  removeMusic();
});

playMusicBtn.addEventListener('click', () => {
  playMusic();
});