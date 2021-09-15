var betuk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var szamok = "23456789"
var resz = ""

function generate() {
    document.getElementById("kodok").innerHTML = "";
    for (let i = 0; i < 500; i++) {
        auto();
        document.getElementById("kodok").innerHTML += resz + "<br>";
    }
}

function realTimeCode() {
    document.getElementById("realTime").innerHTML = "Your codes will look this: ";
    auto();
    document.getElementById("realTime").innerHTML += `<span id=codePreview>${resz}</span>`;
    document.getElementById("codePreview").style.color = "rgb(64, 197, 241)";
    document.getElementById("codePreview").style.fontWeight = "bold";
}

function auto() {
    resz = "";
    for (let j = 0; j < 20; j++) {
        if (j % 5 == 0 && j != 0) {
            resz += "-";
        }
        if (document.getElementById(j).checked) {
            let randomBetu = Math.floor(Math.random() * betuk.length);
            resz += betuk[randomBetu];
        } else if (document.getElementById(j + 20).checked) {
            let randomSzam = Math.floor(Math.random() * szamok.length);
            resz += szamok[randomSzam];
        } else {
            resz += "_";
        }
    }
}

function random() {
    for (let i = 0; i < 20; i++) {
        var array = document.getElementsByName(i);
        var randomNumber = Math.floor(Math.random() * 2);
        array[randomNumber].checked = true;
    }
}

function pieces_text() {
    let genszam = "Number of codes to generate: ";
    var a = document.getElementById("010").value;
    var b = document.getElementById("050").value;
    var c= document.getElementById("0100").value;
    var d = document.getElementById("0250").value;
    var e = document.getElementById("0500").value;
    document.getElementById("darabszamspan").style.color = "rgb(64, 197, 241)";
    document.getElementById("darabszamspan").style.fontWeight = "bold";
    for (j = 0; j < 1; j++) {
        if (document.getElementById("010").checked) {
            document.getElementById("darabszam").innerHTML = `<h4 id="darabszam">${genszam}<span id="darabszamspan" style="color: rgb(64, 197, 241);">${a}</span>`;
        } else if (document.getElementById("050").checked) {
            document.getElementById("darabszam").innerHTML = `<h4 id="darabszam">${genszam}<span id="darabszamspan" style="color: rgb(64, 197, 241);">${b}</span>`;
        } else if (document.getElementById("0100").checked) {
            document.getElementById("darabszam").innerHTML = `<h4 id="darabszam">${genszam}<span id="darabszamspan" style="color: rgb(64, 197, 241);">${c}</span>`;
        } else if (document.getElementById("0250").checked) {
            document.getElementById("darabszam").innerHTML = `<h4 id="darabszam">${genszam}<span id="darabszamspan" style="color: rgb(64, 197, 241);">${d}</span>`;
        } else if (document.getElementById("0500").checked) {
            document.getElementById("darabszam").innerHTML = `<h4 id="darabszam">${genszam}<span id="darabszamspan" style="color: rgb(64, 197, 241);">${e}</span>`;
        }
    }
    /*document.getElementById("darabszam").innerHTML = `<h4 id="darabszam">${genszam}<span id="darabszamspan" style="color: rgb(64, 197, 241);">${x}</span>`;*/
}

function pieces() {
    for (j = 0; j < 1; j++) {
        if (document.getElementById("010").checked) {
            document.getElementById("kodok").innerHTML = "";
            for (let i = 0; i < 10; i++) {
                auto();
                document.getElementById("kodok").innerHTML += resz + "<br>";
            }
        } else if (document.getElementById("050").checked) {
            document.getElementById("kodok").innerHTML = "";
            for (let i = 0; i < 50; i++) {
                auto();
                document.getElementById("kodok").innerHTML += resz + "<br>";
            }
        } else if (document.getElementById("0100").checked) {
            document.getElementById("kodok").innerHTML = "";
            for (let i = 0; i < 100; i++) {
                auto();
                document.getElementById("kodok").innerHTML += resz + "<br>";
            }
        } else if (document.getElementById("0250").checked) {
            document.getElementById("kodok").innerHTML = "";
            for (let i = 0; i < 250; i++) {
                auto();
                document.getElementById("kodok").innerHTML += resz + "<br>";
            }
        } else if(document.getElementById("0500").checked) {
            document.getElementById("kodok").innerHTML = "";
            for (let i = 0; i < 500; i++) {
                auto();
                document.getElementById("kodok").innerHTML += resz + "<br>";
            }
        }
    }
}

function copyToClipboard() {
    const cb = navigator.clipboard;
    const paragraph = document.getElementById('kodok');
    cb.writeText(paragraph.innerText).innerHTML = kodok;
}





/*function test() {
    if (document.getElementById(tiz).checked) {
        document.getElementById("kodok").innerHTML = "";
        for (let i = 0; i < 10; i++) {
            auto();
            document.getElementById("kodok").innerHTML += resz + "<br>";
        }
    }
}*/

/*function copyToClipboard() {
    const str = document.getElementById('kodok').innerText
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}*/

/*function display() {
    var codes = document.getElementById('kodok');

    if (codes.style.display === "none") {
        codes.style.display = "block";
    }
    else {
        codes.style.display = "none"
    }
}*/