

// animation bg
let gambar = document.querySelector('#gambar');
let contoh = document.querySelector('#contoh');

let judul = document.querySelector('#teks');
let subjudul = document.querySelector('#subteks');
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


function getData (){
    contoh.innerHTML = `<img src="img/uxdesign.png" alt="ux designer" data-img-color="dark" >
    <h6 class="mt-4 title-services >UX Design</h6 id="teks"> 
    <p class="sub-title " id="subteks">I will provide a good experience on your website or mobile app.</p>`;
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
// setTimeout(getData, 2500)

//   legacy
// darkModeToggle.addEventListener('click', function(){
//     console.log('oke');
//     if(html.dataset.colorMode === 'dark'){
//         html.dataset.colorMode = 'light'
//         img.src = "img/night.png"
//         image.forEach(m => {
//             m.dataset.imgColor = 'light' 
//         })
//     }else {
//         html.dataset.colorMode = 'dark'
//         img.src = "img/sun.png"
//         // image.dataset.imgColor = 'dark' 
//         image.forEach(m => {
//             m.dataset.imgColor = 'dark' 
//         })

//     }
// })
// $(document).ready(function(){
  
// });
// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('li a');


// const menuLength = menuItem.length
// for ( let i = 0; i <menuLength; i++){
//     if(menuItem[i].href === currentLocation){
//         menuItem[i].className = "nav-link aktif";
//         // menuItem[i].parentNode.className = "nav-item aktif";
       
//     }
  
// }

// back to top

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });
    $('#topBtn').click(function () {
        $('html, body ').animate({
            scrollTop: 0
        }, 800);
    });

   
});
// }

// loader
setTimeout(function () {
    $('.progress-container').fadeToggle();
}, 500);



function set_titik(param, separator) {
    var param_ = param.toString();
    var jumlah = param_.length;
    var split_ = typeof separator === "undefined" ? "." : separator;
    var result = "";
    while (true) {
        if (jumlah > 3) {
            jumlah = jumlah - 3;
            result = split_ + param_.substr(jumlah, 3) + result;
        } else {
            result = param_.substr(0, jumlah) + result;
            break;
        }
    }
    return result;
}


$(document).ready(function(){
    $('#confirmed').append(`<p style="color:#faa307" id="isikonfirm">---</p>`);
    $('#recovered').append(`<p style="color:#2a9d8f" id="isisembuh">---</p>`) ;
    $('#hospital').append(`<p style="color:#f4a261" id="isidirawat">---</p>`) ;
    $('#rip').append(`<p style="color:#e63946" id="isimeninggal">---</p>`) ;

    $('#posIndoPerHari').append(`<p style="color:#faa307" id="positifperhari">---</p>`);
    $('#semIndoPerHari').append(`<p style="color:#2a9d8f" id="sembuhperhari">---</p>`) ;
    $('#rawatIndoPerHari').append(`<p style="color:#f4a261" id="rawatPerHari">---</p>`) ;
    $('#menIndoPerHari').append(`<p style="color:#e63946" id="meninggalperhari">---</p>`) ;
})
// $.getJSON('https://apicovid19indonesia-v2.vercel.app/api/indonesia', function(hasil){
    
//     // dirawat, sembuh, meninggal, positif
//     // var total = 0;
    
//     setTimeout(() => {

//         $('#isikonfirm').html(`<h5 style="color:#000" >Total Positif</h5><p>${set_titik(hasil.positif)}</p>`);
//         $('#isisembuh').html(`<h5 style="color:#000">Total Sembuh</h5><p>${set_titik(hasil.sembuh)}</p>`) ;
//         $('#isidirawat').html(`<h5 style="color:#000">Total Di Rawat</h5><p>${set_titik(hasil.dirawat)}</p>`) ;
//         $('#isimeninggal').html(`<h5 style="color:#000">Total Meninggal</h5><p>${set_titik(hasil.meninggal)}</p>`) ;
// },1000);
// // console.log(hasil[2].attributes);


//     // })
// });

fetch('https://covid19.mathdro.id/api/countries/indonesia/confirmed')
.then(response => 
  {
    console.log(response);
    if(!response.ok){
      throw new Error (response.statusText);
    }
    return response.json();
  }
  )
.then(data => {
  let dataIndo = data[0];
  let isikonfirm = document.querySelector('#isikonfirm');
  let isisembuh = document.querySelector('#isisembuh');
  let isidirawat = document.querySelector('#isidirawat');
  let isimeninggal = document.querySelector('#isimeninggal');

  setTimeout(() => {
    isikonfirm.innerHTML = `<h5 style="color:#000" >Total Positif</h5><p>${set_titik((dataIndo.confirmed))}</p>`;
    isisembuh.innerHTML = `<h5 style="color:#000">Total Sembuh</h5><p>${set_titik(dataIndo.recovered)}</p>`;
    isidirawat.innerHTML = `<h5 style="color:#000">Total Di Rawat</h5><p>${set_titik(dataIndo.active)}</p>`;
    isimeninggal.innerHTML = `<h5 style="colnpm run deploy
    or:#000">Total Meninggal</h5><p>${set_titik(dataIndo.deaths)}</p>`

    
  },1000)
}).catch((error) => {
  alert(error);

});


$.getJSON('https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian', function(data){
    // console.log(data);
    var update = data;
        var panjang = update.length-1;
        
        setTimeout(() => {
        $('#positifperhari').html(`<h5 style="color:#000">Total Positif</h5><p> ${set_titik(update[panjang].positif)}</p>`);
        $('#sembuhperhari').html(`<h5 style="color:#000">Total Sembuh</h5><p>${set_titik(update[panjang].sembuh)}</p>`) ;
        $('#meninggalperhari').html(`<h5 style="color:#000">Total Meninggal</h5><p>${set_titik(update[panjang].meninggal)}</p>`) ;
        $('#rawatPerHari').html(`<h5 style="color:#000">Total Di Rawat</h5><p>${set_titik(update[panjang].dirawat)}</p>`) ;
        $('#update').html(`${update[panjang].tanggal.substr(0,10)}`);
    },1000);

});


$.getJSON('//apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi', function(data){
 var dataAll =data;
 var i=1;
$.each(dataAll, function(i,data){
    $('#isitabel').append(`<tr>
        <td>${i+1}</td>
        <td>${data.provinsi}</td>
        <td>${set_titik(data.kasus)}</td>
        <td>${set_titik(data.sembuh)}</td>
        <td>${set_titik(data.meninggal)}</td>        
    </tr>`);
})
}); 




// vaksi fetch data
fetch('https://cekdiri.id/vaksinasi/')
.then(response => response.json())
.then(data => {
    let coba = data.monitoring;  
    let panjang = coba.length-1;
    let vaksin1 = document.querySelector('#vaksin1');
    let vaksin2 = document.querySelector('#vaksin2');
    let vaksintenagakes1 = document.querySelector('#vaksintenagakes1');
    let vaksintenagakes2 = document.querySelector('#vaksintenagakes2');
    let vaksinpetugaspub1 = document.querySelector('#vaksinpetugaspub1');
    let vaksinpetugaspub2 = document.querySelector('#vaksinpetugaspub2');
    let vaksinlansia1 = document.querySelector('#vaksinlansia1');
    let vaksinlansia2 = document.querySelector('#vaksinlansia2');
    let updatevaksin = document.querySelector('#updatevaksin'); 
    vaksin1.innerHTML= `
    <div class="card  ">
        <div class="card-body  card-case" >
          <h5 class="card-title text-uppercase mb-3">Semua Vaksinasi Dosis 1</h5>
            <h3>${set_titik(coba[panjang].vaksinasi1)} </h3>
            <h6>Dosis telah diberikan</h6>
            <div class="progress" style="height: 30px;">
              <div class="progress-bar" role="progressbar" style="width: ${coba[panjang].cakupan.vaksinasi1};" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.vaksinasi1}</div>
            </div>
            <p>${coba[panjang].cakupan.vaksinasi1} dari ${set_titik(coba[panjang].total_sasaran_vaksinasi)}  telah divaksin</p>
          </div>
      </div>
    `
    vaksin2.innerHTML= `
    <div class="card  ">
        <div class="card-body  card-case" >
          <h5 class="card-title text-uppercase mb-3">Semua Vaksinasi Dosis 2</h5>
            <h3>${set_titik(coba[panjang].vaksinasi2)} </h3>
            <h6>Dosis telah diberikan</h6>
            <div class="progress" style="height: 30px;">
              <div class="progress-bar" role="progressbar" style="width: ${coba[panjang].cakupan.vaksinasi2};" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.vaksinasi2}</div>
            </div>
            <p>${coba[panjang].cakupan.vaksinasi2} dari ${set_titik(coba[panjang].total_sasaran_vaksinasi)}  telah divaksin</p>
          </div>
      </div>
    `
    vaksintenagakes1.innerHTML = `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Tenaga Kesehatan Dosis 1</h5>
        <h3 style="color:#F4A261;">${set_titik(coba[panjang].tahapan_vaksinasi.sdm_kesehatan.sudah_vaksin1)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:100%; background-color:#F4A261;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
        <p>100% dari ${set_titik(coba[panjang].sasaran_vaksinasi_sdmk)}  telah divaksin</p>
      </div>
  </div>
    `
    
    vaksintenagakes2.innerHTML = `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Tenaga Kesehatan Dosis 2</h5>
        <h3 style="color:#F4A261;">${set_titik(coba[panjang].tahapan_vaksinasi.sdm_kesehatan.sudah_vaksin2)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:${coba[panjang].cakupan.sdm_kesehatan_vaksinasi2}; background-color:#F4A261;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.sdm_kesehatan_vaksinasi2}</div>
        </div>
        <p>${coba[panjang].cakupan.sdm_kesehatan_vaksinasi2} dari ${set_titik(coba[panjang].sasaran_vaksinasi_sdmk)}  telah divaksin</p>
      </div>
  </div>
    `
    vaksinpetugaspub1.innerHTML= `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Petugas Publik Dosis 1</h5>
        <h3 style="color:#2A9D8F;">${set_titik(coba[panjang].tahapan_vaksinasi.petugas_publik.sudah_vaksin1)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:${coba[panjang].cakupan.petugas_publik_vaksinasi1}; background-color:#2A9D8F;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.petugas_publik_vaksinasi1}</div>
        </div>
        <p>${coba[panjang].cakupan.petugas_publik_vaksinasi1} dari ${set_titik(coba[panjang].sasaran_vaksinasi_petugas_publik)}  telah divaksin</p>
      </div>
  </div>
    `
    vaksinpetugaspub2.innerHTML= `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Petugas Publik Dosis 2</h5>
        <h3 style="color:#2A9D8F;">${set_titik(coba[panjang].tahapan_vaksinasi.petugas_publik.sudah_vaksin2)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:${coba[panjang].cakupan.petugas_publik_vaksinasi2}; background-color:#2A9D8F;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.petugas_publik_vaksinasi2}</div>
        </div>
        <p>${coba[panjang].cakupan.petugas_publik_vaksinasi2} dari ${set_titik(coba[panjang].sasaran_vaksinasi_petugas_publik)}  telah divaksin</p>
      </div>
  </div>
    `
    vaksinlansia1.innerHTML= `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Lansia Dosis 1</h5>
        <h3 style="color:#77acf1;">${set_titik(coba[panjang].tahapan_vaksinasi.lansia.sudah_vaksin1)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:${coba[panjang].cakupan.lansia_vaksinasi1}; background-color:#77acf1;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.lansia_vaksinasi1}</div>
        </div>
        <p>${coba[panjang].cakupan.lansia_vaksinasi1} dari ${set_titik(coba[panjang].sasaran_vaksinasi_lansia)}  telah divaksin</p>
      </div>
  </div>
    `
    vaksinlansia2.innerHTML= `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Lansia Dosis 2</h5>
        <h3 style="color:#77acf1;">${set_titik(coba[panjang].tahapan_vaksinasi.lansia.sudah_vaksin2)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:${coba[panjang].cakupan.lansia_vaksinasi2}; background-color:#77acf1;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.lansia_vaksinasi2}</div>
        </div>
        <p>${coba[panjang].cakupan.lansia_vaksinasi2} dari ${set_titik(coba[panjang].sasaran_vaksinasi_lansia)}  telah divaksin</p>
      </div>
  </div>
    `
}
    
    );












// function scrollText() {
//   var textJumbo = document.querySelector('.text-jumbo');
//   var textJumboPosition = textJumbo.getBoundingClientRect().top;
//   var textScreen = window.innerHeight;

//   if (textJumboPosition < textScreen) {
//       textJumbo.classList.add('text-view');
//   }


// }
// window.addEventListener('scroll', scrollText);

const nav = document.querySelector('nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight ) {
        nav.classList.add('bg-light');
        nav.classList.add('shadow');
        
        
    } else {
        nav.classList.remove('bg-light');
        nav.classList.remove('shadow');
        
    }
}

