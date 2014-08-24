$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     -60}, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$("#back2top a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     -80}, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$("#thumbs span a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     -80}, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});