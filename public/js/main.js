$("#play").on("click", function(e) {
  e.preventDefault();
  $("#player")[0].src += "?autoplay=1";
  $("#player").show();
  $("#video-cover").hide();
});
$("#modal1").on("hidden.bs.modal", function(e) {
  $("#modal1 iframe").attr("src", $("#modal1 iframe").attr("src"));
});

// Basic example
$(document).ready(function() {
  $("#dtBasicExample").DataTable({
    pagingType: "simple" // "simple" option for 'Previous' and 'Next' buttons only
  });
  $(".dataTables_length").addClass("bs-select");
});

// $(".carousel.carousel-multi-item.v-2 .carousel-item").each(function() {
//   var next = $(this).next();
//   if (!next.length) {
//     next = $(this).siblings(":first");
//   }
//   next
//     .children(":first-child")
//     .clone()
//     .appendTo($(this));

//   for (var i = 0; i < 4; i++) {
//     next = next.next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next
//       .children(":first-child")
//       .clone()
//       .appendTo($(this));
//   }
// });
