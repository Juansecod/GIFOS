const eventsBtn = {
    init: () => {
        let li = document.getElementById("fase-1");
        li.classList.add("fase-active");
        document.getElementById("bienvenida").style.display = "none";
        document.getElementById("paso-1").style.display = "";
        btnInit.addEventListener("click", () => eventsBtn.uploadVideoLive());
        initiateWebcam();
    },
    uploadVideoLive: () => {
        let li = document.getElementById("fase-2");
        document.getElementById("fase-1").classList.remove("fase-active");
        li.classList.add("fase-active");
        document.getElementById("paso-1").style.display = "none";
        document.getElementById("paso-2").style.display = "";
        btnInit.style.display = "none";
        btnRecord.style.display = "";
        cronometro.innerHTML = "00:00:00";
        cronometro.style.display = "";
    },
    startRecord: () => {
        btnRecord.style.display = "none";
        btnStopRecord.style.display = "";
        recorder = Grabar();
        startCronometro();
    },
    finishRecord: async() => {
        await recorder.stopRecording();
        stopCronometro();
        let blob = await recorder.getBlob();
        blobSave = URL.createObjectURL(blob);
        imgGif.src = blobSave;
        imgGif.style.display = "";
        video.style.display = "none";
        btnStopRecord.style.display = "none";
        btnSubmit.style.display = "";
        cronometro.innerHTML = "REPETIR CAPTURA";
        cronometro.classList.add("finish");
        cronometro.addEventListener('click', () => eventsBtn.reset());
        imgGif.style.backgroundImage = `url(${blobSave})`;
    },
    submitVideo: async() => {
        cronometro.style.display = "none";
        btnSubmit.style.display = "none";
        document.getElementById("fase-2").classList.remove("fase-active");
        document.getElementById("fase-3").classList.add("fase-active");

        if (body.classList == "dark") {
            imgGif.style.backgroundImage = `linear-gradient(rgba(55, 56, 60, 0.7), rgba(55, 56, 60, 0.7)), url(${blobSave})`;
        } else {
            imgGif.style.backgroundImage = `linear-gradient(rgba(87, 46, 229, 0.7), rgba(87, 46, 229, 0.7)), url(${blobSave})`;
        }
        imgGif.classList.add("spinner");

        let blob = await recorder.getBlob();
        let estado = servicesGiphy.guardarGIFO(blob);
        console.log(estado);
    },
    reset: () => {
        btnRecord.style.display = "";
        btnSubmit.style.display = "none";
        video.style.display = "";
        imgGif.style.display = "none";
        cronometro.innerHTML = "00:00:00";
        cronometro.classList.remove("finish");
        initiateWebcam();
    }
};