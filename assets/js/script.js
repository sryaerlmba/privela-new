$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 20,
    dots: true,
    items: 3, 
    smartSpeed: 1000,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3 // pastiin ini 3
      }
    }
  });  
})  
