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

/*Dropdown Menu*/
$(".dropdown").click(function() {
  $(this)
    .attr("tabindex", 1)
    .focus();
  $(this).toggleClass("active");
  $(this)
    .find(".dropdown-menu")
    .slideToggle(300);
});
$(".dropdown").focusout(function() {
  $(this).removeClass("active");
  $(this)
    .find(".dropdown-menu")
    .slideUp(300);
});
$(".dropdown .dropdown-menu li").click(function() {
  $(this)
    .parents(".dropdown")
    .find("span")
    .text($(this).text());
  $(this)
    .parents(".dropdown")
    .find("input")
    .attr("value", $(this).attr("id"));
});
/*End Dropdown Menu*/

$(".dropdown-menu li").click(function() {
  var input =
      "<strong>" +
      $(this)
        .parents(".dropdown")
        .find("input")
        .val() +
      "</strong>",
    msg = '<span class="msg">Hidden input value: ';
  $(".msg").html(msg + input + "</span>");
});
