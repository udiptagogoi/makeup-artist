//Use Strict Mode
(function($) {
  "use strict";

//Remove loading-wrapper class before window load
setTimeout(function(){
  $('.loading-wrapper').removeClass('loading-wrapper-hide');
  return false;
}, 10);

//Begin - Window Load
$(window).load(function(){

  //Page Loader 
  setTimeout(function(){
     $('#loader-name').addClass('loader-up');
    $('#loader-job').addClass('loader-up');
    $('#loader-animation').addClass('loader-up');
    return false;
  }, 500); 
  setTimeout(function(){
    $('#page-loader').addClass('loader-out');
    return false;
  }, 1100);  
  $('#page-loader').delay(1600).fadeOut(10);

  //Owl Carousel
  // >> Project Single
  $("#project-single-carousel").owlCarousel({
    navigation : false, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: true,
    singleItem: true,    
    navigationText: ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],     
  });

  //back-to-top button
  $('#header').waypoint(function(direction) {
      if (direction === 'down') {
        $('#back-to-top').removeClass('back-to-top-hide');     
      }
      else {
         $('#back-to-top').addClass('back-to-top-hide');  
      }     
    },
    {
     offset: '-400px'
  });
  function backToTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  }

  $('.back-to-top').on('click', function () {
    backToTop();
    return false;
  });

  //Isotope
  var $container = $('#isotope-filter'),
  $optionContainer = $('#options'),
  $options = $optionContainer.find('a[href^="#"]').not('a[href="#"]'),
  isOptionLinkClicked = false;

  $container.imagesLoaded( function() {
    $container.isotope({
      itemSelector : '.element',
      resizable: false,
      //filter: '*',
      transitionDuration: '0.8s',
      layoutMode: 'packery'
    });
  });

  function isotopeGO() {
    var thisThing = $(this),
      href = thisThing.attr('href');
        
      if ( thisThing.hasClass('selected') ) {
        return;
      } else {
        $options.removeClass('selected');
        thisThing.addClass('selected');
      }

      jQuery.bbq.pushState( '#' + href );
      isOptionLinkClicked = true;
      return false;
  }

  $options.on('click', function () { 
      isotopeGO();
  });

  $('.isotope-link').on('click', function () { 
      backToTop();
      isotopeGO();
  });

  $(window).on( 'hashchange', function( event ){
    var theFilter = window.location.hash.replace( /^#/, '');
    
    if( theFilter == false )
      theFilter = 'home';
      
    $container.imagesLoaded( function() {
      $container.isotope({
        filter: '.' + theFilter
      });
    });
    
    if ( isOptionLinkClicked == false ){
      $options.removeClass('selected');
      $optionContainer.find('a[href="#'+ theFilter +'"]').addClass('selected');
    }
    
    isOptionLinkClicked = false;
  }).trigger('hashchange');

  //Masonry Layout on Blog
  var $containerBlog = $('#blog-posts-masonry')

  $containerBlog.imagesLoaded( function() {
    $containerBlog.isotope({
      itemSelector : '.blog-item',
      resizable: false,
      //filter: '*',
      transitionDuration: '0.8s',
      layoutMode: 'packery'
    });
  });

  //Viewport
  var windowHeight = $(window).height();

  function adjustViewport() {
    $('.viewport').css('min-height', windowHeight);
    return false;
  }
  adjustViewport();

});

//Begin - Document Ready
$(document).ready(function(){


//Intro profile - hover
var hProfile = $('#profile');
var hProfilePic = $('#profile-picture');
var hProfileIntro = $('#profile-intro');
var hProfileMaskC = $('#profile-mask-content');
var hProfileHover = false;

function hProfileShow() {
  hProfileIntro.addClass('profile-intro-hover');
  hProfilePic.addClass('profile-picture-hover2');
  hProfileMaskC.addClass('profile-mask-content-hide');
}

function hProfileHide() {
  hProfilePic.removeClass('profile-picture-hover');
  hProfileIntro.removeClass('profile-intro-hover');
  hProfilePic.removeClass('profile-picture-hover2');
  hProfileMaskC.removeClass('profile-mask-content-hide');
}

hProfile.on('mouseenter', function () {
    hProfileMaskC.addClass('profile-mask-content-hide');
    $(this).addClass('profile-hover ');
    hProfilePic.addClass('profile-picture-hover');
    hProfileHover = true;
    setTimeout(function(){
      hProfileShow();
    }, 500);
    return false;
});

hProfile.on('mouseleave', function () {    
    $(this).removeClass('profile-hover');
    hProfileHover = false;
    hProfileHide();
    setTimeout(function(){
      hProfileHide();
    }, 500);
    return false;
});

//Services-hover
var thisBox =  null;
$('.element-box-interative').on('mouseenter', function() {

    thisBox =  $(this);      
    thisBox.addClass('element-box-hover1');

    var intervalBox1 = setTimeout(function(){
      thisBox.addClass('element-box-hover2');
      //clearInterval(intervalBox1);
    }, 400);
    var intervalBox2 = setTimeout(function(){
      thisBox.find('.element-box-ico').addClass('element-box-ico-hover');
      //clearInterval(intervalBox2);
    }, 800);
    return false;
});

$('.element-box-interative').on('mouseleave', function() {  
    thisBox =  $(this);     
    $('.element-box-ico').removeClass('element-box-ico-hover');
    var intervalBox3 = setTimeout(function(){
      $('.element-box-interative').removeClass('element-box-hover2');      
      //clearInterval(intervalBox3);
    }, 400);

    var intervalBox4 =setTimeout(function(){
      $('.element-box-interative').removeClass('element-box-hover1');
      $('.element-box-ico').removeClass('element-box-ico-hover');
      //clearInterval(intervalBox4);
    }, 800);
    return false;
});


//Collapse menu - desktops 
var dMenuBtn = 1;
$('#desktop-menu-button').on('click',function(){
  if(dMenuBtn == 1) {
    $('.desktop-menu-button-title').addClass('desktop-menu-button-title-disable');
    setTimeout(function(){
      $('#desktop-menu-button').addClass('desktop-menu-button-active');
      $('.nav').removeClass('navbar-hide');
    }, 300);    
    dMenuBtn = 2;
  }
  else if(dMenuBtn == 2){
    $(this).removeClass('desktop-menu-button-active');
    $('.nav').addClass('navbar-hide');     
    setTimeout(function(){
      $('.desktop-menu-button-title').removeClass('desktop-menu-button-title-disable');
    }, 300); 
    dMenuBtn = 1;
  }
});

// Fancybox
$(".fancybox-iframe-btn").fancybox({
  type: 'iframe',
  fitToView: true
});

$(".fancybox").fancybox({
});

$(".image-gallery a").fancybox({

});



// Double Tap to Go - Mobile Friendly SubMenus
$('.navbar-nav li:has(ul)').doubleTapToGo();

// Maps iframe Overlay
var map = $('#map');
map.on('click', function () {
    $('#map iframe').css("pointer-events", "auto");
    return false;
});

map.on('mouseleave', function () {
    $('#map iframe').css("pointer-events", "none");
    return false;
});

//Form Validator and Ajax Sender
$("#contactForm").validate({
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "php/contact-form.php",
      data: {
        "name": $("#contactForm #name").val(),
        "email": $("#contactForm #email").val(),
        "subject": $("#contactForm #subject").val(),
        "message": $("#contactForm #message").val()
      },
      dataType: "json",
      success: function (data) {
        if (data.response == "success") {
          $("#contactSuccess").fadeIn(300).addClass('modal-show');
          $("#contactError").addClass("hidden");  
          $("#contactForm #name, #contactForm #email, #contactForm #subject, #contactForm #message")
            .val("")
            .blur();         
        } else {
          $("#contactError").fadeIn(300).addClass('modal-show');
          $("#contactSuccess").addClass("hidden");
        }
      }
    });
  }
});


//Modal for Contact Form
$('.modal-wrap').click(function(){
  $('.modal-wrap').fadeOut(300);
}); 

//Modal for Forms
function hideModal() {
  $('.modal-wrap').fadeOut(300);
  return false;
}

$('.modal-wrap').on('click', function () {
  hideModal();
});   

$('.modal-bg').on('click', function () {
  hideModal();
}); 

//bootstrap tooltips
$('[data-toggle="tooltip"]').tooltip();

//End - Document Ready
});

//End - Use Strict mode
})(jQuery);