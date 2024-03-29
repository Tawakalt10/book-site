const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent= document.getElementById('search-content')


    //   ==== MENU SHOW=====//
    // validate if constant exists */
    
    if (searchButton){
        searchButton.addEventListener('click', ()=>{
            searchContent.classList.add('show-search')
        })
    }


    // MENU HIDDEN
    if(searchClose){
        searchClose.addEventListener('click', ()=>{
            searchContent.classList.remove('show-search')
        })
    }
     
    //=========LOGIN======//

    const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent= document.getElementById('login-content')


    //   ==== LOGIN SHOW=====//
    // validate if constant exists */
    
    if (loginButton){
        loginButton.addEventListener('click', ()=>{
            loginContent.classList.add('show-login')
        })
    }


    // SEARCH HIDDEN
    if(loginClose){
        loginClose.addEventListener('click', ()=>{
            loginContent.classList.remove('show-login')
        })
    }


// =========== ADD SHADOW HEADER =========//
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the shadow header
    // 
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)


// ============HOME SWIPPER==========//
   let swiperHome = new Swiper('.home__swiper', {
   loop: true,
   spaceBetween: -24,
   grabCursor:true,
   slidesPerView:'auto',
   centeredSlides:'auto',

   autoplay: {
    delay:3000,
    disableOnInteraction:false,
   },

   breakpoints: {
    1220 :{
        spaceBetween: -32,
    }
   }
  

 })
     
// FEATURED SWIPER

 let swiperFeatured = new Swiper('.featured__swiper', {
   loop: true,
   spaceBetween: 16,
   grabCursor:true,
   slidesPerView:'auto',
   centeredSlides:'auto',

   autoplay: {
    delay:3000,
    disableOnInteraction:false,
   },

   breakpoints: {
    1220 :{
        spaceBetween: 4,
        centeredSlides:false,
    }
   }
  

 })
    