$(document).ready(function(event) {

  var selection;
  $(".selector").click(function() {
    selection = $(this).val();
    if(selection === "Snakes") {
      $(".snake-info").toggle(1000);
      $(".turtle-info").hide();
      $(".insect-info").hide();
    }
    else if(selection == "Turtles") {
      $(".snake-info").hide();
      $(".turtle-info").toggle(1000);
      $(".insect-info").hide();
    }
    else if(selection == "Insects") {
      $(".snake-info").hide();
      $(".turtle-info").hide();
      $(".insect-info").toggle(1000);
    }


  });
  event.preventDefault();
});
