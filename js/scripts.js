// Business Logic
function mostFavoriteThings(favoriteThings) {
  let mostFavs = [];
  mostFavs.push(favoriteThings[1]);
  mostFavs.push(favoriteThings[0]);
  mostFavs.push(favoriteThings[2]);
  return mostFavs;
}


// UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    let favFood = $("#favFood").val();
    let favColor = $("#favColor").val();
    let favMusic = $("#favMusic").val();
    let favVacation = $("#favVacation").val();
    
    let favoriteThings = [favFood,favColor,favMusic,favVacation];

    mostFavoriteThings(favoriteThings).forEach(function(element) {
      $("ul#mostFavsList").append("<li>" + element + "</li>")
    });

    $("#results").fadeId();
    
    event.preventDefault();
    // console.log();
  });
});