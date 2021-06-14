/* Funciones Camara */
async function initiateWebcam() {
    try {
        const dataVideo = await navigator.mediaDevices.getUserMedia(stream);
        video.srcObject = dataVideo;
        await video.play();
        eventsBtn.uploadVideoLive();
    } catch (error) {
        btnInit.style.display = "none";
        infoError.style.display = "";
    }
}

async function Grabar() {
    await navigator.mediaDevices.getUserMedia(stream)
        .then((stream) => {
            video.srcObject = stream;
            video.onloadedmetadata = async function(e) {
                video.play();
                recorder = RecordRTC(stream, {
                    type: 'gif',
                    frameRate: 1,
                    quality: 10,
                    width: 360,
                    hidden: 240,
                    onGifRecordingStarted: function() {
                        console.log('started');
                    },
                });
                recorder.startRecording();
                return recorder;
            };
        })
        .catch(function(err) { console.log(err.name + ": " + err.message); });
}