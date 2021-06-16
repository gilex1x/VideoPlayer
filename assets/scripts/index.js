import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './Plugins/AutoPlay.js';

const video = document.querySelector('video');
const btnPlay = document.querySelector('.buttonPlay');
const btnMute = document.querySelector('.buttonMute');
const player = new MediaPlayer({element: video, plugins: [new AutoPlay()]})
btnPlay.onclick=()=>player.togglePlayer();
btnMute.onclick=()=>player.toggleMute();

/*
->  En algunos navegadores no esta permitido el auplauy, en el caso de edge
    si es posible 
*/ 