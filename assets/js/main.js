/**
* Template Name: Day - v4.9.1
* Template URL: https://bootstrapmade.com/day-multipurpose-html-template-for-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }


  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  //clickable divs
  var myFunction = function () {
    let span = document.getElementsByClassName("radioTag");
    let image = document.getElementById("img-fluid");
    let svg = document.getElementById("savage");
    let canvas = document.getElementById("knvs");
    for (let i = 0; i < tab.length; i++) {
      if (this == tab[i]) {
        if (this == tab[0]) {
          image.src = "";
          image.src = "assets/img/tanjun-white.png";
          canvas.style.display = "none";
          image.style.visibility = "visible";
          svg.style.visibility = "hidden";
        }
        else if (this == tab[1]) {
          image.src = "";
          image.src = "assets/img/tanjun-black.png";
          svg.style.visibility = "visible";
          canvas.style.display = "none";
          image.style.visibility = "visible";
          console.log("Vsak dan je lahko moj zadnji");
        }

        else if (this == tab[2]) {
          image.src = "";
          canvas.style.display = "flex";
          svg.style.visibility = "hidden";
          image.style.visibility = "hidden";
          console.log("moja biba je majhna kar me zalosti");
          canvas.height=388;
          canvas.width=508;
          const ctx = canvas.getContext('2d');
          let xoff=1;
          let yoff=1;
          drawBz(ctx,canvas,yoff,xoff);
        }
        this.classList.add("clicked");
        span[i].style.color = "white";

      }
      else {
        span[i].style.color = "#ed5b5b";
        tab[i].classList.remove("clicked");
      }
    }



  };
  var myFunction2 = function () {
    let span = document.getElementsByClassName("radioTag");
    for (let i = 0; i < tab.length; i++) {
      if (this == tab[i]) {
        span[i].style.color = "white";

      }
    }
  }

  var myFunction3 = function () {
    let span = document.getElementsByClassName("radioTag");
    let name = this.className;
    for (let i = 0; i < tab.length; i++) {
      if (this == tab[i] && !name.includes("clicked")) {
        span[i].style.color = "#ed5b5b";
        console.log("otorinolaringologija");
      }

    }
  }

  let tab = document.getElementsByClassName("box");
  for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', myFunction, false);
    tab[i].addEventListener('mouseover', myFunction2, false);
    tab[i].addEventListener('mouseout', myFunction3, false);
  }
  var logo=document.getElementById("logo_image");
  logo.addEventListener('click', sweetalert);

  
  




})()
function drawBz(ctx,canvas,yoff,xoff){
  ctx.beginPath();
  ctx.moveTo(359 + xoff, 199 + yoff);
  ctx.bezierCurveTo(402 + xoff, 173 + yoff, 437 + xoff, 155 + yoff, 416 + xoff, 161 + yoff);
  ctx.bezierCurveTo(402 + xoff, 166 + yoff, 389 + xoff, 170 + yoff, 363 + xoff, 180 + yoff);
  ctx.bezierCurveTo(339 + xoff, 190 + yoff, 331 + xoff, 190 + yoff, 310 + xoff, 197 + yoff);
  ctx.bezierCurveTo(284 + xoff, 204 + yoff, 271 + xoff, 198 + yoff, 277 + xoff, 166 + yoff);
  ctx.bezierCurveTo(271 + xoff, 169 + yoff, 238 + xoff, 211 + yoff, 263 + xoff, 230 + yoff);
  ctx.bezierCurveTo(277 + xoff, 237 + yoff, 294 + xoff, 230 + yoff, 306 + xoff, 225 + yoff);
  ctx.bezierCurveTo(335 + xoff, 213 + yoff, 358 + xoff, 198 + yoff, 371 + xoff, 192 + yoff);
  ctx.fillStyle="#ffffffb2";
  ctx.fill();
  }

  function sweetalert(){
    Swal.fire({
      title: 'This is my png logo!',
      imageUrl: 'assets/img/logo.png',
      background: '#444444',
      color:'#ffffff',
      imageAlt: 'Custom image',
    })
  }
