

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

const backTop = () =>{
  window.scrollTo({ top: 0, behavior: 'smooth' });

}
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


fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia')
.then(response => 
  {
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
    isikonfirm.innerHTML = `<h5 style="color:#000" >Total Positif</h5><p>${set_titik((data.positif))}</p>`;
    isisembuh.innerHTML = `<h5 style="color:#000">Total Sembuh</h5><p>${set_titik(data.sembuh)}</p>`;
    isidirawat.innerHTML = `<h5 style="color:#000">Total Di Rawat</h5><p>${set_titik(data.dirawat)}</p>`;
    isimeninggal.innerHTML = `<h5 style="color:#000">Total Meninggal</h5><p>${set_titik(data.meninggal)}</p>`
    
  },1000)
}).catch((error) => {
  // let dataIndoErr = data[0];
  let isikonfirmErr = document.querySelector('#isikonfirm');
  let isisembuhErr = document.querySelector('#isisembuh');
  let isidirawatErr = document.querySelector('#isidirawat');
  let isimeninggalErr = document.querySelector('#isimeninggal');
  // alert(error);
  isikonfirmErr.innerHTML = `<p class="text-dark" style="font-size:15px;">Mohon maaf data sedang tidak bisa di akses!</p>`;
  isisembuhErr.innerHTML = `<p class="text-dark" style="font-size:15px;">Mohon maaf data sedang tidak bisa di akses!</p>`;
  isidirawatErr.innerHTML = `<p class="text-dark" style="font-size:15px;">Mohon maaf data sedang tidak bisa di akses!</p>`;
  isimeninggalErr.innerHTML = `<p class="text-dark" style="font-size:10px;">Mohon maaf data sedang tidak bisa di akses!<5p>`
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

}).catch(error => {
  $('#positifperhari').html(`<p class="text-dark" style="font-size:15px;">Mohon maaf data sedang tidak bisa di akses!</p>`);
  $('#sembuhperhari').html(`<p class="text-dark" style="font-size:15px;">Mohon maaf data sedang tidak bisa di akses!</p>`) ;
  $('#meninggalperhari').html(`<p class="text-dark" style="font-size:15px;">Mohon maaf data sedang tidak bisa di akses!</p>`) ;
  $('#rawatPerHari').html(`<p class="text-dark" style="font-size:15px;">Mohon maaf data sedang tidak bisa di akses!</p>`) ;
  $('#update').html(`${update[panjang].tanggal.substr(0,10)}`);
})


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



function handleErrors(data) {
  if (!data.ok) throw new Error(data.error);
  return data;
}

// vaksi fetch data
fetch('https://cekdiri.id/vaksinasi/')
.then(response => {
  if(!response.ok){
    throw new Error (response.statusText);
  }
  return response.json()

})
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
    let updatevaksassin = document.querySelector('#updatevaksin'); 
    let sasaranvaksin1 = document.querySelector('#sasarantotalvaksin1'); 
    let sasaranvaksin2 = document.querySelector('#sasarantotalvaksin2'); 
let masyarakatUmum1 =  document.querySelector('#masyarakat1'); 
let masyarakatUmum2 =  document.querySelector('#masyarakat2'); 
let kelompokremaja1 =  document.querySelector('#remaja1'); 
let kelompokremaja2 =  document.querySelector('#remaja2'); 

    sasaranvaksin1.innerHTML= `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Sasaran Vaksinasi Dosis 1</h5>
        <h3>${set_titik(coba[panjang].total_sasaran_vaksinasi)} </h3>
   
  
      </div>
  </div>
    `
    sasaranvaksin2.innerHTML= `
    <div class="card  ">
        <div class="card-body  card-case" >
          <h5 class="card-title text-uppercase mb-3">Sasaran Vaksinasi Dosis 2</h5>
            <h3>${set_titik(coba[panjang].total_sasaran_vaksinasi)} </h3>
       
      
          </div>
      </div>
    `
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
          <div class="progress-bar" role="progressbar" style="width: ${ coba[panjang].tahapan_vaksinasi.sdm_kesehatan.sudah_vaksin2  > coba[panjang].sasaran_vaksinasi_sdmk ? '100%' : coba[panjang].cakupan.sdm_kesehatan_vaksinasi2 }; background-color:#F4A261;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">  ${ coba[panjang].tahapan_vaksinasi.sdm_kesehatan.sudah_vaksin2  > coba[panjang].sasaran_vaksinasi_sdmk ? '100%' : coba[panjang].cakupan.sdm_kesehatan_vaksinasi2 }</div>
        </div>
        <p> ${ coba[panjang].tahapan_vaksinasi.sdm_kesehatan.sudah_vaksin2  > coba[panjang].sasaran_vaksinasi_sdmk ? '100%' : coba[panjang].cakupan.sdm_kesehatan_vaksinasi2 } dari ${set_titik(coba[panjang].sasaran_vaksinasi_sdmk)}  telah divaksin</p>
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
          <div class="progress-bar" role="progressbar" style="width:100%; background-color:#2A9D8F;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
        <p>100% dari ${set_titik(coba[panjang].sasaran_vaksinasi_petugas_publik)}  telah divaksin</p>
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
          <div class="progress-bar" role="progressbar" style="width:100%; background-color:#2A9D8F;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
        <p>100% dari ${set_titik(coba[panjang].sasaran_vaksinasi_petugas_publik)}  telah divaksin</p>
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
    masyarakatUmum1.innerHTML= `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Masyarakat Umum dosis 1</h5>
        <h3 style="color:#FF0080;">${set_titik(coba[panjang].tahapan_vaksinasi.masyarakat_umum.total_vaksinasi1)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:${coba[panjang].cakupan.masyarakat_umum_vaksinasi1}; background-color:#FF0080;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.masyarakat_umum_vaksinasi1}</div>
        </div>
        <p>${coba[panjang].cakupan.masyarakat_umum_vaksinasi1} dari ${set_titik(coba[panjang].sasaran_vaksinasi_masyarakat_umum)}  telah divaksin</p>
      </div>
  </div>
    `
    masyarakatUmum2.innerHTML= `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Masyarakat Umum dosis 2</h5>
        <h3 style="color:#FF0080;">${set_titik(coba[panjang].tahapan_vaksinasi.masyarakat_umum.total_vaksinasi2)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:${coba[panjang].cakupan.masyarakat_umum_vaksinasi2}; background-color:#FF0080;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.masyarakat_umum_vaksinasi2}</div>
        </div>
        <p>${coba[panjang].cakupan.masyarakat_umum_vaksinasi2} dari ${set_titik(coba[panjang].sasaran_vaksinasi_masyarakat_umum)}  telah divaksin</p>
      </div>
  </div>
    `
    kelompokremaja1.innerHTML= `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Usia 12-17 dosis 1</h5>
        <h3 style="color:#F81CE5;">${set_titik(coba[panjang].tahapan_vaksinasi.kelompok_usia_12_17.total_vaksinasi1)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:${coba[panjang].cakupan.kelompok_usia_12_17_vaksinasi1}; background-color:#F81CE5;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.kelompok_usia_12_17_vaksinasi1}</div>
        </div>
        <p>${coba[panjang].cakupan.kelompok_usia_12_17_vaksinasi1} dari ${set_titik(coba[panjang].sasaran_vaksinasi_kelompok_1217)}  telah divaksin</p>
      </div>
  </div>
    `
    kelompokremaja2.innerHTML= `
    <div class="card  ">
    <div class="card-body  card-case" >
      <h5 class="card-title text-uppercase mb-3">Vaksinasi Usia 12-17 dosis 2</h5>
        <h3 style="color:#F81CE5;">${set_titik(coba[panjang].tahapan_vaksinasi.kelompok_usia_12_17.total_vaksinasi2)} </h3>
        <h6>Dosis telah diberikan</h6>
        <div class="progress" style="height: 30px;">
          <div class="progress-bar" role="progressbar" style="width:${coba[panjang].cakupan.kelompok_usia_12_17_vaksinasi2}; background-color:#F81CE5;;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${coba[panjang].cakupan.kelompok_usia_12_17_vaksinasi2}</div>
        </div>
        <p>${coba[panjang].cakupan.kelompok_usia_12_17_vaksinasi2} dari ${set_titik(coba[panjang].sasaran_vaksinasi_kelompok_1217)}  telah divaksin</p>
      </div>
  </div>
    `
}
    
    ).catch(err => {
      let vaksinErr = document.querySelector('#vaksin1');
      vaksinErr.innerHTML = `<p class="text-left">Mohon maaf data sedang tidak bisa di akses!</p>`
      $})

// api berita
// fetch('https://berita-indo-api.vercel.app/v1/cnn-news/nasional')
// .then(response => 
//   response.json()
// )
// .then(response => {
//   // if(respo)
//   let data = response.data
//   console.log(data)
//   data.forEach(data => { 
    
//     let title = data.title;
    
//     // console.log(data)
//   }
//     )
//   // console.log(data);
// })










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

