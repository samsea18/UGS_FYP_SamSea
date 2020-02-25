//carousel next button
$('.carousel[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  console.log(next);
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i=0;i<2;i++) {
    next=next.next();

    if (!next.length) {
      next = $(this).siblings(':first');
  }
    next.children(':first-child').clone().appendTo($(this));
  }
});


//on-click change carousel
$("#categoryTrend").change(function() {
  if ($(this).val() == "electronics") {
    $('#myCarousel2').show();
    $('#myCarousel3').hide();
    $('#myCarousel4').hide();
  }
  else if ($(this).val() == "sneakers") {
    $('#myCarousel3').show();
    $('#myCarousel2').hide();
    $('#myCarousel4').hide();
  }
  else if($(this).val() == "watches") {
    $('#myCarousel4').show();
    $('#myCarousel2').hide();
    $('#myCarousel3').hide();
  }
  else {
    $('#myCarousel3').hide();
    $('#myCarousel4').hide();
  } 
});
