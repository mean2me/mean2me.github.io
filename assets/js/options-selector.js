$(document).ready(function () {
  $('.color-selector input[type="radio"]').on("click", function () {
    $("#selected-color").html($(this).val().toUpperCase());
  });

  $('.size-selector input[type="radio"]').on("click", function () {
    $("#selected-size").html($(this).val().toUpperCase());
  });
});
