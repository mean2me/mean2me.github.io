$(document).ready(function () {
  var container = $("#carousel-vertical-selector");
  var ol = $("<ol></ol>");
  container.append(ol);
  var thumbs = $("#carousel-thumb img").each(function (idx) {
    var li = $("<li></li>");
    var img = $(this).clone();
    img.attr("data-id", idx);
    idx === 0 && img.addClass("active");
    img.on("click", function () {
      $("#carousel-thumb").carousel(idx);
    });
    li.append(img);
    ol.append(li);
  });
  $("#carousel-thumb").on("slide.bs.carousel", function (e) {
    $("#carousel-vertical-selector img").each(function (idx) {
      if (idx === e.to) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  });
});
