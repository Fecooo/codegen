var betuk = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var szamok = "0123456789"

function generate() {
	document.getElementById("kodok").innerHTML = "";
	for (let i = 0; i < 500; i++) {
		let resz = "";
	
		for (let j = 0; j < 20; j++) {
	
			if (j % 5 == 0 && j != 0) {
				resz += "-";
			}

			if (document.getElementById(j).checked) {
				let randomBetu = Math.floor(Math.random() * betuk.length);
				resz += betuk[randomBetu];
			} else {
				let randomSzam = Math.floor(Math.random() * szamok.length);
				resz += szamok[randomSzam];
			}
		};
	
		document.getElementById("kodok").innerHTML += resz + "<br>";
	}
}

/*for (let i = 0; i < 500; i++) {
    let resz = "";

    for (let j = 0; j < 20; j++) {

        if (j % 5 == 0 && j != 0) {
            resz += "-";
        }

        let randomChar = Math.floor(Math.random() * karakterek.length);
        resz += karakterek[randomChar];
    };

    document.getElementById("kodok").innerHTML += resz + tores;
}*/

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