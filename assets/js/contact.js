function init(){
  var params = new URLSearchParams(window.location.search); 

  if (params==''){
      //Do nothing
  }else{
      if(params.has('submitted')){
          document.getElementById('sent').style.display='block';
          $('html, body').animate({
            'scrollTop' : $("#sent").position().top-250
        });
      }
  }
}

function check(){
  var params = new URLSearchParams(window.location.search); 

  if (params==''){
      //Do nothing
  }else{
      if(params.has('success')){
          document.getElementById('newsletter-success').style.display='block';
          $('html, body').animate({
            'scrollTop' : $("#footer").position().top-200
        });
      }
  }
}

window.onload = function() {
  check();
  init();
}
