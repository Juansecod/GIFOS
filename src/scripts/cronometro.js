function startCronometro() {
    if (!isMarch) {
        timeInicial = new Date();
        control = setInterval(displayDOMcronometro, 10);
        isMarch = true;
    }
}

function stopCronometro() {
    if (isMarch) {
        clearInterval(control);
        isMarch = false;
    }
}

function displayDOMcronometro() {
    timeActual = new Date();
    acumularTime = timeActual - timeInicial;
    acumularTime2 = new Date();
    acumularTime2.setTime(acumularTime);
    cc = Math.round(acumularTime2.getMilliseconds() / 10);
    ss = acumularTime2.getSeconds();
    mm = acumularTime2.getMinutes();

    if (cc < 10) { cc = "0" + cc; }
    if (ss < 10) { ss = "0" + ss; }
    if (mm < 10) { mm = "0" + mm; }

    cronometro.innerHTML = mm + " : " + ss + " : " + cc;

}