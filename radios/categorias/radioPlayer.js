document.body.addEventListener('click', (event) => {
    if (event.target.className === "grid-item") {
        document.getElementById('radioPlayerId').classList.remove('noVisible')
        playPause.click()
    }
})
const playPause = document.getElementById('playPause');

playPause.addEventListener('click', () => {
    if (document.getElementById('playPause').className === "fa-regular fa-circle-play") {
        document.getElementById('playPause').classList.remove('fa-regular', 'fa-circle-play');
        document.getElementById('playPause').classList.add('fa-regular', 'fa-circle-stop');
    } else {
        document.getElementById('playPause').classList.remove('fa-regular', 'fa-circle-stop');
        document.getElementById('playPause').classList.add('fa-regular', 'fa-circle-play');
    }
});

function lacien() {
    document.getElementById("radiosImg").src = "https://musicapp.cvattv.com.ar/img/radios/la100.png";
    document.getElementById("radioName").innerHTML = 'La Cien'
    async function title() {
        const url = 'https://musicapp.cvattv.com.ar/api/cienradios/v2/GetProgramasActualesDeRadios?idsRadios=938&cantidadProgramas=1'
        const res = await fetch(url, {
            mode: 'cors',
            cache: 'no-cache'
        })
        const data = await res.json()
        let element = document.getElementById('radioTitle')
        element.innerHTML = `${data[0].programas[0].nombre}`
    }
    title()
    setInterval(() => {
        title()
    }, 5000);
}

function top40() {
    document.getElementById("radiosImg").src = "https://los40ar00.epimg.net/los40/iconos/v2.x/v1.0/logos/logo_40_principales_menu.png";
    document.getElementById("radioName").innerHTML = 'Top 40'
    async function title() {
        const url = 'https://fapi-top.prisasd.com/api/v2/parrilla/los40_argentina'
        const res = await fetch(url, {
            mode: 'cors',
            cache: 'no-cache'
        })
        const data = await res.json()
        let element = document.getElementById('radioTitle')
        element.innerHTML = `${data.nombre}`
    }
    title()
    setInterval(() => {
        title()
    }, 5000);
}

function radiodisney() {
    document.getElementById("radiosImg").src = "https://lumiere-a.akamaihd.net/v1/images/rdregional1200x1200_11845848.png?region=0%2C0%2C1200%2C1200";
    document.getElementById("radioName").innerHTML = 'Radio Disney'
    async function title() {
        const url = 'https://api.webrad.io/data/playlist/18/radio-disney'
        const res = await fetch(url, {
            mode: 'cors',
            cache: 'no-cache'
        })
        const data = await res.json()
        let element = document.getElementById('radioTitle')
        element.innerHTML = `${data.result[0].track_title} de ${data.result[0].track_artist}`
        console.log(data.result[0].track_title)
    }
    title()
    setInterval(() => {
        title()
    }, 5000);
}

function radiodiez() {
    document.getElementById("radiosImg").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Radio_10_AM_710_%282020%29.png/1200px-Radio_10_AM_710_%282020%29.png";
    document.getElementById("radioName").innerHTML = 'Radio Diez'
    async function title() {
        const url = 'https://api.webrad.io/data/playlist/18/radio-diez'
        const res = await fetch(url, {
            cache: 'no-cache',
            headers: {
                authorization: 'HMAC radioargentina_web:ul8es52sBPswxvjLajmejedpulNduFXziSs9BirXVhI',
                "user-agent": 'PostmanRuntime/7.29.2'
            }
        })
        const data = await res.json()
        let element = document.getElementById('radioTitle')
        element.innerHTML = `${data.result[0].track_title} de ${data.result[0].track_artist}`
        console.log(data.result[0].track_title)
    }
    title()
    setInterval(() => {
        title()
    }, 5000);
}
