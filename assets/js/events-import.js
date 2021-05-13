$(document).ready(function(){
    setTimeout(function() {
        $('#loading').fadeOut();
    }, 1000);
});

window.onload = function() {
    init()
  };

 var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1SpYfel3GzCs22EL8Ly0z-pz33Gt3u-p-3oRmr0JybYk/edit?usp=sharing';

  function init() {
    Tabletop.init({
      key: public_spreadsheet_url,
      callback: showInfo,
      simpleSheet: true
    })
  }

  function showInfo(data, tabletop) {
    var event_card="";
    for (var i = 0; i < data.length; i++) {
      event_card += "<div class='event-card filter-2020'><div class='event-card-image-container2' style=" + '"' + "background-image: url('" + data[i].ImageLink+ "');" + '"' +"><div id='image-overlay'> <a href='" + data[i].ImageLink + "' class='events-lightbox'><span id='event-img-btn'>Open</span> </a></div></div><div class='event-card-content'><h2>" + data[i].EventName + "</h2><p>" + data[i].EventDescription + "</p></div><div class='event-date-btn'><span> " + data[i].Date + " </span><a class='event-btn' href='" + data[i].ButtonLink + "'>Learn More</a></div></div></div>";
    }
    document.getElementById("event-cards-container").innerHTML = event_card;
    const portfolioLightbox = GLightbox({selector: '.events-lightbox'});
    //console.log(event_card);
  } 