var betuk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var szamok = "0123456789"
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
    document.getElementById("realTime").innerHTML += resz;
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

function display() {
	var codes = document.getElementById('kodok');

    if (codes.style.display === "none"){
		codes.style.display = "block";
	}
    else {
        codes.style.display = "none"}
}

function copyToClipboard() {
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
}