// axios({
//     method: 'GET',
//     url: 'https://cors-solucion.herokuapp.com/https://la100.cienradios.com/player/la100/'
// }).then(res => {
//     console.time("tiempo")
//     let responseTitle = res.request.response;
//     responseTitle = responseTitle.split(" ")

//     responseTitle.map(element => {
//         if (element.includes("showTitle")){
//             let respuestaTitulo = document.getElementById("responseTitle")
//             let index = responseTitle.indexOf(element)
//             let responseTitle2 = responseTitle[index]
//             let contenidoTitle = responseTitle2.substring(responseTitle2.indexOf(">")+1, responseTitle2.indexOf("<"))
//             respuestaTitulo.textContent = contenidoTitle;
//             return
//         }
//     })
//     console.timeEnd("tiempo");
// })










// async function title(){
//     const url = "https://cors-solucion.herokuapp.com/https://la100.cienradios.com/player/la100/"
//     const res = await fetch(url);
//     const html = await res.text();

//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");
//     const h3 = doc.querySelector(".showTitle")
//     const responseTitle = document.getElementById("responseTitle")
//     responseTitle.textContent = h3.textContent
//     mediaSession(responseTitle);
//   }
//   title()

// async function schedule(){
//   const url = "https://cors-solucion.herokuapp.com/https://la100.cienradios.com/player/la100/"
//   const res = await fetch(url);
//   const html = await res.text();

//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, "text/html");
//   const h3 = doc.querySelector(".showSchedule")
//   const responseSchedule = document.getElementById("responseSchedule")
//   responseSchedule.textContent = h3.textContent
// }

// schedule()

 async function title() {
  const url = 'https://musicapp.cvattv.com.ar/api/cienradios/v2/GetProgramasActualesDeRadios?idsRadios=938&cantidadProgramas=1'

  const res = await fetch(url)

  const data = await res.json()
  
  let element = document.getElementById('responseTitle')
  
  element.innerHTML = `${data[0].programas[0].nombre}`
}
title()

  async function schedule(){
    const url = "https://cors-solucion.herokuapp.com/https://la100.cienradios.com/player/la100/"
    const res = await fetch(url);
    const html = await res.text();
  
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const h3 = doc.querySelector(".showSchedule")
    const responseSchedule = document.getElementById("responseSchedule")
    responseSchedule.textContent = h3.textContent
  }

schedule()

setInterval(() => {
  title()
}, 20000);








// if ('mediaSession' in navigator) {
//   navigator.mediaSession.metadata = new window.MediaMetadata({  
//     title: 'La Cien',
//     artist: '99.9 y vos... La Cien',
//     album: '99.9 y vos... La Cien',
//     artwork: [
//       { src: 'https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/CZJMM4BJVRFANO4VGMMYWSTEVE.png',   type: 'image/png' },]

//   });
// }

// async function analyze(){
//   const url = "https://cors-solucion.herokuapp.com/https://la100.cienradios.com/player/la100/"
//   const res = await fetch(url);
//   const html = await res.text();

//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, "text/html");
//   const h3 = doc.querySelector(".showSchedule")
//   const responseTitle = document.getElementById("responseTitle")
//   responseTitle.textContent = h3.textContent
//   mediaSession(responseTitle);
// }
// analyze()