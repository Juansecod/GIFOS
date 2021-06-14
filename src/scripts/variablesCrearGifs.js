const cronometro = document.getElementById("cronometro");
const video = document.getElementById("video");
const btnInit = document.getElementById("btn-init");
const btnRecord = document.getElementById("btn-start-record");
const btnStopRecord = document.getElementById("btn-finish-record");
const btnSubmit = document.getElementById("btn-submit");
const imgGif = document.getElementById("container-gif");
const infoError = document.getElementById("error");

var stream = { audio: false, video: { width: video.clientWidth, height: video.clientHeight } };


var isMarch = false;
var acumularTime = 0;