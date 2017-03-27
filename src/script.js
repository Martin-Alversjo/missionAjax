$('.dropdown-toggle').dropdown()

$("#country-btn").click(function() {
  $(".word-form").addClass("noShow");
  $(".planet-form").addClass("noShow");
  $(".country-form").removeClass("noShow");
})

$("#word-btn").click(function() {
  $(".country-form").addClass("noShow");
  $(".planet-form").addClass("noShow");
  $(".word-form").removeClass("noShow");
});

$("#planet-btn").click(function() {
  $(".country-form").addClass("noShow");
  $(".word-form").addClass("noShow");
  $(".planet-form").removeClass("noShow");
})
