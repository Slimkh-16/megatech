var isMobile = false,
    scrollTop;
function getBrowser() {
    var ua = navigator.userAgent;
    var bName = function () {
        if (ua.search(/Edge/) > -1) return "edge";
        if (ua.search(/MSIE/) > -1) return "ie";
        if (ua.search(/Trident/) > -1) return "ie11";
        if (ua.search(/Firefox/) > -1) return "firefox";
        if (ua.search(/Opera/) > -1) return "opera";
        if (ua.search(/OPR/) > -1) return "operaWebkit";
        if (ua.search(/YaBrowser/) > -1) return "yabrowser";
        if (ua.search(/Chrome/) > -1) return "chrome";
        if (ua.search(/Safari/) > -1) return "safari";
        if (ua.search(/maxHhon/) > -1) return "maxHhon";
    }();
                                                                                                                                                                      
    var version;
    switch (bName) {
        case "edge":
            version = (ua.split("Edge")[1]).split("/")[1];
            break;
        case "ie":
            version = (ua.split("MSIE ")[1]).split(";")[0];
            break;
        case "ie11":
            bName = "ie";
            version = (ua.split("; rv:")[1]).split(")")[0];
            break;
        case "firefox":
            version = ua.split("Firefox/")[1];
            break;
        case "opera":
            version = ua.split("Version/")[1];
            break;
        case "operaWebkit":
            bName = "opera";
            version = ua.split("OPR/")[1];
            break;
        case "yabrowser":
            version = (ua.split("YaBrowser/")[1]).split(" ")[0];
            break;
        case "chrome":
            version = (ua.split("Chrome/")[1]).split(" ")[0];
            break;
        case "safari":
            //version = (ua.split("Version/")[1]).split(" ")[0];
            break;
        case "maxHhon":
            version = ua.split("maxHhon/")[1];
            break;
    }
    var platform = 'desktop';
    if (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())) platform = 'mobile';
    var browsrObj;
    try {
        browsrObj = {
            platform: platform,
            browser: bName,
            versionFull: version,
            versionShort: version.split(".")[0]
        };
    } catch (err) {
        browsrObj = {
            platform: platform,
            browser: 'unknown',
            versionFull: 'unknown',
            versionShort: 'unknown'
        };
    }
    return browsrObj;
};
var browserYou = getBrowser();
if (browserYou.platform == 'mobile') { isMobile = true; }
if ((browserYou.browser == 'ie' &&  browserYou.versionShort < +'9') || ((browserYou.browser == 'opera' || browserYou.browser == 'operaWebkit') && browserYou.versionShort < +'18') || (browserYou.browser == 'firefox' &&  browserYou.versionShort < +'30')) {
    alert('Обновите браузер','')
};
window.onload = function() {
  // PRELOADER
  var body = document.querySelector('body');
  body.classList.remove('noscroll')
  body.classList.add('loading')
  if (isMobile == true) {body.parentNode.classList.add('mobile'); }
  setTimeout(function(){body.classList.add('loaded')},1000)
  setTimeout(function(){document.querySelector('.preloader').style.display = 'none';},2500)
  // //PRELOADER
  var swiper = new Swiper('.slider-section-gen .swiper-container', {
      pagination: '.slider-section-gen .swiper-pagination',
      paginationClickable: true,
      loop:true,
      nextButton: '.slider-section-gen .swiper-button-next',
      prevButton: '.slider-section-gen .swiper-button-prev',
      parallax:true
      // spaceBetween: 30
  });
  if(document.querySelector('.select-wrapper input.select-dropdown') != undefined) {
    document.querySelector('.select-wrapper input.select-dropdown').value = "";
  }
  var swiper2 = new Swiper('.partners-slider', {
      loop:true,
      nextButton: '.our-partners .swiper-button-next',
      prevButton: '.our-partners .swiper-button-prev',
      slidesPerView: 4,
      breakpoints: {
          1024: {
              slidesPerView: 4
          },
          768: {
              slidesPerView: 3
          },
          640: {
              slidesPerView: 2
          },
          320: {
              slidesPerView: 1
          }
      }
  });
  var swiper = new Swiper('.testi-slider', {
      pagination: '.testimonials .swiper-pagination',
      paginationClickable: true,
      loop:true,
      // spaceBetween: 30
  });
  // logo-animate
  document.querySelector('.header .logo').onmouseover = function() {
    this.classList.add('active');
  }
  document.querySelector('.header .logo').onmouseout = function() {
    this.classList.remove('active');
  }
  // logo-animate
  catalogHeight ();
  if(document.querySelector('.catalog-body') != undefined) {
    catalogTab ();
  }
  // animate icon
    if($('.our-plus-it').length){
        var icon1 = document.querySelector('.our-plus-it--1'),
            icon1_2Elem = document.querySelector('.icon1_2Elem'),
            icon1_1Elem = document.querySelector('.icon1_1Elem');
        var t1 = new TimelineMax({paused: true,repeat: -1});
            t1.to(icon1_1Elem, 3, {rotation:360,transformOrigin:'50% 50%'})
              .to(icon1_2Elem, 1.5, {rotation:-360,transformOrigin:'50% 50%'},0.2)
          icon1.addEventListener("mouseenter", function(){
            t1.play();
          });
          icon1.addEventListener("mouseleave", function(){
            t1.stop();
          });
        var icon2 = document.querySelector('.our-plus-it--2'),
            t2 = new TimelineMax({paused: true ,repeat: -1}),
            icon2_1Elem = document.querySelectorAll('.icon2_1Elem');
            t2.to(icon2_1Elem, 1, {rotation:360,transformOrigin:'50% 50%', fill:'#0098cf'})
          icon2.addEventListener("mouseenter", function(){
            t2.play();
          });
          icon2.addEventListener("mouseleave", function(){
            t2.stop();
          });
        var icon3 = document.querySelector('.our-plus-it--3'),
            t3 = new TimelineMax({paused: true ,repeat: -1}),
            icon3_1Elem = document.querySelectorAll('.icon3_1Elem'),
            icon3_2Elem = document.querySelectorAll('.icon3_2Elem'),
            icon3_3Elem = document.querySelectorAll('.icon3_3Elem');
            t3.to(icon3_1Elem, 2, {rotation:360,transformOrigin:'50% 50%'})
              .to(icon3_2Elem, 0.5, {fill:'#0098cf'},0.5)
              .to(icon3_3Elem, 0.5, {fill:'#0098cf'},1);
          icon3.addEventListener("mouseenter", function(){
            t3.play();
          });
          icon3.addEventListener("mouseleave", function(){
            t3.stop();
          });
        var icon4 = document.querySelector('.our-plus-it--4'),
            icon4_1Elem = document.querySelector('.icon4_1Elem'),
            icon4_2Elem = document.querySelector('.icon4_2Elem');
        var t4 = new TimelineMax({paused: true, repeat: -1});
      t4.to(icon4_1Elem, 1, {scale:0,fill:'#0098cf', alpha: 0},0)
        .to(icon4_2Elem, 1, {scale:0,fill:'#0098cf', alpha: 0 },0.5);
      icon4.addEventListener("mouseenter", function(){
        t4.play();
      });
      icon4.addEventListener("mouseleave", function(){
        t4.reverse();
      });
    }
    // animate icon
    // map
    if(document.querySelector('.contact-map') != undefined) {
        initialize()
    }
    // map
    // mobile menu
    if (document.documentElement.className == 'mobile') {
        if(document.querySelector('.catalog-nav') != undefined) {
            document.querySelector('.catalog-nav').onclick = function() {
                scrollTo(document.body, document.querySelector('.catalog-body').offsetTop, 300)
            }
        }
        // if(document.querySelector('.our-project') != undefined) {
        //     document.querySelector('.our-project .tabs').onclick = function(e) {
        //         var _thisLeft = e.target.offsetLeft - 20;
        //         console.log(e.target.offsetLeft - 20 )
        //         var toLeft = setInterval(function(){
        //             document.querySelector('.our-project .tabs').scrollLeft +=  10
        //             if(document.querySelector('.our-project .tabs').scrollLeft  > _thisLeft) {
        //                clearInterval(toLeft) ;

        //             }
        //         },10)
                
        //     }
        // }
    }
    // product images
    if(document.querySelector('.product-images') != undefined) {
        document.querySelector('.product-img-list').onclick = function(e){
            var thisImagesBox = e.target;
            if (thisImagesBox.className == 'img-prd') {
                for (var i = 0; i < document.querySelectorAll('.product-img-it').length; i++) {
                    document.querySelectorAll('.product-img-it')[i].classList.remove('active');
                }
                thisImagesBox.parentNode.classList.add('active');
                var imgGen = e.target.getAttribute('src');
                document.querySelector('.product-gen-img img').setAttribute('src',imgGen);
            }
        }
    }
    // product images
    // catalog subhead
    document.querySelector('.sub-head-catalog__nav ul').onmouseover = function(e) {
        var subHav = e.target;
            if(e.target.hasAttribute('data-menu')) {
                var catalogId = e.target.getAttribute('data-menu');
                catalogHeight();
                for (var i = 0; i < document.querySelectorAll('.sub-head-catalog__nav ul li').length; i++) {
                    document.querySelectorAll('.sub-head-catalog__nav ul li')[i].classList.remove('active');
                }
                document.querySelector('.sub-head-catalog__nav ul li[data-menu="'+ catalogId +'"]').classList.add('active');
                for (var i = 0; i < document.querySelectorAll('.sub-catalog-cont').length; i++) {
                    document.querySelectorAll('.sub-catalog-cont')[i].classList.remove('visible');
                }
                document.querySelector('.sub-catalog-cont[data-menu="'+ catalogId +'"]').classList.add('visible');
                
            }

    }
    // catalog subhead
    // $('.sub-head-catalog__nav ul li').on('mouseover',function(){
    //         var catalogId = $(this).attr('data-menu');
    //         catalogHeight();
    //         $('.sub-head-catalog__nav ul li').removeClass('active');
    //          $(this).addClass('active');
    //         $('.sub-catalog-cont').removeClass('visible');
    //         $('.sub-catalog-cont[data-menu="'+ catalogId +'"]').addClass('visible');
    // });
    if(document.querySelector('.to-buy') !=undefined) {
      document.querySelector('.product-details .to-buy').addEventListener('click',function(e){
        e.preventDefault();
        scrollTo(document.body,document.getElementById('buy-product').offsetTop, 1000)
      },false);
    } 
}
window.onresize = function() {
    if(document.querySelector('.catalog-body') != undefined) {
      catalogTab ();
    }
}
window.onscroll = function() {
  scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
function catalogHeight () {
      if (document.querySelector('.sub-head-catalog__nav').clientHeight > 400) {
          document.querySelector('.sub-head-catalog__box').style.height =  document.querySelector('.sub-head-catalog__nav').clientHeight + 'px';
      }else {
          document.querySelector('.sub-head-catalog__box').style.height = '500px';
      }
}
function catalogTab () {
      if (document.querySelector('.catalog-nav').clientHeight > 400) {
          document.querySelector('.catalog-body ').style.height =  document.querySelector('.catalog-nav').clientHeight + 'px';
      }else {
          document.querySelector('.catalog-body').style.height = '500px';
      }
}
function initialize() {
  var myLatlng = new google.maps.LatLng(50, 35);
  var myCenter = new google.maps.LatLng(50, 35.02);
  var mapOptions = {
    zoom: 15,
    center: myCenter,
    scrollwheel: false,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: 'images/marker.png'
  });
};
function heightTabs(ell){
  var elem = document.querySelectorAll(ell);
  var maxH = 0;
  for (var i = 0; i < elem.length; ++i) {
    elem[i].style.height = "";
    elem[i].removeAttribute("style");
    if (maxH < elem[i].offsetHeight) {
      maxH = elem[i].offsetHeight; 
    }
  }
  for (var i = 0; i < elem.length; ++i) {
    elem[i].style.height = maxH + "px";
  }
}
$(document).ready(function() {
    $('input[data-validate="phone"]').mask("+38(999)999 99 99"); 
    //movile menu
    $('#menu-mobile').mmenu({
      "offCanvas": {
         "position": "right"
      },
      "extensions": [
        "theme-dark"
     ],
     "navbar" : [
        "title",""

     ],
     "navbars": [
      {
         "position": "bottom",
         "content": [
            "<a href='tel:0442228308'><span class='icon-ico-02'></span></a>",
            "<a href='mailto:info@megatech.kiev.ua'><span class='icon-ico-03'></span></a>"
         ]
      }
        ]
    });
    //mobile menu
    // hover menu
    $('.sub-menu').hover(
        function(){
            var _this =  $(this);
            _this.find('.sub-head-menu').css('display','block');
            $('.overlay-menu').addClass('visible');
            setTimeout(function(){
              _this.find('.sub-head-menu').addClass('visible');  
              catalogHeight();
            },50);
        },
        function(){
            var _this =  $(this);
            _this.find('.sub-head-menu').removeClass('visible'); 
            $('.overlay-menu').removeClass('visible');
            setTimeout(function(){
                _this.find('.sub-head-menu').css('display','none');
            },100);
        }
    );
    // hover menu
    $('.sub-head-menu--partner ul, .tab-list').autocolumnlist({
        columns: 2
    });
    $('.js_validate button[type="submit"], .js_code').on("click", function(){
      return validate($(this).parent(".js_validate"));
    }); 
    $('.dropdown-button').dropdown();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.collapsible').collapsible();
    $('.modal-trigger').leanModal({
        dismissible: true,
        opacity: .5, 
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
        ready: function() {
          $('body').addClass('open-modal');
        },
        complete: function() {
          $('body').removeClass('open-modal');
        }
    });
});
// validate form
function validate(form){
    var error_class = "error";
    var norma_class = "pass";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    var pass        = form.find('.password').val();
    var pass_1      = form.find('.password_1').val();
    var email       = false;
    var password    = false;
    var phone       = false;
    function mark (object, expression) {
        if (expression) {
            object.parent('div').addClass(error_class).removeClass(norma_class).find('.error_text').show();
            if (email && (object.val().length > 0)) {
              object.parent().attr('data-error','Некорректный email');
            }
            e++;
        } else
            object.parent('div').addClass(norma_class).removeClass(error_class).find('.error_text').hide();
    }
    form.find("[required]").each(function(){
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length === 0);
            break;
            case "email":
                email = true;
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                email = false;
            break;
            case "phone":
                phone = true;
                reg = /[0-9 -()+]{10}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                phone = false;
            break;
            case "pass":
                password = true;
                reg = /^[a-zA-Z0-9_-]{6,}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
                password = false;
            break;
            case "pass1":
                mark ($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break
        }
    })
    $('.js_valid_radio').each(function(){
        var inp = $(this).find('input.required');
        var rezalt = 0;
        for (var i = 0; i < inp.length; i++) {
            if ($(inp[i]).is(':checked') === true) {
                rezalt = 1;
                break;
            } else {
                rezalt = 0;
            }
        }
        if (rezalt === 0) {
           $(this).addClass(error_class).removeClass(norma_class);
            e=1;
        } else {
            $(this).addClass(norma_class).removeClass(error_class);
        }
    })
    if (e == 0) {
     return true;
    }
    else {
        form.find("."+error_class+" input:first").focus();
        return false;
    }
}
// validate form 
