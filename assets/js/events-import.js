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
    var tr;
    for (var i = 0; i < data.length; i++) {
      tr = $("<div class='event-card'>");
      tr.append("<div class='event-card-image-container2' style=" + '"' + "background-image: url('"+ data[i].ImageLink + "');" + '"' + "></div><div class='event-card-content'><h2>"+ data[i].EventName + "</h2><p>" + data[i].EventDescription + "</p></div><div class='event-date-btn'> <span>"+ data[i].Date +"</span> <a class='event-btn' href='" + data[i].ButtonLink + "'>Learn More</a></div></div>");
      $('.event-cards-container').append(tr);
    }
    console.log(data);
  } 

