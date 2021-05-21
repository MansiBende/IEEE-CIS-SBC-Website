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

  function hidePreloader(){
      document.getElementById("loading").style.display = "none";
  }

  function showInfo(data, tabletop) {
    var event_card=document.getElementById("event-cards-container").innerHTML;
    for (var i = data.length-1; i >= 0; i--) {
      event_card += "<div class='event-card " + data[i].Year + "'> <div class='event-card-image-container2' style=" + '"' + "background-image: url('" + data[i].ImageLink+ "');" + '"' +"><div id='image-overlay'> <a href='" + data[i].ImageLink + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "'><span id='event-img-btn'>Open</span> </a></div></div><div class='event-card-content'><h2 class='event-name'>" + data[i].EventName + "</h2><p>" + data[i].EventDescription + "</p></div><div class='event-date-btn'><span> " + data[i].Date + " </span>";
      if(data[i].Image_2!=''){
        event_card +="<a href='" + data[i].Image_2 + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "' >";
      }
      if(data[i].Image_3!=''){
        event_card +="<a href='" + data[i].Image_3 + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "' >";
      }
      if(data[i].Image_4!=''){
        event_card +="<a href='" + data[i].Image_4 + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "' >";
      }
      if(data[i].Image_5!=''){
        event_card +="<a href='" + data[i].Image_5 + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "' >";
      }
      if(data[i].Image_6!=''){
        event_card +="<a href='" + data[i].Image_6 + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "' >";
      }
      if(data[i].Image_7!=''){
        event_card +="<a href='" + data[i].Image_7 + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "' >";
      }
      if(data[i].Image_8!=''){
        event_card +="<a href='" + data[i].Image_8 + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "' >";
      }
      if(data[i].Image_9!=''){
        event_card +="<a href='" + data[i].Image_9 + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "' >";
      }
      if(data[i].Image_10!=''){
        event_card +="<a href='" + data[i].Image_10 + "' class='events-lightbox' data-gallery='gallery" + data[i].SrNo + "' data-title='" + data[i].EventName + "' >";
      }
      if(data[i].ButtonLink!=''){
      event_card += "<a class='event-btn' href='" + data[i].ButtonLink + "' target='_blank'>Learn More</a>";
      }
      event_card += "</div></div></div>";
      //console.log(event_card);
    }
    hidePreloader();
    
    document.getElementById("event-cards-container").innerHTML += event_card;
    document.getElementById("event-cards-container").classList.add("fade-in-bottom");
    document.getElementById("filters").style.display="block";
    const event_lightbox = GLightbox({selector: '.events-lightbox'});
    document.getElementById("default").click();
  }

  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("event-card");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
  }

  // Show filtered elements
  function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  // Hide elements that are not selected
  function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  //Filter Buttons Active Class Switcher
  var btnContainer = document.getElementById("filters");
  var btns = btnContainer.getElementsByClassName("button");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }


  // Search Event
  function Search_Event() {
    let input = document.getElementById('event-search-input').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('event-card');
    let y = document.getElementsByClassName('event-name') 
    
    for (i = 0; i < x.length; i++) {
      if (!y[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
      }
      else {
        x[i].style.display="";				
      }
    }
  }
