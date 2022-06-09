import {
    playlist
} from "./lib/playlist.js";
import {
    slider
} from "./lib/slider.js";
import {
    play,
    pause,
    audioManager
} from "./lib/audioManager.js";
import {
    volumeManager
} from "./lib/volumeManager.js";

import {
    timeManager
} from "./lib/timeManager.js"

import {
    infoManager
} from "./lib/infoManager.js"


//déclaration varaibles
let currentTrack = 0;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const playPause = document.querySelector(".playPause");

const volumeSlider = document.querySelector(".volume_slider");
//faire avec des click sur les icone
//const volumeDown = document.querySelector(".fa-volume-down");
//const volumeUp = document.querySelector(".fa-volume-up");

const currentTime = document.querySelector(".current-time");
const totalDuration = document.querySelector(".total-duration");

const numMusique = document.querySelector(".numMusique")
const infoTitre = document.querySelector(".title");
const infoDescription = document.querySelector(".description");
const information = document.querySelector(".info");

const sliderDiv = document.querySelector(".slider");
const hammerSlider = new Hammer(sliderDiv);


//les variables à partager entre mes différents modules doivent devenir globales -> globalThis
globalThis.playlist = playlist;
globalThis.currentTrack = currentTrack;
globalThis.next = next;
globalThis.prev = prev;
globalThis.playPause = playPause;
globalThis.volumeSlider = volumeSlider;

//faire avec des click sur les icone
//globalThis.volumeDown = volumeDown;
//globalThis.volumeUp = volumeUp;

globalThis.currentTime = currentTime;
globalThis.totalDuration = totalDuration;

globalThis.numMusique = numMusique;
globalThis.infoTitre = infoTitre;
globalThis.infoDescription = infoDescription;
globalThis.information = information;

globalThis.sliderDiv = sliderDiv;
globalThis.hammerSlider = hammerSlider;

//objet audio
let audio = new Audio(playlist[currentTrack].mp3);
globalThis.audio = audio;

//slider
slider();
//audio
audioManager();
//volume
volumeManager();
//temps
timeManager();
//
infoManager();