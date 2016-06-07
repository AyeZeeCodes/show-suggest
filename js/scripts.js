$(document).ready(function() {
  $("#show-form").submit(function(event) {
    var genre = $("#genre").val();
    var rating = $("#audienceRating").val();

    $(".comedy, .drama, .action").hide();

    if (genre === 'comedy' && rating === 'pg') {
      $(".comedy.ratingPG").show();
    } else if (genre === 'comedy' && rating ==='r') {
      $(".comedy.ratingR").show();
    } else if (genre === 'action' && rating === 'r') {
      $(".action.ratingR").show();
    }  else if (genre === 'action' && rating === 'pg') {
      $(".action.ratingPG").show();
    } else if (genre === 'drama' && rating === 'pg') {
      $(".drama.ratingPG").show();
    } else if (genre === 'drama' && rating === 'pg13') {
      $(".drama.ratingPG13").show();
    }else {
      alert ('Sorry, we don\'t have a show');
    }
    event.preventDefault();
  });
  $("#allShows").click(function(event) {
    event.preventDefault();
    $(".action, .drama, .comedy").toggle();
      if ($(this).text() === "Show all shows") {
        $(this).text("Hide all shows");
      } else {
        $(this).text("Show all shows");
      }
  });
});
