$(document).ready(function () {
    // Disable card
  $(".card").filter(".card-disable").css("background", 'url("./img/Photo.png")');
  $(".js-card-block").filter(".card-disable").children(".js-appeal-block1").addClass("displ-none");
  $(".js-card-block").filter(".card-disable").children(".js-appeal-block2").addClass("displ-none");
  $(".js-card-block").filter(".card-disable").children(".js-appeal-block3").removeClass("displ-none");

  // Hover card
  $(".js-card").mouseleave(function () {
    if (!$(this).parent(".js-card-block").hasClass("card-default-hover")) {
      $(this).parent(".js-card-block").addClass("card-default-hover");
    }
    if ($(this).parent(".js-card-block").hasClass("card-selected")) {
      $(this).parent(".js-card-block").addClass("card-selected-hover");
      $(this).find(".js-change-p").addClass("displ-none");
      $(this).find(".js-change-p2").removeClass("displ-none");
    }
    if ($(this).parent(".js-card-block").hasClass("card-disable")) {
      $(this).parent(".js-card-block").removeClass("card-selected");
      $(this).parent(".js-card-block").removeClass("card-default-hover");
      $(this).parent(".js-card-block").removeClass("card-selected-hover");
      $(this).find(".js-change-p").removeClass("displ-none");
      $(this).find(".js-change-p2").addClass("displ-none");
    }
  });

  $(".js-card").mouseenter(function () {
    if ($(this).parent(".js-card-block").hasClass("card-default-hover")) {
      $(this).parent(".js-card-block").removeClass("card-default-hover");
      $(this).find(".js-change-p").removeClass("displ-none");
      $(this).find(".js-change-p2").addClass("displ-none");
    }
    if ($(this).parent(".js-card-block").hasClass("card-selected-hover")) {
      $(this).parent(".js-card-block").removeClass("card-selected-hover");
    }
  });

  // Select card
  $(".js-card-block").on("click", function () {
    $(this).toggleClass("card-selected");
    $(this).children(".js-appeal-block1").toggleClass("displ-none");
    $(this).children(".js-appeal-block2").toggleClass("displ-none");
    // Disable card
    if ($(this).hasClass("card-disable")) {
      $(this).removeClass("card-selected");
      $(this).removeClass("card-default-hover");

    }
  });
  $(".js-link").on("click", function () {
    $(this).toggleClass("card-selected");
    $(this).children(".js-appeal-block1").toggleClass("displ-none");
    $(this).children(".js-appeal-block2").toggleClass("displ-none");
  });

});
