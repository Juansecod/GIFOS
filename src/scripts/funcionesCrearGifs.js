const eventsBtn = {
    firstClick: () => {
        let li = document.getElementById("fase-1");
        li.classList.add("fase-active");
        document.getElementById("bienvenida").style.display = "none";
        document.getElementById("paso-1").style.display = "";
    },
    secondClick: () => {
        let li = document.getElementById("fase-2");
        document.getElementById("fase-1").classList.remove("fase-active");
        li.classList.add("fase-active")
        document.getElementById("paso-1").style.display = "none";
        document.getElementById("paso-2").style.display = "";
        let boton = document.getElementById("btn-crear-gifo");
        boton.innerHTML = "GRABAR";
        let cronometro = document.getElementById("cronometro");
        cronometro.innerHTML = "00:00:00";
        cronometro.style.display = "";
    },
    thirdClick: () => {
        let boton = document.getElementById("btn-crear-gifo");
        boton.innerHTML = "FINALIZAR";
    },
    fourClick: () => {
        let cronometro = document.getElementById("cronometro");
        let boton = document.getElementById("btn-crear-gifo");
        boton.innerHTML = "SUBIR GIFO";
        cronometro.innerHTML = "REPETIR CAPTURA";
        cronometro.classList.add("finish");
    },
    fiveClick: () => {
        document.getElementById("cronometro").style.display = "none";
        document.getElementById("btn-crear-gifo").style.display = "none";
        document.getElementById("fase-2").classList.remove("fase-active");
        document.getElementById("fase-3").classList.add("fase-active");
    }
};