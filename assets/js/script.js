'use strict';

/**
 * all music information
 */

const musicData = [
  {
    "songIndex": 0,
    "backgroundImage": "./assets/images/poster-1.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "10 Hits",
    "album": "Not Found",
    "year": 2024,
    "artist": "B Praak",
    "musicPath": "./assets/music/10 hits - B Praak.mp3"
  },
  {
    "songIndex": 1,
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-2.jpg",
    "title": "Abhi Mujh Mein Kahin",
    "album": "Not Found",
    "year": 2024,
    "artist": "Sonu Nigam",
    "musicPath": "./assets/music/Abhi mujh mein kahin -Sonu Nigam.mp3"
  },
  {
    "songIndex": 2,
    "backgroundImage": "./assets/images/poster-3.jpg",
    "posterUrl": "./assets/images/poster-3.jpg",
    "title": "Bajlo Chutir Ghonta",
    "album": "Not Found",
    "year": 2024,
    "artist": "Shilajit Majumdar",
    "musicPath": "./assets/music/Bajlo chutir ghonta -Shilajit Majumdar.mp3"
  },
  {
    "songIndex": 3,
    "backgroundImage": "./assets/images/poster-4.jpg",
    "posterUrl": "./assets/images/poster-4.jpg",
    "title": "Bangla Adhunik Gaan",
    "album": "Not Found",
    "year": 2024,
    "artist": "Shreya Ghoshal",
    "musicPath": "./assets/music/Bangla Adhunik Gaan - Shreya Ghoshal.mp3"
  },
  {
    "songIndex": 4,
    "backgroundImage": "./assets/images/poster-5.jpg",
    "posterUrl": "./assets/images/poster-5.jpg",
    "title": "Behati Hawa Sa Tha O",
    "album": "Not Found",
    "year": 2024,
    "artist": "Shaan And Shantunu Moitra",
    "musicPath": "./assets/music/Behati Hawa sa tha o -Shaan and Shantunu Moitra.mp3"
  },
  {
    "songIndex": 5,
    "backgroundImage": "./assets/images/poster-1.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Chookar Mere Manko",
    "album": "Not Found",
    "year": 2024,
    "artist": "Kishore Kumar",
    "musicPath": "./assets/music/Chookar mere manko - Kishore Kumar.mp3"
  },
  {
    "songIndex": 6,
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Chunriya",
    "album": "Not Found",
    "year": 2024,
    "artist": "Falguni Pathak",
    "musicPath": "./assets/music/Chunriya -Falguni Pathak.mp3"
  },
  {
    "songIndex": 7,
    "backgroundImage": "./assets/images/poster-3.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Ek Bat Batao",
    "album": "Not Found",
    "year": 2024,
    "artist": "B. Praak",
    "musicPath": "./assets/music/Ek Bat Batao -B. Praak.mp3"
  },
  {
    "songIndex": 8,
    "backgroundImage": "./assets/images/poster-4.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Evabeo Fire Asa Jay",
    "album": "Not Found",
    "year": 2024,
    "artist": "Chandabindu",
    "musicPath": "./assets/music/Evabeo Fire asa jay - Chandabindu.mp3"
  },
  {
    "songIndex": 9,
    "backgroundImage": "./assets/images/poster-5.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Golemale Golemale Pirit Koiro Na",
    "album": "Not Found",
    "year": 2024,
    "artist": "Shreya Ghosal",
    "musicPath": "./assets/music/Golemale Golemale Pirit Koiro Na -Shreya Ghosal.mp3"
  },
  {
    "songIndex": 10,
    "backgroundImage": "./assets/images/poster-1.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Holud Pakhi",
    "album": "Not Found",
    "year": 2024,
    "artist": "Cactus",
    "musicPath": "./assets/music/Holud pakhi -Cactus.mp3"
  },
  {
    "songIndex": 11,
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Jaane Kaise",
    "album": "Not Found",
    "year": 2024,
    "artist": "Kk",
    "musicPath": "./assets/music/Jaane kaise -KK.mp3"
  },
  {
    "songIndex": 12,
    "backgroundImage": "./assets/images/poster-3.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Khereyiat",
    "album": "Not Found",
    "year": 2024,
    "artist": "Arijit Singh",
    "musicPath": "./assets/music/Khereyiat -Arijit Singh.mp3"
  },
  {
    "songIndex": 13,
    "backgroundImage": "./assets/images/poster-4.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Khusi Ke Pal",
    "album": "Not Found",
    "year": 2024,
    "artist": "Arijit Singh And Shirley Setia",
    "musicPath": "./assets/music/Khusi ke Pal -Arijit Singh and Shirley Setia.mp3"
  },
  {
    "songIndex": 14,
    "backgroundImage": "./assets/images/poster-5.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Ki Kore Bolbo Tomay",
    "album": "Not Found",
    "year": 2024,
    "artist": "Arijit Singh And Palak",
    "musicPath": "./assets/music/Ki Kore Bolbo Tomay - Arijit Singh and Palak.mp3"
  },
  {
    "songIndex": 15,
    "backgroundImage": "./assets/images/poster-1.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Likhe Jo Khat Tujhe",
    "album": "Not Found",
    "year": 2024,
    "artist": "Mohammed Rafi",
    "musicPath": "./assets/music/Likhe Jo Khat Tujhe -  Mohammed Rafi.mp3"
  },
  {
    "songIndex": 16,
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Maine Dil Se Kaha",
    "album": "Not Found",
    "year": 2024,
    "artist": "Kk",
    "musicPath": "./assets/music/Maine Dil Se Kaha -KK.mp3"
  },
  {
    "songIndex": 17,
    "backgroundImage": "./assets/images/poster-3.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Mayi Teri Chunariya Lehray",
    "album": "Not Found",
    "year": 2024,
    "artist": "Arijit Singh",
    "musicPath": "./assets/music/Mayi teri chunariya lehray -Arijit singh.mp3"
  },
  {
    "songIndex": 18,
    "backgroundImage": "./assets/images/poster-4.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Meri Ma",
    "album": "Not Found",
    "year": 2024,
    "artist": "Shankar Mahadevan",
    "musicPath": "./assets/music/Meri Ma -Shankar Mahadevan.mp3"
  },
  {
    "songIndex": 19,
    "backgroundImage": "./assets/images/poster-5.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Mone Pore Ruby Roy",
    "album": "Not Found",
    "year": 2024,
    "artist": "Arijit Singh",
    "musicPath": "./assets/music/Mone pore ruby roy -Arijit Singh.mp3"
  },
  {
    "songIndex": 20,
    "backgroundImage": "./assets/images/poster-1.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Naina",
    "album": "Not Found",
    "year": 2024,
    "artist": "Arijit Singh",
    "musicPath": "./assets/music/Naina -Arijit Singh.mp3"
  },
  {
    "songIndex": 21,
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Papa Kehta Hain",
    "album": "Not Found",
    "year": 2024,
    "artist": "Udit Narayan",
    "musicPath": "./assets/music/Papa Kehta Hain -Udit Narayan.mp3"
  },
  {
    "songIndex": 22,
    "backgroundImage": "./assets/images/poster-3.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Pehla Nasha",
    "album": "Not Found",
    "year": 2024,
    "artist": "Udit Narayan And Sadhna Sargam",
    "musicPath": "./assets/music/Pehla Nasha -Udit Narayan and Sadhna Sargam.mp3"
  },
  {
    "songIndex": 23,
    "backgroundImage": "./assets/images/poster-4.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Sau Dard",
    "album": "Not Found",
    "year": 2024,
    "artist": "Sonu Nigam",
    "musicPath": "./assets/music/Sau Dard -Sonu Nigam.mp3"
  },
  {
    "songIndex": 24,
    "backgroundImage": "./assets/images/poster-5.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Sei Tumi",
    "album": "Not Found",
    "year": 2024,
    "artist": "Ayub Bachchu",
    "musicPath": "./assets/music/Sei tumi - Ayub Bachchu.mp3"
  },
  {
    "songIndex": 25,
    "backgroundImage": "./assets/images/poster-1.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Shuno Na",
    "album": "Not Found",
    "year": 2024,
    "artist": "Shan",
    "musicPath": "./assets/music/Shuno Na -Shan.mp3"
  },
  {
    "songIndex": 26,
    "backgroundImage": "./assets/images/poster-2.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Tera Chera",
    "album": "Not Found",
    "year": 2024,
    "artist": "Adnan Sami",
    "musicPath": "./assets/music/Tera Chera -Adnan Sami.mp3"
  },
  {
    "songIndex": 27,
    "backgroundImage": "./assets/images/poster-3.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Valolage",
    "album": "Not Found",
    "year": 2024,
    "artist": "Mohiner Ghoragulo",
    "musicPath": "./assets/music/Valolage - Mohiner Ghoragulo.mp3"
  },
  {
    "songIndex": 28,
    "backgroundImage": "./assets/images/poster-4.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Ve Kamleya",
    "album": "Not Found",
    "year": 2024,
    "artist": "Arijit Singh And Shreya Ghosal",
    "musicPath": "./assets/music/Ve Kamleya -Arijit Singh and Shreya Ghosal.mp3"
  },
  {
    "songIndex": 29,
    "backgroundImage": "./assets/images/poster-5.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Wada Raha",
    "album": "Not Found",
    "year": 2024,
    "artist": "Arnab And Shreya Ghosal",
    "musicPath": "./assets/music/Wada Raha - Arnab and Shreya Ghosal.mp3"
  },
  {
    "songIndex": 30,
    "backgroundImage": "./assets/images/poster-1.jpg",
    "posterUrl": "./assets/images/poster-1.jpg",
    "title": "Woh Lamhe Woh Baatein",
    "album": "Not Found",
    "year": 2024,
    "artist": "Atif Aslam",
    "musicPath": "./assets/music/Woh Lamhe Woh Baatein - Atif Aslam.mp3"
  }
];


// Keep track of songs
let songIndex;


/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);