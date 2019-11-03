
$(document).ready(function () {

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
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      $(".top-heading").addClass("d-none");
      $("#button2top").removeClass("d-none");

    } else {
      $(".top-heading").removeClass("d-none");
      $("#button2top").addClass("d-none");
    }
  });

  $("#button2top").click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  $(".image-container").hover(function () {
    $(".image-overlay", this).css({ "diplay": "block", "opacity": "1" });
    $(".image-overlay button", this).addClass("animated fadeInUp ")
  }, function () {
    $(".image-overlay", this).css({ "diplay": "none", "opacity": "0" });
    $(".image-overlay button", this).removeClass("animated fadeInUp")
  })

  $(".block-items").hover(function () {
    $(".overlay", this).css({ "diplay": "block", "opacity": "1" });
    $(".overlay div", this).addClass("animated fadeInUp ")
  }, function () {
    $(".overlay", this).css({ "diplay": "none", "opacity": "0" });
    $(".overlay div", this).removeClass("animated fadeInUp")
  })

  if(sessionStorage.getItem("count")==null){
    console.log("he")
    $("#items-count").text("0");
  }else{
    console.log("yox")
    $("#items-count").text(sessionStorage.getItem("count"));
  }
  $("button").click(function(){
    let text = $.trim($(this).text());
    if(text=="Add to card"){
      let count = parseInt($("#items-count").text());
      count++;
      sessionStorage.setItem("count", count);
      $("#items-count").text(sessionStorage.getItem("count"));
    }
  })

});
