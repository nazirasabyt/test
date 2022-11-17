$(function () {
  $(".open-modal").on("click", function (e) {
    $(".modal").show();
    e.preventDefault();
  });
  $("#close").on("click", function () {
    $(".modal").hide();
  });
});

$(".form-container").submit(function (e) {
  alert("Your request is submitted! Thank you!");
  $("form").reset();
  e.preventDefault();
});
