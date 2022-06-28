  // axios({
  //   method: 'GET',
  //   url: 'https://api.webrad.io/data/streams/18/los-40-principales'
  // }).then(res =>  {
  //   document.getElementById('eltop40').src = res.data.result.streams[2].url;
  // })

  // const btntop40 = document.getElementById("btn-top40")

  // btntop40.addEventListener('click', () => {
  //   axios({
  //     method: 'GET',
  //     url: 'https://api.webrad.io/data/streams/18/los-40-principales'
  //   }).then(res => {
  //     document.getElementById('eltop40').src = res.data.result.streams[2].url;
  //     document.getElementById('radiologo').src = "logos/los40.png"
  //   })
  // })


  //PRUEBA

//   class musicPlayer {
//     constructor() {
//       this.play = this.play.bind(this);
//       this.playBtn = document.getElementById('play');
//       this.playBtn.addEventListener('click', this.play);
//       this.controlPanel = document.getElementById('control-panel');
//       this.infoBar = document.getElementById('info');
//       this.status = false;
//     }

//     play() {
//       var audio = document.getElementById('Music');
//       let controlPanelObj = this.controlPanel,
//         infoBarObj = this.infoBar
//       Array.from(controlPanelObj.classList).find(function (element) {
//         return element !== "active" ? controlPanelObj.classList.add('active') : controlPanelObj.classList.remove('active');
//       });

//       Array.from(infoBarObj.classList).find(function (element) {
//         return element !== "active" ? infoBarObj.classList.add('active') : infoBarObj.classList.remove('active');
//       });

//       this.status = !this.status;

//       if (this.status == true) {
//         audio.play();
//       } else {
//         audio.pause();
//       }


//     }

//   }

//   const newMusicPlayer = new musicPlayer();

//   if(Hls.isSupported()) {
//     var video = document.getElementById('Music');
//     var hls = new Hls();
//     hls.loadSource(``);
//     hls.attachMedia(video);
//     hls.on(Hls.Events.MANIFEST_PARSED,function() {
//   });
//  }