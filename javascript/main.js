
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    items: 4
  });
  $("#lang").click(function () {
    let display = $(".options").css("display");
    if (display == "none") {
      $(".options").css("display", "block");
    } else {
      $(".options").css("display", "none");
    }
  });
  $("#USD").click(function () {
    alert("ok");
  });
  $("#EUR").click(function () {
    alert("ok");
  });
  $(document).scroll(function () {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $(".top-heading").addClass("d-none");
    } else {
      $(".top-heading").removeClass("d-none");
    }
  });
});